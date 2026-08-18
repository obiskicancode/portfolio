'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import SocialLinks from '@/components/ui/SocialLinks'
import { contactSchema, type contactSchemaType } from '@/schema/contact.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, CheckCircle2, Loader2, Mail, MessageSquare, User } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export default function ContactSection() {
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<contactSchemaType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = async (data: contactSchemaType) => {
    try {
      setSubmitError(null)
      const response = await fetch('/api/v1/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send message. Please try again.')
      }

      setIsSuccess(true)
      toast.success('Message sent successfully! I will be in touch soon.')
      reset()
      
      // Reset success state after a few seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (error) {
      const msg = error instanceof Error ? error.message : 'An error occurred'
      setSubmitError(msg)
      toast.error(msg)
    }
  }

  return (
    <section id="contact" className="relative py-28">
      {/* Top gradient divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/[0.04] blur-[120px]" />

      <div className="relative z-10 container mx-auto max-w-2xl px-6 text-center">
        <ScrollReveal>
          <p className="mb-3 font-mono text-sm tracking-wider text-emerald-600">
            Contact
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Let&apos;s build something exceptional.
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Currently available for freelance opportunities and serious roles.
          </p>
          <div className="mt-8 flex justify-center">
            <SocialLinks iconSize={22} />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <form
            className="mt-12 space-y-4 text-left"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Name */}
            <div>
              <label htmlFor="contact-name" className="sr-only">Name</label>
              <div className="group relative">
                <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 transition-colors group-focus-within:text-emerald-600">
                  <User size={16} />
                </div>
                <input
                  {...register('name')}
                  id="contact-name"
                  type="text"
                  placeholder="Name"
                  className={`w-full rounded-xl border bg-zinc-50 py-3.5 pl-11 pr-4 text-sm text-zinc-900 placeholder:text-zinc-500 transition-all hover:bg-zinc-100 focus:bg-white focus:outline-none focus:ring-1 ${
                    errors.name
                      ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20'
                      : 'border-zinc-200 hover:border-zinc-300 focus:border-emerald-600/40 focus:ring-emerald-600/20'
                  }`}
                />
              </div>
              {errors.name && (
                <p className="mt-1.5 px-2 text-xs text-red-400">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="contact-email" className="sr-only">Email</label>
              <div className="group relative">
                <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 transition-colors group-focus-within:text-emerald-600">
                  <Mail size={16} />
                </div>
                <input
                  {...register('email')}
                  id="contact-email"
                  type="email"
                  placeholder="Email"
                  className={`w-full rounded-xl border bg-zinc-50 py-3.5 pl-11 pr-4 text-sm text-zinc-900 placeholder:text-zinc-500 transition-all hover:bg-zinc-100 focus:bg-white focus:outline-none focus:ring-1 ${
                    errors.email
                      ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20'
                      : 'border-zinc-200 hover:border-zinc-300 focus:border-emerald-600/40 focus:ring-emerald-600/20'
                  }`}
                />
              </div>
              {errors.email && (
                <p className="mt-1.5 px-2 text-xs text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="contact-message" className="sr-only">Message</label>
              <div className="group relative">
                <div className="pointer-events-none absolute left-4 top-4 text-zinc-600 transition-colors group-focus-within:text-emerald-600">
                  <MessageSquare size={16} />
                </div>
                <textarea
                  {...register('message')}
                  id="contact-message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className={`w-full resize-none rounded-xl border bg-zinc-50 py-3.5 pl-11 pr-4 text-sm text-zinc-900 placeholder:text-zinc-500 transition-all hover:bg-zinc-100 focus:bg-white focus:outline-none focus:ring-1 ${
                    errors.message
                      ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20'
                      : 'border-zinc-200 hover:border-zinc-300 focus:border-emerald-600/40 focus:ring-emerald-600/20'
                  }`}
                />
              </div>
              {errors.message && (
                <p className="mt-1.5 px-2 text-xs text-red-400">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* General Submit Error */}
            {submitError && (
              <p className="rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-center text-sm text-red-400">
                {submitError}
              </p>
            )}

            {isSuccess && (
              <p className="flex items-center justify-center gap-2 rounded-lg border border-emerald-600/20 bg-emerald-50 p-3 text-sm text-emerald-600">
                <CheckCircle2 size={16} />
                Message sent successfully! I&apos;ll be in touch soon.
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className={`group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-sm font-medium transition-all duration-300 ${
                isSuccess
                  ? 'bg-zinc-200 text-zinc-500 cursor-not-allowed'
                  : 'bg-emerald-600 text-white hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(5,150,105,0.25)] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100'
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : isSuccess ? (
                'Sent'
              ) : (
                <>
                  Send Message
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </>
              )}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  )
}

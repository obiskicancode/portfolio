'use client'

import SocialLinks from '@/components/ui/SocialLinks'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Download, Mail } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

// Subtle floating animation keyframes
const floatVariants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Mouse-reactive tilt for the portrait card
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), {
    stiffness: 120,
    damping: 20,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), {
    stiffness: 120,
    damping: 20,
  })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 md:pt-40"
    >
      {/* Ambient glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/[0.06] blur-[120px]" />
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-emerald-600/[0.04] blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-zinc-300/[0.3] blur-[80px]" />
      </div>

      {/* Grid background */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />

      {/* Gradient fade at bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-50 to-transparent" />

      <div className="relative z-10 container mx-auto max-w-6xl px-6">
        <div className="flex flex-col-reverse items-center gap-16 lg:flex-row lg:items-center lg:justify-between">

          {/* Left — Text Content */}
          <div className="flex-1 lg:max-w-[55%]">
            {/* Overline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 font-mono text-sm tracking-wider text-emerald-600"
            >
              Product Engineer &amp; Full-Stack Developer
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Building scalable systems{' '}
              <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                &amp; exceptional products.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-500 sm:text-xl"
            >
             I bridge the gap between complex backend architecture and seamless frontend experiences to build scalable software products
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:flex-wrap"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(5,150,105,0.25)] active:scale-95"
              >
                View Projects
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-7 py-3.5 text-sm font-medium text-zinc-600 shadow-sm transition-all duration-300 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 active:scale-95"
              >
                <Mail size={16} className="text-zinc-400 transition-colors group-hover:text-zinc-600" />
                Let&apos;s Talk
              </a>
              <a
                href="/doc/obi_emmanuel_resume.pdf"
                download
                className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-7 py-3.5 text-sm font-medium text-zinc-600 shadow-sm transition-all duration-300 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 active:scale-95"
              >
                <Download size={16} className="text-zinc-400 transition-colors group-hover:text-zinc-600" />
                Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex items-center gap-4 sm:mt-10"
            >
              <SocialLinks iconSize={22} className="pl-1 sm:pl-2" />
            </motion.div>
          </div>

          {/* Right — Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex-shrink-0"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 800 }}
          >
            <motion.div
              variants={floatVariants}
              animate="animate"
              style={{ rotateX, rotateY }}
              className="relative"
            >
              {/* Glow behind portrait */}
              <div className="absolute -inset-4 rounded-3xl bg-emerald-500/10 blur-2xl" />
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-transparent blur-xl" />

              {/* Portrait card */}
              <div className="relative h-72 w-60 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-xl shadow-zinc-200/50 sm:h-80 sm:w-64 lg:h-96 lg:w-72">
                {/* Inner gradient overlay — subtle depth */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-white/50 via-transparent to-transparent" />
                <div className="absolute inset-0 z-10 bg-gradient-to-br from-emerald-500/[0.03] to-transparent" />

                {/* Portrait image */}
                <Image
                  src="/images/me.webp"
                  alt="Obiski — Full-Stack Product Engineer"
                  fill
                  priority
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 256px, 288px"
                  className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                />

                {/* Bottom label */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="rounded-xl border border-zinc-200/80 bg-white/80 px-4 py-2.5 backdrop-blur-md shadow-sm">
                    <p className="text-xs font-semibold text-zinc-900">Obi Emmanuel</p>
                    <p className="font-mono text-[10px] text-emerald-600">Full-Stack Product Engineer</p>
                  </div>
                </div>
              </div>

              {/* Floating badge — top right */}
              <motion.div
                initial={{ opacity: 0, x: 10, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -right-5 -top-4 z-20 flex items-center gap-2 rounded-full border border-zinc-200 bg-white/90 px-3 py-2 shadow-md backdrop-blur-md"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="font-mono text-[10px] text-zinc-600">Open to Select Opportunities</span>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

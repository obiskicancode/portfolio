'use client'

import GlowCard from '@/components/ui/GlowCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { Code2, GitBranch, GraduationCap, Rocket } from 'lucide-react'

export default function AboutSection({ repoCount = '7+' }: { repoCount?: string }) {
  const highlights = [
    { label: 'Projects Shipped', value: repoCount, icon: Code2 },
    { label: 'Tech Stack Depth', value: '20+', icon: GitBranch },
    { label: 'HNG Finalist', value: '🏆', icon: null },
  ]

  return (
    <section id="about" className="relative py-28">
      {/* Top gradient divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      <div className="container mx-auto max-w-6xl px-6">
        <SectionHeader overline="About" title="A bit about me" />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Main bio card — spans 2 cols */}
          <ScrollReveal delay={0.1} className="md:col-span-2">
            <GlowCard className="h-full">
              <div className="p-8 sm:p-10">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
                  <GraduationCap size={20} className="text-emerald-600" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-zinc-900">
                  SaaS Builder
                </h3>
                <p className="leading-relaxed text-zinc-600">
                  I am passionate about product development and business-focused
                  software. My focus is on creating systems that are not only
                  technically sound but also deliver real value to users.
                  I believe the best software is invisible, it solves the
                  problem so well that users never think about the engineering
                  behind it.
                </p>
              </div>
            </GlowCard>
          </ScrollReveal>

          {/* Quick Stats card */}
          <ScrollReveal delay={0.2}>
            <GlowCard className="h-full">
              <div className="flex h-full flex-col justify-center p-8 sm:p-10">
                <h3 className="mb-6 text-lg font-semibold text-zinc-900">
                  Quick Stats
                </h3>
                <div className="space-y-5">
                  {highlights.map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
                        {item.icon ? (
                          <item.icon size={18} className="text-emerald-600" />
                        ) : (
                          <span className="text-base">{item.value}</span>
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-zinc-900">
                          {item.icon ? item.value : 'Achievement'}
                        </p>
                        <p className="text-xs text-zinc-600">{item.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlowCard>
          </ScrollReveal>

          {/* Current Focus card — full width */}
          <ScrollReveal delay={0.3} className="md:col-span-3">
            <GlowCard>
              <div className="p-8 sm:p-10">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
                    <Rocket size={20} className="text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-zinc-900">
                      Current Focus
                    </h3>
                    <p className="leading-relaxed text-zinc-600">
                      Helping businesses transform ideas into reliable, scalable software.
                      I focus on building production-ready web applications, designing maintainable systems, and delivering products that create measurable business value.
                    </p>
                  </div>
                </div>
              </div>
            </GlowCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

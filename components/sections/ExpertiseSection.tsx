'use client'

import GlowCard from '@/components/ui/GlowCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { Database, MonitorSmartphone, Server } from 'lucide-react'

const stack = [
  {
    category: 'Frontend',
    icon: MonitorSmartphone,
    items: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    icon: Server,
    items: ['Node.js', 'NestJS', 'Express', 'Fastify', 'Python', 'FastAPI'],
  },
  {
    category: 'Infrastructure',
    icon: Database,
    items: ['Docker', 'RabbitMQ', 'PostgreSQL', 'Redis'],
  },
]

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="relative py-28">
      {/* Top gradient divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-emerald-500/[0.03] blur-[100px]" />

      <div className="container mx-auto max-w-6xl px-6">
        <SectionHeader
          overline="Expertise"
          title="Technical stack"
          description="The tools and technologies I use to build robust, high-performing applications"
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {stack.map((group, i) => (
            <ScrollReveal key={group.category} delay={0.1 + i * 0.1}>
              <GlowCard className="h-full">
                <div className="p-8">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
                    <group.icon size={20} className="text-emerald-600" />
                  </div>
                  <h3 className="mb-5 text-base font-semibold text-zinc-900">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-600 transition-colors hover:border-zinc-300 hover:text-zinc-900"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

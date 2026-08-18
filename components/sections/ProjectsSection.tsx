'use client'

import GlowCard from '@/components/ui/GlowCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { projects } from '@/constants'
import { ProjectType } from '@/types/project/project.types'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Circle, Code2, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Backend', value: ProjectType.API },
  { label: 'Full-Stack', value: ProjectType.WEB },
] as const

type FilterValue = (typeof filters)[number]['value']

function getProjectTags(project: (typeof projects)[number]): string[] {
  const tags: string[] = []
  const { stack } = project

  if (stack.backend?.frameworks) tags.push(...stack.backend.frameworks)
  if (stack.backend?.tools) tags.push(...stack.backend.tools)
  if (stack.infrastructure?.messaging) tags.push(...stack.infrastructure.messaging)
  if (stack.infrastructure?.virtualization) tags.push(...stack.infrastructure.virtualization)
  if (stack.persistence?.databases) tags.push(...stack.persistence.databases)
  if (stack.persistence?.orm) tags.push(...stack.persistence.orm)
  if (stack.frontend?.frameworks) tags.push(...stack.frontend.frameworks)
  if (stack.frontend?.tools) tags.push(...stack.frontend.tools)

  return tags
}

const gradients: Record<string, string> = {
  'W-Commerce': 'from-emerald-500/20 via-teal-500/10 to-transparent',
  'Distributed Notification System': 'from-blue-500/20 via-indigo-500/10 to-transparent',
  'Log Analyser Agent': 'from-amber-500/20 via-orange-500/10 to-transparent',
  'Paystack Wallet Service': 'from-violet-500/20 via-purple-500/10 to-transparent',
  'DevLinks': 'from-cyan-500/20 via-sky-500/10 to-transparent',
  'Notes': 'from-rose-500/20 via-pink-500/10 to-transparent',
  'Origin': 'from-indigo-500/20 via-blue-500/10 to-transparent',
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all')
  const [lightboxImage, setLightboxImage] = useState<{ src: string; name: string } | null>(null)

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.type === activeFilter)

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxImage(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxImage) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [lightboxImage])

  return (
    <section id="projects" className="relative py-28">
      {/* Top gradient divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      <div className="container mx-auto max-w-6xl px-6">
        <SectionHeader
          overline="Projects"
          title="Selected work"
          description="Real-world solutions I've built to tackle complex challenges."
        />

        {/* Filter tabs */}
        <div className="mb-10 flex items-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeFilter === filter.value
                  ? 'text-zinc-900'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              {activeFilter === filter.value && (
                <motion.span
                  layoutId="activeFilter"
                  className="absolute inset-0 rounded-full bg-zinc-100 border border-zinc-200"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{filter.label}</span>
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <ScrollReveal delay={0.1 + i * 0.05}>
                  <GlowCard className="flex h-full flex-col">
                    {/* Project image area — clickable for preview */}
                    <div
                      className={`group/img relative flex h-44 cursor-zoom-in items-center justify-center overflow-hidden bg-gradient-to-br ${gradients[project.name] || 'from-emerald-500/20 via-teal-500/10 to-transparent'} rounded-t-2xl border-b border-zinc-200`}
                      onClick={() =>
                        setLightboxImage({
                          src: `/images/projects/${project.image}`,
                          name: project.name,
                        })
                      }
                    >
                      <Image
                        src={`/images/projects/${project.image}`}
                        alt={project.name}
                        fill
                        priority={i < 3}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-top opacity-80 transition-all duration-500 group-hover/img:scale-[1.03] group-hover/img:opacity-100"
                      />

                      {/* "Click to preview" hint on hover */}
                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-t-2xl bg-zinc-900/10 opacity-0 backdrop-blur-[1px] transition-opacity duration-300 group-hover/img:opacity-100">
                        <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm">
                          Click to preview
                        </span>
                      </div>

                      {/* Grid dots overlay */}
                      <div className="bg-grid pointer-events-none absolute inset-0 rounded-t-2xl opacity-30" />

                      {/* Status badge */}
                      <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-zinc-200/80 bg-white/80 px-2.5 py-1 backdrop-blur-sm">
                        <Circle
                          size={6}
                          className={
                            project.status === 'live'
                              ? 'fill-emerald-500 text-emerald-500'
                              : 'fill-amber-500 text-amber-500'
                          }
                        />
                        <span className="font-mono text-[10px] text-zinc-700 capitalize">
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-auto">
                        <h3 className="mb-2 text-lg font-semibold text-zinc-900 group-hover:text-emerald-600 transition-colors">
                          {project.abbreviation || project.name}
                        </h3>
                        <p className="text-sm leading-relaxed text-zinc-600">
                          {project.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {getProjectTags(project).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-zinc-100 px-3 py-1 font-mono text-xs text-zinc-600 border border-zinc-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action links */}
                      <div className="mt-5 flex items-center gap-4 border-t border-zinc-200 pt-5">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link inline-flex items-center gap-1.5 text-sm text-zinc-600 transition-all duration-300 hover:text-emerald-600 active:scale-95"
                          >
                            <Code2 size={14} />
                            Source
                            <ArrowUpRight
                              size={12}
                              className="opacity-0 transition-all group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                            />
                          </a>
                        )}
                        {project.links.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link inline-flex items-center gap-1.5 text-sm text-zinc-600 transition-all duration-300 hover:text-emerald-600 active:scale-95"
                          >
                            <ExternalLink size={14} />
                            Live
                            <ArrowUpRight
                              size={12}
                              className="opacity-0 transition-all group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                            />
                          </a>
                        )}
                      </div>
                    </div>
                  </GlowCard>
                </ScrollReveal>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
            onClick={() => setLightboxImage(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-zinc-950/85 backdrop-blur-sm" />

            {/* Modal */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 10 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="relative z-10 flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Title bar */}
              <div className="flex shrink-0 items-center justify-between bg-zinc-900 px-5 py-3">
                <span className="text-sm font-medium text-zinc-300">{lightboxImage.name}</span>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="rounded-full p-1.5 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-white"
                  aria-label="Close preview"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Scrollable full image */}
              <div className="overflow-auto bg-zinc-950">
                <Image
                  src={lightboxImage.src}
                  alt={lightboxImage.name}
                  width={1200}
                  height={800}
                  className="h-auto w-full object-contain"
                  draggable={false}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

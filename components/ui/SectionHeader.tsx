import ScrollReveal from './ScrollReveal'

interface SectionHeaderProps {
  overline: string
  title: string
  description?: string
}

export default function SectionHeader({
  overline,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <ScrollReveal className="mb-16">
      <p className="mb-3 font-mono text-sm tracking-wider text-emerald-600">
        {overline}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-600">
          {description}
        </p>
      )}
    </ScrollReveal>
  )
}

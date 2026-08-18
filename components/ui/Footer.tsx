import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="relative z-10 container mx-auto max-w-6xl px-6">
      <div className="flex flex-col items-center justify-between gap-6 border-t border-zinc-200 pt-8 pb-12 sm:flex-row sm:pb-8">
        <p className="text-sm text-zinc-600">© {new Date().getFullYear()} Obiski. All rights reserved.</p>
        <SocialLinks iconSize={18} />
      </div>
    </footer>
  )
}

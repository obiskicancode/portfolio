import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-6 text-center px-6">
      <div className="relative">
        <span className="text-[120px] font-bold leading-none tracking-tighter text-zinc-200 sm:text-[160px]">
          404
        </span>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
        </div>
      </div>
      <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
        Page not found
      </h1>
      <p className="max-w-md text-zinc-600">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link 
        href="/"
        className="rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(5,150,105,0.25)] active:scale-95"
      >
        Return Home
      </Link>
    </div>
  )
}

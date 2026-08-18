'use client'

import config from '@/config'
import Link from 'next/link'
import { useEffect } from 'react'

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Unhandled application error:', error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-6 text-center px-6">
      <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10">
        <span className="text-2xl">⚠️</span>
      </div>
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">Something went wrong</h1>

      <p className="max-w-md text-zinc-600">
        I&apos;m looking into it now. If refreshing the page doesn&apos;t work, contact{' '}
        <Link
          href={`mailto:${config.SITE.contactAddress}`}
          className="text-emerald-600 hover:text-emerald-700 transition-colors underline underline-offset-4"
        >
          me
        </Link>{' '}
        for updates.
      </p>
      <button 
        onClick={() => reset()} 
        className="rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(5,150,105,0.25)] active:scale-95 cursor-pointer"
      >
        Try again
      </button>
    </div>
  )
}

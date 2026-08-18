import BackToTop from '@/components/ui/BackToTop'
import Footer from '@/components/ui/Footer'
import Navigation from '@/components/ui/Navigation'
import { Toaster } from '@/components/ui/sonner'
import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Geist, Geist_Mono } from 'next/font/google'
import config from '@/config'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Obiski | Product Engineer',
  description:
    'Portfolio of Obiski — a Full-Stack Product Engineer who builds scalable systems and exceptional digital products.',
  metadataBase: new URL(config.SITE.baseUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Obiski | Product Engineer',
    description:
      'Full-Stack Product Engineer building scalable systems and exceptional digital products.',
    url: config.SITE.baseUrl,
    siteName: 'Obiski Portfolio',
    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Obiski — Product Engineer & Full-Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Obiski | Product Engineer',
    description:
      'Full-Stack Product Engineer building scalable systems and exceptional digital products.',
    images: ['/images/og-image.webp'],
    creator: '@_obiski',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans min-h-screen bg-zinc-50 text-zinc-900 antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
          {/* Skip to content link for keyboard users */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-emerald-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
          >
            Skip to main content
          </a>
          <Toaster theme="light" />
          <Navigation />
          <main id="main-content" className="relative flex min-h-screen flex-col">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
        {config.ANALYTICS.gaId && (
          <GoogleAnalytics gaId={config.ANALYTICS.gaId} />
        )}
      </body>
    </html>
  )
}

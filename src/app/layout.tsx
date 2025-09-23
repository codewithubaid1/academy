import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Academic Coaching Center',
    template: '%s | Academic Coaching Center',
  },
  description: 'Evening Coaching and Mathematics Classes by expert teachers.',
  keywords: [
    'Academic Coaching Center',
    'Evening Classes',
    'Math Classes',
    'Coaching Institute',
    'Tutoring Burewala',
  ],
  openGraph: {
    title: 'Academic Coaching Center',
    description: 'Evening Coaching and Mathematics Classes by expert teachers.',
    url: 'https://alhamd-five.vercel.app',
    siteName: 'Academic Coaching Center',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://alhamd-five.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

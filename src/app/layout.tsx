import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Alhamd academic Coaching Center',
    template: '%s | Alhamd Academic Coaching Center',
  },
  description: 'Evening Coaching and Mathematics Classes by expert teachers.',
  keywords: [
    'Aphamd academic Coaching Center',
    'Evening Classes',
    'Math Classes',
    'Coaching Institute',
    'Tutoring Burewala',
  ],
  openGraph: {
    title: 'Alhamd academic Coaching Center',
    description: 'Evening Coaching and Mathematics Classes by expert teachers.',
    url: 'https://alhamd-five.vercel.app',
    siteName: 'Alhamd academic Coaching Center',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://alhamd-five.vercel.app',
  },
   verification: {
    google: 'oWxWi0NX3MaAq0qFtrd_e_tZyKJ3VWG7s-8z6mmD0zo',
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

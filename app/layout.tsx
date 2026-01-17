import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dr. Qamar Uz Zaman - Portfolio',
  description: 'Portfolio website of Dr. Qamar Uz Zaman, Ph.D. Management Sciences, Assistant Professor at COMSATS University Islamabad, Sahiwal Campus',
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

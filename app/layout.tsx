import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}

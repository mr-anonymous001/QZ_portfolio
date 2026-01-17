import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer'

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
      <body className="flex flex-col min-h-screen">
        {children}
        <Footer />
      </body>
    </html>
  )
}

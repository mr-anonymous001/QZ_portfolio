'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/education', label: 'Education' },
    { href: '/experience', label: 'Experience' },
    { href: '/aml-compliance', label: 'AML/CFT' },
    { href: '/research', label: 'Research' },
    { href: '/publications', label: 'Publications' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b-2 border-rustblue/50 shadow-xl" style={{ background: 'linear-gradient(90deg, #2D4A5E 0%, #3D5A73 25%, #4A6880 50%, #3D5A73 75%, #2D4A5E 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-lg sm:text-xl lg:text-2xl font-bold text-beige hover:text-beige-light transition">
            Dr. Qamar Uz Zaman
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-beige hover:bg-olive/50 transition"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop navigation */}
          <div className="hidden lg:flex space-x-4 xl:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-2 xl:px-3 py-2 rounded-md text-sm font-medium transition ${pathname === item.href
                  ? 'bg-olive text-beige font-semibold'
                  : 'text-beige hover:bg-olive/50 hover:text-beige-light'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition ${pathname === item.href
                    ? 'bg-olive text-beige font-semibold'
                    : 'text-beige hover:bg-olive/50 hover:text-beige-light'
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

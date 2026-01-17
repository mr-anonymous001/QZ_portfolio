'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/education', label: 'Education' },
    { href: '/experience', label: 'Experience' },
    { href: '/aml-compliance', label: 'AML/CFT Compliance' },
    { href: '/research', label: 'Research' },
    { href: '/publications', label: 'Publications' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b-2 border-rustblue/50 shadow-xl" style={{ background: 'linear-gradient(90deg, #2D4A5E 0%, #3D5A73 25%, #4A6880 50%, #3D5A73 75%, #2D4A5E 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-beige hover:text-beige-light transition">
            Dr. Qamar Uz Zaman
          </Link>
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition ${pathname === item.href
                    ? 'bg-olive text-beige font-semibold'
                    : 'text-beige hover:bg-olive/50 hover:text-beige-light'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

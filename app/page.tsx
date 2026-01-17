import Link from 'next/link'
import { cvData } from '@/data/cv'
import Navigation from '@/components/Navigation'
import ProfileSlideshow from '@/components/ProfileSlideshow'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-beige-light via-beige to-cream">
      <Navigation />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
          {/* Profile Slideshow */}
          <div className="flex-shrink-0">
            <ProfileSlideshow />
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            {/* Name and credentials */}
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-olive-dark mb-2 sm:mb-4">
              Dr. Qamar Uz Zaman
            </h1>
            <p className="text-sm sm:text-base lg:text-xl text-olive-dark/80 font-semibold mb-4 sm:mb-6">
              (Ph.D | ACFA | ACCA Part Qual.. | Ex-PWC)
            </p>

            {/* Title lines */}
            <div className="text-sm sm:text-base lg:text-xl text-olive mb-4 sm:mb-6 space-y-1">
              {cvData.title.split('\n').map((line, index) => (
                <p key={index} className="leading-relaxed">{line}</p>
              ))}
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
              <Link href="/publications" className="bg-beige/90 rounded-lg p-4 sm:p-6 shadow-md border-2 border-olive/20 hover:border-olive hover:bg-olive hover:text-beige transition-all duration-300 cursor-pointer group">
                <div className="text-2xl sm:text-3xl font-bold text-olive-dark group-hover:text-beige">{cvData.ssciPublications}</div>
                <div className="text-xs sm:text-sm text-olive mt-1 group-hover:text-beige/90">SSCI Publications</div>
              </Link>
              <Link href="/experience" className="bg-beige/80 rounded-lg p-4 sm:p-6 shadow-md border-2 border-olive/20 hover:border-olive hover:bg-olive hover:text-beige transition-all duration-300 cursor-pointer group">
                <div className="text-2xl sm:text-3xl font-bold text-olive-dark group-hover:text-beige">{cvData.experience}</div>
                <div className="text-xs sm:text-sm text-olive mt-1 group-hover:text-beige/90">Experience</div>
              </Link>
              <div className="bg-beige/70 rounded-lg p-4 sm:p-6 shadow-md border-2 border-olive/20 hover:border-olive/40 transition">
                <div className="text-2xl sm:text-3xl font-bold text-olive-dark">{cvData.thesisSupervision}</div>
                <div className="text-xs sm:text-sm text-olive mt-1">Thesis Supervision</div>
              </div>
              <Link href="/aml-compliance" className="bg-beige/60 rounded-lg p-4 sm:p-6 shadow-md border-2 border-olive/20 hover:border-olive hover:bg-olive hover:text-beige transition-all duration-300 cursor-pointer group col-span-2 sm:col-span-1">
                <div className="text-lg sm:text-xl font-bold text-olive-dark group-hover:text-beige">Expertise</div>
                <div className="text-xs sm:text-sm text-olive mt-1 group-hover:text-beige/90">Accounting, Finance, AML KYC Compliance</div>
              </Link>
            </div>

            {/* Quick Links */}
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <Link href="/about" className="px-4 sm:px-6 py-2.5 sm:py-3 bg-olive text-beige rounded-lg hover:bg-olive-dark transition shadow-md font-medium text-sm sm:text-base text-center">
                Learn More About Me
              </Link>
              <Link href="/publications" className="px-4 sm:px-6 py-2.5 sm:py-3 bg-beige text-olive-dark border-2 border-olive rounded-lg hover:bg-beige-dark transition shadow-md font-medium text-sm sm:text-base text-center">
                View Publications
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

import Link from 'next/link'
import { cvData } from '@/data/cv'
import ProfileImage from '@/components/ProfileImage'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-beige-light via-beige to-cream">
      <Navigation />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-olive to-olive-dark p-2 shadow-xl">
              <div className="w-full h-full rounded-full bg-beige flex items-center justify-center overflow-hidden">
                {cvData.profileImage ? (
                  <ProfileImage
                    src={cvData.profileImage}
                    alt={cvData.name}
                    width={256}
                    height={256}
                  />
                ) : (
                  <div className="text-olive text-sm text-center p-4">Profile Image</div>
                )}
              </div>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl font-bold text-olive-dark mb-4">
              Dr. Qamar Uz Zaman <span className="text-2xl font-semibold">(Ph.D | ACFA | ACCA Part Qual.. | Ex-PWC)</span>
            </h1>
            <div className="text-xl text-olive mb-6 space-y-1">
              {cvData.title.split('\n').map((line, index) => (
                <p key={index} className="leading-relaxed">{line}</p>
              ))}
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              <Link href="/publications" className="bg-beige/90 rounded-lg p-6 shadow-md border-2 border-olive/20 hover:border-olive hover:bg-olive hover:text-beige transition-all duration-300 cursor-pointer group">
                <div className="text-3xl font-bold text-olive-dark group-hover:text-beige">{cvData.ssciPublications}</div>
                <div className="text-sm text-olive mt-1 group-hover:text-beige/90">SSCI Publications</div>
              </Link>
              <Link href="/experience" className="bg-beige/80 rounded-lg p-6 shadow-md border-2 border-olive/20 hover:border-olive hover:bg-olive hover:text-beige transition-all duration-300 cursor-pointer group">
                <div className="text-3xl font-bold text-olive-dark group-hover:text-beige">{cvData.experience}</div>
                <div className="text-sm text-olive mt-1 group-hover:text-beige/90">Experience</div>
              </Link>
              <div className="bg-beige/70 rounded-lg p-6 shadow-md border-2 border-olive/20 hover:border-olive/40 transition">
                <div className="text-3xl font-bold text-olive-dark">{cvData.thesisSupervision}</div>
                <div className="text-sm text-olive mt-1">Thesis Supervision</div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-12 flex flex-wrap gap-4 justify-center md:justify-start">
              <Link href="/about" className="px-6 py-3 bg-olive text-beige rounded-lg hover:bg-olive-dark transition shadow-md font-medium">
                Learn More About Me
              </Link>
              <Link href="/publications" className="px-6 py-3 bg-beige text-olive-dark border-2 border-olive rounded-lg hover:bg-beige-dark transition shadow-md font-medium">
                View Publications
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

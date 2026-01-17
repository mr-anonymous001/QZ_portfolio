import { cvData } from '@/data/cv'
import Navigation from '@/components/Navigation'

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-beige-light via-beige to-cream">
      <Navigation />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-olive-dark mb-4 sm:mb-6 lg:mb-8">About</h2>
        <div className="bg-beige rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 border-2 border-olive/20">
          <p className="text-olive-dark text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
            {cvData.bio}
          </p>

          {/* Academic Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
            <div className="bg-cream rounded-lg p-4 sm:p-6 border border-olive/20">
              <h3 className="text-lg sm:text-xl font-semibold text-olive-dark mb-3 sm:mb-4">Research Metrics</h3>
              <ul className="space-y-2 text-olive-dark text-sm sm:text-base">
                <li><strong>ABDC:</strong> {cvData.abdc}</li>
                <li><strong>ABS:</strong> {cvData.abs}</li>
                <li><strong>Impact Factor:</strong> {cvData.impactFactor}</li>
                <li><strong>i10-index:</strong> {cvData.i10Index}</li>
              </ul>
            </div>
            <div className="bg-cream rounded-lg p-4 sm:p-6 border border-olive/20">
              <h3 className="text-lg sm:text-xl font-semibold text-olive-dark mb-3 sm:mb-4">Academic Roles</h3>
              <ul className="space-y-2 text-olive-dark text-sm sm:text-base">
                <li>• Head, Department of Management Sciences, CUI, Sahiwal</li>
                <li>• Focal Person, Center of Islamic Finance, CUI</li>
                <li>• Member, Academic Council, CUI</li>
                <li>• Member, Board of Studies</li>
                <li>• Thesis Supervision: {cvData.thesisSupervision} students</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

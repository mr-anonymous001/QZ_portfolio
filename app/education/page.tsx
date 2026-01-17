import { cvData } from '@/data/cv'
import Navigation from '@/components/Navigation'

export default function Education() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-beige-light via-beige to-cream">
      <Navigation />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-olive-dark mb-8">Education</h2>
        <div className="space-y-6">
          {cvData.education.map((edu, index) => (
            <div key={index} className="bg-beige rounded-lg shadow-lg p-6 border-2 border-olive/20 hover:border-olive/40 transition">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-2xl font-semibold text-olive-dark">{edu.degree}</h3>
                <span className="text-olive font-medium bg-cream px-4 py-1 rounded-full">{edu.year}</span>
              </div>
              <p className="text-lg text-olive-dark mb-2">{edu.institution}</p>
              {edu.field && (
                <p className="text-olive mb-2">Field: {edu.field}</p>
              )}
              {edu.thesisTitle && (
                <p className="text-olive italic border-l-4 border-olive pl-4 mt-3">{edu.thesisTitle}</p>
              )}
            </div>
          ))}
          
          {/* Certifications */}
          <div className="mt-12">
            <h3 className="text-3xl font-semibold text-olive-dark mb-6">Professional Certifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {cvData.certifications.map((cert, index) => (
                <div key={index} className="bg-beige rounded-lg shadow-lg p-6 border-2 border-olive/20">
                  <h4 className="font-semibold text-olive-dark text-lg">{cert.name}</h4>
                  <p className="text-olive mt-2">{cert.issuer} - {cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

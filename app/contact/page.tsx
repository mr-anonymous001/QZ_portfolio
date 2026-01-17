import { cvData } from '@/data/cv'
import Navigation from '@/components/Navigation'

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-beige-light via-beige to-cream">
      <Navigation />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-olive-dark mb-4 sm:mb-6 lg:mb-8">Contact</h2>
        <div className="bg-beige rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 border-2 border-olive/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-olive-dark mb-3 sm:mb-4">Contact Information</h3>
              <div className="space-y-3 text-olive-dark text-sm sm:text-base">
                <div>
                  <strong>Email:</strong>
                  <div className="mt-1">
                    {cvData.email.map((email, index) => (
                      <a key={index} href={`mailto:${email}`} className="block text-olive hover:text-olive-dark underline break-all">
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <strong>Phone:</strong>
                  <div className="mt-1">
                    {cvData.phone.map((phone, index) => (
                      <a key={index} href={`tel:${phone}`} className="block text-olive hover:text-olive-dark underline">
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <strong>Nationality:</strong> {cvData.nationality}
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-olive-dark mb-3 sm:mb-4">Research Profiles</h3>
              <div className="space-y-3 text-olive-dark text-sm sm:text-base">
                {cvData.linkedin && (
                  <div>
                    <strong>LinkedIn:</strong>{' '}
                    <a href={`https://linkedin.com/in/${cvData.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-olive hover:text-olive-dark underline break-all">
                      {cvData.linkedin}
                    </a>
                  </div>
                )}
                {cvData.orcid && (
                  <div>
                    <strong>ORCID:</strong>{' '}
                    <a href={`https://orcid.org/${cvData.orcid}`} target="_blank" rel="noopener noreferrer" className="text-olive hover:text-olive-dark underline break-all">
                      {cvData.orcid}
                    </a>
                  </div>
                )}
                {cvData.researcherId && (
                  <div>
                    <strong>ResearcherID:</strong> <span className="break-all">{cvData.researcherId}</span>
                  </div>
                )}
                {cvData.publons && (
                  <div>
                    <strong>Publons:</strong> <span className="break-all">{cvData.publons}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t-2 border-olive/20">
            <h3 className="text-lg sm:text-xl font-semibold text-olive-dark mb-3 sm:mb-4">Languages</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {cvData.languages.map((lang, index) => (
                <div key={index} className="bg-cream rounded-lg p-3 sm:p-4 border border-olive/20">
                  <strong className="text-olive-dark text-sm sm:text-base">{lang.language}:</strong>
                  <p className="text-olive mt-1 text-sm sm:text-base">{lang.proficiency}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Service */}
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t-2 border-olive/20">
            <h3 className="text-lg sm:text-xl font-semibold text-olive-dark mb-3 sm:mb-4">Professional Service</h3>
            <div className="space-y-4 sm:space-y-6">
              {cvData.professionalService.map((service, index) => (
                <div key={index} className="bg-cream rounded-lg p-3 sm:p-4 border border-olive/20">
                  <h4 className="text-base sm:text-lg font-semibold text-olive-dark mb-2 sm:mb-3">{service.title}</h4>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-olive-dark text-sm sm:text-base">• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

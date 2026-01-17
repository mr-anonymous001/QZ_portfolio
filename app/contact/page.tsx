import { cvData } from '@/data/cv'
import Navigation from '@/components/Navigation'

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-beige-light via-beige to-cream">
      <Navigation />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-olive-dark mb-8">Contact</h2>
        <div className="bg-beige rounded-lg shadow-lg p-8 border-2 border-olive/20">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-olive-dark mb-4">Contact Information</h3>
              <div className="space-y-3 text-olive-dark">
                <div>
                  <strong>Email:</strong>
                  <div className="mt-1">
                    {cvData.email.map((email, index) => (
                      <a key={index} href={`mailto:${email}`} className="block text-olive hover:text-olive-dark underline">
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
              <h3 className="text-xl font-semibold text-olive-dark mb-4">Research Profiles</h3>
              <div className="space-y-3 text-olive-dark">
                {cvData.linkedin && (
                  <div>
                    <strong>LinkedIn:</strong>{' '}
                    <a href={`https://linkedin.com/in/${cvData.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-olive hover:text-olive-dark underline">
                      {cvData.linkedin}
                    </a>
                  </div>
                )}
                {cvData.orcid && (
                  <div>
                    <strong>ORCID:</strong>{' '}
                    <a href={`https://orcid.org/${cvData.orcid}`} target="_blank" rel="noopener noreferrer" className="text-olive hover:text-olive-dark underline">
                      {cvData.orcid}
                    </a>
                  </div>
                )}
                {cvData.researcherId && (
                  <div>
                    <strong>ResearcherID:</strong> {cvData.researcherId}
                  </div>
                )}
                {cvData.publons && (
                  <div>
                    <strong>Publons:</strong> {cvData.publons}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="mt-8 pt-8 border-t-2 border-olive/20">
            <h3 className="text-xl font-semibold text-olive-dark mb-4">Languages</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {cvData.languages.map((lang, index) => (
                <div key={index} className="bg-cream rounded-lg p-4 border border-olive/20">
                  <strong className="text-olive-dark">{lang.language}:</strong>
                  <p className="text-olive mt-1">{lang.proficiency}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Service */}
          <div className="mt-8 pt-8 border-t-2 border-olive/20">
            <h3 className="text-xl font-semibold text-olive-dark mb-4">Professional Service</h3>
            <div className="space-y-6">
              {cvData.professionalService.map((service, index) => (
                <div key={index} className="bg-cream rounded-lg p-4 border border-olive/20">
                  <h4 className="text-lg font-semibold text-olive-dark mb-3">{service.title}</h4>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-olive-dark">• {item}</li>
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

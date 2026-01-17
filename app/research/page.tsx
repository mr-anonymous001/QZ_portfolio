import { cvData } from '@/data/cv'
import Navigation from '@/components/Navigation'

export default function Research() {
  const completedSupervision = cvData.supervision.filter(s => s.status === 'completed');
  const ongoingSupervision = cvData.supervision.filter(s => s.status === 'ongoing');

  return (
    <main className="min-h-screen bg-gradient-to-br from-beige-light via-beige to-cream">
      <Navigation />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-olive-dark mb-8">Research</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-beige rounded-lg shadow-lg p-6 border-2 border-olive/20">
            <h3 className="text-2xl font-semibold text-olive-dark mb-4">Research Interests</h3>
            <ul className="space-y-2">
              {cvData.researchInterests.map((interest, index) => (
                <li key={index} className="text-olive-dark">• {interest}</li>
              ))}
            </ul>
          </div>
          <div className="bg-beige rounded-lg shadow-lg p-6 border-2 border-olive/20">
            <h3 className="text-2xl font-semibold text-olive-dark mb-4">Awards & Distinctions</h3>
            <ul className="space-y-3">
              {cvData.awards.map((award, index) => (
                <li key={index} className="text-olive-dark">
                  <strong className="text-olive-dark">{award.title}</strong>
                  {award.description && <span> - {award.description}</span>}
                  {award.year && <span className="text-olive"> ({award.year})</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Conference Presentations */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-olive-dark mb-6">Conference Presentations</h3>
          <div className="space-y-4">
            {cvData.conferences.map((conf, index) => (
              <div key={index} className="bg-beige rounded-lg shadow-lg p-6 border-2 border-olive/20 hover:border-olive/40 transition">
                <h4 className="text-lg font-semibold text-olive-dark mb-2">{conf.title}</h4>
                <p className="text-olive mb-1">{conf.authors}</p>
                <p className="text-olive">{conf.venue} ({conf.year})</p>
              </div>
            ))}
          </div>
        </div>

        {/* Thesis Supervision */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-olive-dark mb-6">Thesis Supervision</h3>
          
          {completedSupervision.length > 0 && (
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-olive-dark mb-4">Completed ({completedSupervision.length})</h4>
              <div className="space-y-4">
                {completedSupervision.map((sup, index) => (
                  <div key={index} className="bg-beige rounded-lg shadow-lg p-6 border-2 border-olive/20">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h5 className="font-semibold text-olive-dark">{sup.studentName}</h5>
                      <span className="text-olive font-medium bg-cream px-4 py-1 rounded-full">{sup.year}</span>
                    </div>
                    <p className="text-olive-dark italic border-l-4 border-olive pl-4 mt-2">{sup.thesisTitle}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {ongoingSupervision.length > 0 && (
            <div>
              <h4 className="text-xl font-semibold text-olive-dark mb-4">Ongoing ({ongoingSupervision.length})</h4>
              <div className="space-y-4">
                {ongoingSupervision.map((sup, index) => (
                  <div key={index} className="bg-beige rounded-lg shadow-lg p-6 border-l-4 border-olive">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h5 className="font-semibold text-olive-dark">{sup.studentName}</h5>
                      <span className="text-olive font-medium bg-cream px-4 py-1 rounded-full">{sup.year}</span>
                    </div>
                    <p className="text-olive-dark italic border-l-4 border-olive pl-4 mt-2">{sup.thesisTitle}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

import { cvData } from '@/data/cv'
import Navigation from '@/components/Navigation'

export default function Research() {
  const completedSupervision = cvData.supervision.filter(s => s.status === 'completed');
  const ongoingSupervision = cvData.supervision.filter(s => s.status === 'ongoing');

  return (
    <main className="min-h-screen bg-gradient-to-br from-beige-light via-beige to-cream">
      <Navigation />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-olive-dark mb-4 sm:mb-6 lg:mb-8">Research</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-beige rounded-lg shadow-lg p-4 sm:p-6 border-2 border-olive/20">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-olive-dark mb-3 sm:mb-4">Research Interests</h3>
            <ul className="space-y-2">
              {cvData.researchInterests.map((interest, index) => (
                <li key={index} className="text-olive-dark text-sm sm:text-base">• {interest}</li>
              ))}
            </ul>
          </div>
          <div className="bg-beige rounded-lg shadow-lg p-4 sm:p-6 border-2 border-olive/20">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-olive-dark mb-3 sm:mb-4">Awards & Distinctions</h3>
            <ul className="space-y-2 sm:space-y-3">
              {cvData.awards.map((award, index) => (
                <li key={index} className="text-olive-dark text-sm sm:text-base">
                  <strong className="text-olive-dark">{award.title}</strong>
                  {award.description && <span> - {award.description}</span>}
                  {award.year && <span className="text-olive"> ({award.year})</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Conference Presentations */}
        <div className="mt-6 sm:mt-8">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-olive-dark mb-4 sm:mb-6">Conference Presentations</h3>
          <div className="space-y-3 sm:space-y-4">
            {cvData.conferences.map((conf, index) => (
              <div key={index} className="bg-beige rounded-lg shadow-lg p-4 sm:p-6 border-2 border-olive/20 hover:border-olive/40 transition">
                <h4 className="text-base sm:text-lg font-semibold text-olive-dark mb-2">{conf.title}</h4>
                <p className="text-olive text-sm sm:text-base mb-1">{conf.authors}</p>
                <p className="text-olive text-sm sm:text-base">{conf.venue} ({conf.year})</p>
              </div>
            ))}
          </div>
        </div>

        {/* Thesis Supervision */}
        <div className="mt-8 sm:mt-12">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-olive-dark mb-4 sm:mb-6">Thesis Supervision</h3>

          {completedSupervision.length > 0 && (
            <div className="mb-6 sm:mb-8">
              <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-olive-dark mb-3 sm:mb-4">Completed ({completedSupervision.length})</h4>
              <div className="space-y-3 sm:space-y-4">
                {completedSupervision.map((sup, index) => (
                  <div key={index} className="bg-beige rounded-lg shadow-lg p-4 sm:p-6 border-2 border-olive/20">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h5 className="font-semibold text-olive-dark text-sm sm:text-base">{sup.studentName}</h5>
                      <span className="text-olive font-medium bg-cream px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm w-fit">{sup.year}</span>
                    </div>
                    <p className="text-olive-dark italic border-l-4 border-olive pl-3 sm:pl-4 mt-2 text-sm sm:text-base">{sup.thesisTitle}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {ongoingSupervision.length > 0 && (
            <div>
              <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-olive-dark mb-3 sm:mb-4">Ongoing ({ongoingSupervision.length})</h4>
              <div className="space-y-3 sm:space-y-4">
                {ongoingSupervision.map((sup, index) => (
                  <div key={index} className="bg-beige rounded-lg shadow-lg p-4 sm:p-6 border-l-4 border-olive">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h5 className="font-semibold text-olive-dark text-sm sm:text-base">{sup.studentName}</h5>
                      <span className="text-olive font-medium bg-cream px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm w-fit">{sup.year}</span>
                    </div>
                    <p className="text-olive-dark italic border-l-4 border-olive pl-3 sm:pl-4 mt-2 text-sm sm:text-base">{sup.thesisTitle}</p>
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

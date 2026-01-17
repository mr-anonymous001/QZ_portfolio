import { cvData } from '@/data/cv'
import Navigation from '@/components/Navigation'

export default function Publications() {
  const publishedPublications = cvData.publications.filter(p => p.status !== 'under-review');
  const underReviewPublications = cvData.publications.filter(p => p.status === 'under-review');

  return (
    <main className="min-h-screen bg-gradient-to-br from-beige-light via-beige to-cream">
      <Navigation />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-olive-dark mb-8">Publications</h2>
        
        {/* Published Publications */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-olive-dark mb-6">
            Peer-Reviewed Publications ({publishedPublications.length})
          </h3>
          <div className="space-y-4">
            {publishedPublications.map((pub, index) => (
              <div key={index} className="bg-beige rounded-lg shadow-lg p-6 border-2 border-olive/20 hover:border-olive/40 transition">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-olive-dark mb-2">
                      {pub.title}
                    </h4>
                    <p className="text-olive-dark mb-2">{pub.authors}</p>
                    {pub.journal && (
                      <p className="text-olive italic mb-2">
                        {pub.journal} ({pub.year})
                      </p>
                    )}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {pub.impactFactor && (
                        <span className="px-3 py-1 bg-olive text-beige rounded-full text-sm font-medium">
                          IF: {pub.impactFactor}
                        </span>
                      )}
                      {pub.abdc && (
                        <span className="px-3 py-1 bg-olive-light text-beige rounded-full text-sm font-medium">
                          ABDC: {pub.abdc}
                        </span>
                      )}
                      {pub.hjrs && (
                        <span className="px-3 py-1 bg-cream text-olive-dark border border-olive rounded-full text-sm font-medium">
                          HJRS: {pub.hjrs}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-olive hover:text-olive-dark underline mt-2 inline-block font-medium"
                  >
                    View Publication →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Under Review Publications */}
        {underReviewPublications.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-olive-dark mb-6">
              Submissions Under Review ({underReviewPublications.length})
            </h3>
            <div className="space-y-4">
              {underReviewPublications.map((pub, index) => (
                <div key={index} className="bg-beige rounded-lg shadow-lg p-6 border-l-4 border-olive">
                  <h4 className="text-lg font-semibold text-olive-dark mb-2">
                    {pub.title}
                  </h4>
                  <p className="text-olive-dark mb-2">{pub.authors}</p>
                  {pub.journal && (
                    <p className="text-olive italic mb-2">
                      {pub.journal}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {pub.impactFactor && (
                      <span className="px-3 py-1 bg-olive text-beige rounded-full text-sm font-medium">
                        IF: {pub.impactFactor}
                      </span>
                    )}
                    {pub.abdc && (
                      <span className="px-3 py-1 bg-olive-light text-beige rounded-full text-sm font-medium">
                        ABDC: {pub.abdc}
                      </span>
                    )}
                    <span className="px-3 py-1 bg-cream text-olive-dark border-2 border-olive rounded-full text-sm font-medium">
                      Under Review
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  )
}

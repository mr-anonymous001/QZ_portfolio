import Link from 'next/link'
import { cvData } from '@/data/cv'
import ProfileImage from '@/components/ProfileImage'

export default function Home() {
  const publishedPublications = cvData.publications.filter(p => p.status !== 'under-review');
  const underReviewPublications = cvData.publications.filter(p => p.status === 'under-review');
  const teachingExperience = cvData.experienceList.filter(e => e.type === 'teaching');
  const industryExperience = cvData.experienceList.filter(e => e.type === 'industry');
  const completedSupervision = cvData.supervision.filter(s => s.status === 'completed');
  const ongoingSupervision = cvData.supervision.filter(s => s.status === 'ongoing');

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-slate-900 dark:text-white">
              Dr. Qamar Uz Zaman
            </div>
            <div className="flex space-x-6">
              <Link href="#about" className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition">
                About
              </Link>
              <Link href="#education" className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition">
                Education
              </Link>
              <Link href="#experience" className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition">
                Experience
              </Link>
              <Link href="#research" className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition">
                Research
              </Link>
              <Link href="#publications" className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition">
                Publications
              </Link>
              <Link href="#contact" className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                {cvData.profileImage ? (
                  <ProfileImage
                    src={cvData.profileImage}
                    alt={cvData.name}
                    width={256}
                    height={256}
                  />
                ) : (
                  <div className="text-slate-400 text-sm text-center p-4">Profile Image</div>
                )}
              </div>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {cvData.name}
            </h1>
            <p className="text-2xl text-slate-600 dark:text-slate-300 mb-6">
              {cvData.title}
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{cvData.ssciPublications}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">SSCI Publications</div>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{cvData.citations}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Citations</div>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{cvData.hIndex}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">h-index</div>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{cvData.experience}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">About</h2>
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
            {cvData.bio}
          </p>
          
          {/* Academic Achievements */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Research Metrics</h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li><strong>ABDC:</strong> {cvData.abdc}</li>
                <li><strong>ABS:</strong> {cvData.abs}</li>
                <li><strong>Impact Factor:</strong> {cvData.impactFactor}</li>
                <li><strong>i10-index:</strong> {cvData.i10Index}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Academic Roles</h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
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

      {/* Education Section */}
      <section id="education" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Education</h2>
        <div className="space-y-6">
          {cvData.education.map((edu, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{edu.degree}</h3>
                <span className="text-slate-600 dark:text-slate-400">{edu.year}</span>
              </div>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-2">{edu.institution}</p>
              {edu.field && (
                <p className="text-slate-600 dark:text-slate-400 mb-2">Field: {edu.field}</p>
              )}
              {edu.thesisTitle && (
                <p className="text-slate-600 dark:text-slate-400 italic">Thesis: {edu.thesisTitle}</p>
              )}
            </div>
          ))}
          
          {/* Certifications */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Professional Certifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {cvData.certifications.map((cert, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white">{cert.name}</h4>
                  <p className="text-slate-600 dark:text-slate-400">{cert.issuer} - {cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Experience</h2>
        
        {/* Teaching Experience */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Teaching Experience</h3>
          <div className="space-y-4">
            {teachingExperience.map((exp, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white">{exp.position}</h4>
                  <span className="text-slate-600 dark:text-slate-400">
                    {exp.startDate} - {exp.endDate || 'Present'}
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300">{exp.institution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Experience */}
        <div>
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Industry Experience</h3>
          <div className="space-y-4">
            {industryExperience.map((exp, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white">{exp.position}</h4>
                  <span className="text-slate-600 dark:text-slate-400">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300">{exp.institution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Teaching Subjects */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Teaching Subjects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {cvData.teachingSubjects.map((category, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">{category.category}</h4>
                <ul className="space-y-2">
                  {category.subjects.map((subject, subIndex) => (
                    <li key={subIndex} className="text-slate-700 dark:text-slate-300">• {subject}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Research</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Research Interests</h3>
            <ul className="space-y-2">
              {cvData.researchInterests.map((interest, index) => (
                <li key={index} className="text-slate-700 dark:text-slate-300">• {interest}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Awards & Distinctions</h3>
            <ul className="space-y-3">
              {cvData.awards.map((award, index) => (
                <li key={index} className="text-slate-700 dark:text-slate-300">
                  <strong>{award.title}</strong>
                  {award.description && <span> - {award.description}</span>}
                  {award.year && <span className="text-slate-500"> ({award.year})</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Conference Presentations */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Conference Presentations</h3>
          <div className="space-y-4">
            {cvData.conferences.map((conf, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{conf.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 mb-1">{conf.authors}</p>
                <p className="text-slate-600 dark:text-slate-400">{conf.venue} ({conf.year})</p>
              </div>
            ))}
          </div>
        </div>

        {/* Thesis Supervision */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Thesis Supervision</h3>
          
          {completedSupervision.length > 0 && (
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Completed ({completedSupervision.length})</h4>
              <div className="space-y-4">
                {completedSupervision.map((sup, index) => (
                  <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h5 className="font-semibold text-slate-900 dark:text-white">{sup.studentName}</h5>
                      <span className="text-slate-600 dark:text-slate-400">{sup.year}</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 italic">{sup.thesisTitle}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {ongoingSupervision.length > 0 && (
            <div>
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Ongoing ({ongoingSupervision.length})</h4>
              <div className="space-y-4">
                {ongoingSupervision.map((sup, index) => (
                  <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h5 className="font-semibold text-slate-900 dark:text-white">{sup.studentName}</h5>
                      <span className="text-slate-600 dark:text-slate-400">{sup.year}</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 italic">{sup.thesisTitle}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Publications</h2>
        
        {/* Published Publications */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
            Peer-Reviewed Publications ({publishedPublications.length})
          </h3>
          <div className="space-y-4">
            {publishedPublications.map((pub, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {pub.title}
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 mb-2">{pub.authors}</p>
                    {pub.journal && (
                      <p className="text-slate-600 dark:text-slate-400 italic mb-2">
                        {pub.journal} ({pub.year})
                      </p>
                    )}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {pub.impactFactor && (
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm">
                          IF: {pub.impactFactor}
                        </span>
                      )}
                      {pub.abdc && (
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-sm">
                          ABDC: {pub.abdc}
                        </span>
                      )}
                      {pub.hjrs && (
                        <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-sm">
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
                    className="text-blue-600 dark:text-blue-400 hover:underline mt-2 inline-block"
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
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
              Submissions Under Review ({underReviewPublications.length})
            </h3>
            <div className="space-y-4">
              {underReviewPublications.map((pub, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border-l-4 border-yellow-500">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {pub.title}
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 mb-2">{pub.authors}</p>
                  {pub.journal && (
                    <p className="text-slate-600 dark:text-slate-400 italic mb-2">
                      {pub.journal}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {pub.impactFactor && (
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm">
                        IF: {pub.impactFactor}
                      </span>
                    )}
                    {pub.abdc && (
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-sm">
                        ABDC: {pub.abdc}
                      </span>
                    )}
                    <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded text-sm">
                      Under Review
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Professional Service Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Professional Service</h2>
        <div className="space-y-6">
          {cvData.professionalService.map((service, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-slate-700 dark:text-slate-300">• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Contact</h2>
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Contact Information</h3>
              <div className="space-y-3 text-slate-700 dark:text-slate-300">
                <div>
                  <strong>Email:</strong>
                  <div className="mt-1">
                    {cvData.email.map((email, index) => (
                      <a key={index} href={`mailto:${email}`} className="block text-blue-600 dark:text-blue-400 hover:underline">
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <strong>Phone:</strong>
                  <div className="mt-1">
                    {cvData.phone.map((phone, index) => (
                      <a key={index} href={`tel:${phone}`} className="block text-blue-600 dark:text-blue-400 hover:underline">
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
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Research Profiles</h3>
              <div className="space-y-3 text-slate-700 dark:text-slate-300">
                {cvData.linkedin && (
                  <div>
                    <strong>LinkedIn:</strong>{' '}
                    <a href={`https://linkedin.com/in/${cvData.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                      {cvData.linkedin}
                    </a>
                  </div>
                )}
                {cvData.orcid && (
                  <div>
                    <strong>ORCID:</strong>{' '}
                    <a href={`https://orcid.org/${cvData.orcid}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
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
          <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Languages</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {cvData.languages.map((lang, index) => (
                <div key={index} className="text-slate-700 dark:text-slate-300">
                  <strong>{lang.language}:</strong> {lang.proficiency}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Dr. Qamar Uz Zaman. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}

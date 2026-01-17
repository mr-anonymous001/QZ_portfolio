import { cvData } from '@/data/cv'
import Navigation from '@/components/Navigation'

export default function Experience() {
  const teachingExperience = cvData.experienceList.filter(e => e.type === 'teaching');
  const industryExperience = cvData.experienceList.filter(e => e.type === 'industry');

  return (
    <main className="min-h-screen bg-gradient-to-br from-beige-light via-beige to-cream">
      <Navigation />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-olive-dark mb-8">Experience</h2>
        
        {/* Teaching Experience */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-olive-dark mb-6">Teaching Experience</h3>
          <div className="space-y-4">
            {teachingExperience.map((exp, index) => (
              <div key={index} className="bg-beige rounded-lg shadow-lg p-6 border-2 border-olive/20 hover:border-olive/40 transition">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="text-xl font-semibold text-olive-dark">{exp.position}</h4>
                  <span className="text-olive font-medium bg-cream px-4 py-1 rounded-full">
                    {exp.startDate} - {exp.endDate || 'Present'}
                  </span>
                </div>
                <p className="text-olive-dark">{exp.institution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Experience */}
        <div>
          <h3 className="text-2xl font-semibold text-olive-dark mb-6">Industry Experience</h3>
          <div className="space-y-4">
            {industryExperience.map((exp, index) => (
              <div key={index} className="bg-beige rounded-lg shadow-lg p-6 border-2 border-olive/20 hover:border-olive/40 transition">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="text-xl font-semibold text-olive-dark">{exp.position}</h4>
                  <span className="text-olive font-medium bg-cream px-4 py-1 rounded-full">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <p className="text-olive-dark">{exp.institution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Teaching Subjects */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-olive-dark mb-6">Teaching Subjects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {cvData.teachingSubjects.map((category, index) => (
              <div key={index} className="bg-beige rounded-lg shadow-lg p-6 border-2 border-olive/20">
                <h4 className="text-xl font-semibold text-olive-dark mb-4">{category.category}</h4>
                <ul className="space-y-2">
                  {category.subjects.map((subject, subIndex) => (
                    <li key={subIndex} className="text-olive-dark">• {subject}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

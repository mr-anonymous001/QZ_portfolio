import { cvData } from '@/data/cv'

export default function Footer() {
    return (
        <footer id="contact" className="mt-auto border-t-2 border-olive/30" style={{ background: 'linear-gradient(90deg, #2D4A5E 0%, #3D5A73 25%, #4A6880 50%, #3D5A73 75%, #2D4A5E 100%)' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-beige mb-3 sm:mb-4">Contact</h3>
                        <div className="space-y-2 text-beige/90 text-sm sm:text-base">
                            <div>
                                <strong className="text-beige">Email:</strong>
                                <div className="mt-1">
                                    {cvData.email.map((email, index) => (
                                        <a key={index} href={`mailto:${email}`} className="block text-beige/80 hover:text-beige transition break-all">
                                            {email}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <strong className="text-beige">Phone:</strong>
                                <div className="mt-1">
                                    {cvData.phone.map((phone, index) => (
                                        <a key={index} href={`tel:${phone}`} className="block text-beige/80 hover:text-beige transition">
                                            {phone}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Research Profiles */}
                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-beige mb-3 sm:mb-4">Research Profiles</h3>
                        <div className="space-y-2 text-beige/90 text-sm sm:text-base">
                            {cvData.linkedin && (
                                <a href={`https://linkedin.com/in/${cvData.linkedin}`} target="_blank" rel="noopener noreferrer" className="block text-beige/80 hover:text-beige transition">
                                    LinkedIn
                                </a>
                            )}
                            {cvData.orcid && (
                                <a href={`https://orcid.org/${cvData.orcid}`} target="_blank" rel="noopener noreferrer" className="block text-beige/80 hover:text-beige transition">
                                    ORCID
                                </a>
                            )}
                            {cvData.researcherId && (
                                <p className="text-beige/80">ResearcherID: {cvData.researcherId}</p>
                            )}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-beige mb-3 sm:mb-4">Quick Links</h3>
                        <div className="space-y-2 text-sm sm:text-base">
                            <a href="/about" className="block text-beige/80 hover:text-beige transition">About</a>
                            <a href="/publications" className="block text-beige/80 hover:text-beige transition">Publications</a>
                            <a href="/research" className="block text-beige/80 hover:text-beige transition">Research</a>
                            <a href="/experience" className="block text-beige/80 hover:text-beige transition">Experience</a>
                        </div>
                    </div>

                    {/* Languages */}
                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-beige mb-3 sm:mb-4">Languages</h3>
                        <div className="space-y-2 text-sm sm:text-base">
                            {cvData.languages.map((lang, index) => (
                                <p key={index} className="text-beige/80">
                                    <strong className="text-beige">{lang.language}:</strong> {lang.proficiency}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-6 border-t border-beige/20 text-center">
                    <p className="text-beige/70 text-sm">
                        © {new Date().getFullYear()} Dr. Qamar Uz Zaman. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

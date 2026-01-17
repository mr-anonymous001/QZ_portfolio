// CV data structure - Dr. Qamar Uz Zaman

export interface Publication {
  title: string;
  authors: string;
  journal?: string;
  year: number;
  link?: string;
  impactFactor?: string;
  abdc?: string;
  hjrs?: string;
  status?: 'published' | 'under-review';
}

export interface Education {
  degree: string;
  institution: string;
  year: number;
  field?: string;
  thesisTitle?: string;
}

export interface Experience {
  position: string;
  institution: string;
  startDate: string;
  endDate?: string;
  description?: string;
  type: 'teaching' | 'industry';
}

export interface Certification {
  name: string;
  issuer: string;
  year: number;
}

export interface Award {
  title: string;
  description?: string;
  year?: number;
}

export interface Conference {
  title: string;
  authors: string;
  venue: string;
  year: number;
}

export interface Supervision {
  year: number;
  studentName: string;
  thesisTitle: string;
  status: 'completed' | 'ongoing';
}

export interface CVData {
  name: string;
  title: string;
  email: string[];
  phone: string[];
  nationality: string;
  linkedin?: string;
  orcid?: string;
  researcherId?: string;
  publons?: string;
  experience: string;
  thesisSupervision: number;
  ssciPublications: number;
  citations: string;
  abdc: string;
  abs: string;
  impactFactor: string;
  hIndex: string;
  i10Index: string;
  bio: string;
  education: Education[];
  certifications: Certification[];
  experienceList: Experience[];
  teachingSubjects: {
    category: string;
    subjects: string[];
  }[];
  researchInterests: string[];
  publications: Publication[];
  awards: Award[];
  conferences: Conference[];
  supervision: Supervision[];
  professionalService: {
    title: string;
    items: string[];
  }[];
  languages: {
    language: string;
    proficiency: string;
  }[];
  profileImage?: string;
}

export const cvData: CVData = {
  name: "Dr. Qamar Uz Zaman",
  title: "Ph.D. Management Sciences | Assistant Professor - COMSATS University Islamabad, Sahiwal Campus",
  email: ["qamar@cuisahiwal.edu.pk", "qzmalik@gmail.com"],
  phone: ["+923216301747", "+923326301747"],
  nationality: "Pakistani",
  linkedin: "qzmalik-b2793229",
  orcid: "0000-0002-3964-1572",
  researcherId: "J-3595-2014",
  publons: "1349383",
  experience: "17 Years",
  thesisSupervision: 12,
  ssciPublications: 16,
  citations: ">500",
  abdc: "2A*+12A+2B",
  abs: "3star:2+2star:8+1star:6",
  impactFactor: "90.76",
  hIndex: "12",
  i10Index: "13",
  bio: "Serving as Assistant Professor of Accounting and Finance, Department of Management Sciences, focal person for Center of Islamic Finance, and member Academic Council at COMSATS University Islamabad (Sahiwal). Have more than 17 years of university teaching experience. I have been teaching both undergraduate and graduate programs. My research interests are Islamic Corporate Finance, Corporate and Financial Criminology, CSR. I have 21 primary and co-authored research publications in SSCI, ESCI and Scopus-indexed peer-reviewed journals. I have served as Head of the Department of Management Sciences. I am also a member Board of Studies and Academic Council of the university. I have supervised and co-supervised seven Master's research dissertations.",
  education: [
    {
      degree: "PhD",
      institution: "COMSATS University Islamabad, Lahore, Pakistan",
      year: 2019,
      field: "Management Sciences",
      thesisTitle: "From Debt To Equity Advocacy: Islamic Model of Firm Capital Structure"
    },
    {
      degree: "M.Phil",
      institution: "University of Central Punjab, Lahore, Pakistan",
      year: 2010,
      field: "Commerce",
      thesisTitle: "Financial Innovations and Demand for Money in Pakistan: An ARDL Approach"
    },
    {
      degree: "M.Sc",
      institution: "Bahauddin Zakariya University, Multan, Pakistan",
      year: 2005,
      field: "Accounting and Finance"
    },
    {
      degree: "B.Com",
      institution: "Bahauddin Zakariya University, Multan, Pakistan",
      year: 2002,
      field: "Accounting and Finance"
    }
  ],
  certifications: [
    {
      name: "ACFA - Associate Certified Financial Accountant",
      issuer: "Society of Accounting Education Pakistan",
      year: 2012
    },
    {
      name: "ACCA - Part Qualified up to (2.2)",
      issuer: "ACCA",
      year: 2007
    }
  ],
  experienceList: [
    {
      position: "Assistant Professor (Acc & Fin)",
      institution: "Department of Management Sciences, COMSATS University Islamabad, Sahiwal Campus, Pakistan",
      startDate: "January 2013",
      endDate: "Present",
      type: "teaching"
    },
    {
      position: "Lecturer (Acc & Fin)",
      institution: "Department of Management Sciences, COMSATS University Islamabad, Sahiwal Campus, Pakistan",
      startDate: "October 2010",
      endDate: "January 2013",
      type: "teaching"
    },
    {
      position: "Lecturer (Acc & Fin)",
      institution: "Faculty of Commerce, University of Central Punjab",
      startDate: "March 2007",
      endDate: "October 2010",
      type: "teaching"
    },
    {
      position: "Visiting Faculty (Business)",
      institution: "Department of Business Administration, MS - National University of Modern Languages, Lahore",
      startDate: "August 2009",
      endDate: "July 2010",
      type: "teaching"
    },
    {
      position: "Visiting Faculty (Accounting)",
      institution: "College of Financial Excellence (CFE), Lahore",
      startDate: "June 2008",
      endDate: "August 2009",
      type: "teaching"
    },
    {
      position: "Visiting Faculty (Accounting)",
      institution: "Department of Commerce, Bahauddin Zakariya University, Multan",
      startDate: "January 2006",
      endDate: "May 2006",
      type: "teaching"
    },
    {
      position: "Tax Supervisor",
      institution: "A.F Ferguson & Co., Chartered Accountants Karachi (A Member firm of PricewaterhouseCoopers)",
      startDate: "August 2006",
      endDate: "March 2007",
      type: "industry"
    },
    {
      position: "Internal Auditor",
      institution: "RIAZ AHMED & CO. Chartered Accountants Lahore",
      startDate: "March 2002",
      endDate: "August 2002",
      type: "industry"
    }
  ],
  teachingSubjects: [
    {
      category: "Accounting",
      subjects: [
        "Financial Accounting",
        "Intermediate Financial Accounting",
        "Financial Reporting",
        "Financial Statement Analysis and Valuation",
        "Cost Accounting"
      ]
    },
    {
      category: "Finance",
      subjects: [
        "Islamic Finance",
        "Financial Management",
        "Corporate Finance"
      ]
    }
  ],
  researchInterests: [
    "Tax Shield",
    "Sustainability",
    "Islamic Corporate Finance",
    "Corporate Social Responsibility",
    "Corruption and Money Laundering"
  ],
  publications: [
    {
      title: "Financial Innovations and its effect on Demand for Money in Pakistan: An ARDL Approach",
      authors: "Malik, Q. U., & Aslam, Q.",
      journal: "Paradigm",
      year: 2011,
      hjrs: "Y"
    },
    {
      title: "Firm Characteristics and Leasing Tendency of Pakistani Listed Companies",
      authors: "Malik, Q. U. Z., Saeed, R., Ahmed, R., & Javed, M.",
      journal: "Middle-East Journal of Scientific Research",
      year: 2012,
      impactFactor: "ISI"
    },
    {
      title: "The Relationship between Corporate Social Responsibility and Firm Financial Performance: A Case of Pakistan",
      authors: "Javed, M., Saeed, R., Lodhi, R. N., & Malik, Q. U. Z.",
      journal: "Journal of Basic and Applied Scientific Research",
      year: 2013,
      impactFactor: "ISI"
    },
    {
      title: "The effect of board size and structure on firm financial performance: A case of banking sector in Pakistan",
      authors: "Javed, M., Saeed, R., Lodhi, R. N., & Malik, Q. U. Z.",
      journal: "Middle-East Journal of Scientific Research",
      year: 2013,
      impactFactor: "ISI"
    },
    {
      title: "Do group affiliated firms specialize in debt? Evidence from Pakistan",
      authors: "Malik, Q., & Afza, T.",
      journal: "Journal of Economic and Administrative Sciences",
      year: 2016,
      impactFactor: "ESCI",
      abdc: "C",
      hjrs: "Y"
    },
    {
      title: "From interest tax shield to dividend tax shield: A corporate financing policy for equitable and sustainable wealth creation",
      authors: "Zaman, Q. U., Hassan, M. K., Akhter, W., & Meraj, M. A.",
      journal: "Pacific-Basin Finance Journal",
      year: 2018,
      impactFactor: "2.514",
      abdc: "A",
      hjrs: "W",
      link: "https://doi.org/10.1016/j.pacfin.2017.01.003"
    },
    {
      title: "Does the interest tax shield align with maqasid al Shariah in finance?",
      authors: "Zaman, Q. U., Hassan, M. K., Akhter, W., & Brodmann, J.",
      journal: "Borsa Istanbul Review",
      year: 2019,
      impactFactor: "3.348",
      hjrs: "W"
    },
    {
      title: "Do firms harvest from political connections during general elections? Case of Pakistan",
      authors: "Ashraf, A., Hassan, M.K., Abbas, K. and Zaman, Q.U.",
      journal: "Journal of Financial Crime",
      year: 2020,
      abdc: "B",
      hjrs: "X",
      link: "https://doi.org/10.1108/JFC-02-2019-0022"
    },
    {
      title: "The role of co-creation experience in engaging customers with service brands",
      authors: "Hussain, K., Jing, F., Junaid, M., Zaman, Q.U. and Shi, H.",
      journal: "Journal of Product & Brand Management",
      year: 2020,
      impactFactor: "4.355",
      abdc: "A",
      hjrs: "W",
      link: "https://doi.org/10.1108/JPBM-08-2019-2537"
    },
    {
      title: "Managerial efficiency and corporate leverage policy in Pakistan",
      authors: "Hassan, M. K., Arshad, H. M., Sultan, S., & Ashraf, A.",
      journal: "Asian Academy of Management Journal of Accounting & Finance",
      year: 2020,
      impactFactor: "ESCI",
      hjrs: "Y"
    },
    {
      title: "Exploring the role of corruption and money laundering (ML) on banking profitability and stability: a study of Pakistan and Malaysia",
      authors: "Zaman, Q.U., Aish, K., Akhter, W. and Zaidi, S.A.H.",
      journal: "Journal of Money Laundering Control",
      year: 2020,
      impactFactor: "ESCI",
      abdc: "C",
      hjrs: "X",
      link: "https://doi.org/10.1108/JMLC-07-2020-0082"
    },
    {
      title: "Dynamic linkages between financial inclusion and carbon emissions: Evidence from selected OECD countries",
      authors: "Zaidi, S. A. H., Hussain, M., & Zaman, Q. U.",
      journal: "Resources, Environment and Sustainability",
      year: 2021,
      impactFactor: "ESCI",
      hjrs: "X",
      link: "https://doi.org/10.1016/j.resenv.2021.100022"
    },
    {
      title: "Overview of money laundering laws after 2020 amendments in Pakistan",
      authors: "Anwar, M.F., Uz Zaman, Q., Ashraf, R.U., Ul Hassan, S.I. and Abbas, K.",
      journal: "Journal of Money Laundering Control",
      year: 2022,
      impactFactor: "ESCI",
      abdc: "C",
      hjrs: "X",
      link: "https://doi.org/10.1108/JMLC-02-2021-0012"
    },
    {
      title: "Does bank affiliation affect firm capital structure? Evidence from a financial crisis",
      authors: "Zaman, Q.U., Akhter, W., Abdul-Majid, M., Hassan, S.I.U. and Anwar, M.F.",
      journal: "Journal of Economic and Administrative Sciences",
      year: 2021,
      impactFactor: "ESCI",
      abdc: "C",
      hjrs: "Y",
      link: "https://doi.org/10.1108/JEAS-11-2020-0193"
    },
    {
      title: "Does corporate governance compliance condition information asymmetries? Moderating role of voluntary disclosures",
      authors: "Tahir, S., Ehsan, S., Hassan, M. K., & Zaman, Q. U.",
      journal: "Journal of Asian Business and Economic Studies",
      year: 2021,
      impactFactor: "ESCI",
      abdc: "C",
      hjrs: "Y",
      link: "https://doi.org/10.1108/JABES-07-2021-0085"
    },
    {
      title: "Corporate Social Responsibility and Zero Leverage",
      authors: "Zaman, Q. U., Ehsan, S., Hassan, M. K., Javed, M., & Hassan, S. I. U.",
      journal: "ESCI",
      year: 2021,
      impactFactor: "ESCI",
      hjrs: "Y"
    },
    {
      title: "Do Islamic banks gain from corruption and money laundering (ML)?",
      authors: "Aish, K., Hassan, M. K., Zaman, Q. U., Ehsan, S., Abbas, K., & Shah, I. H.",
      journal: "Journal of Money Laundering Control",
      year: 2021,
      impactFactor: "ESCI",
      abdc: "C",
      hjrs: "X"
    },
    {
      title: "Examining the effect of liquidity creation on banking profitability and stability: moderating role of political instability",
      authors: "Javid, M., Chandia, K. E., Zaman, Q. U., & Akhtar, W.",
      journal: "Kybernetes",
      year: 2022,
      impactFactor: "2.352",
      hjrs: "X"
    },
    {
      title: "Female CEOs and green innovation",
      authors: "Javed, M., Wang, F., Usman, M., Ali Gull, A., & Uz Zaman, Q.",
      journal: "Journal of Business Research",
      year: 2023,
      impactFactor: "10.696",
      abdc: "A",
      hjrs: "W",
      link: "https://doi.org/10.1016/j.jbusres.2022.113515"
    },
    {
      title: "Nexus of liquidity creation, profitability and bank stability with the moderating role of corruption: an empirical analysis",
      authors: "Javid, M., Chandia, K.E. and Zaman Malik, Q.U.",
      journal: "Journal of Financial Crime",
      year: 2023,
      link: "https://doi.org/10.1108/JFC-08-2023-0198",
      status: "published"
    },
    {
      title: "Responsible Leadership, Thriving at Work and Employee Positive Megaphoning: A Moderated Mediation Model",
      authors: "Akhtar, M.W., Huo, C., Javed, M., Aslam M.K. & Qamar uz Zaman, M.",
      journal: "Journal of Service Industries",
      year: 2024,
      impactFactor: "9.41",
      abdc: "B",
      hjrs: "W",
      status: "under-review"
    },
    {
      title: "Does gender based board interlocking elevate the earnings management?",
      journal: "Kybernetes",
      authors: "Under Review",
      year: 2024,
      impactFactor: "2.35",
      status: "under-review"
    },
    {
      title: "Does CSR elevates the earnings management practices in ZL firms?",
      journal: "Heliyon",
      authors: "Under Review",
      year: 2024,
      status: "under-review"
    },
    {
      title: "Responsible Leadership, Thriving at Work and Hotel Employee Positive Megaphoning: A Moderated Mediation Model",
      authors: "Akhtar, M.W., Huo, C., Javed, M., Aslam M.K. & Qamar uz Zaman, M.",
      journal: "Journal of Organizational Behaviour",
      year: 2024,
      impactFactor: "10.05",
      abdc: "A*",
      status: "under-review"
    },
    {
      title: "Corporate tax, debt-equity distinction and financial instability: A proposed model for sustainable finance",
      authors: "Akhter, M.W., Zaman Q. U.",
      journal: "Journal of Economic Criminology",
      year: 2024,
      status: "under-review"
    },
    {
      title: "Nexus of Liquidity Creation, Profitability, and Bank Stability with the Moderating Role of Corruption: An Empirical Analysis",
      authors: "Khurram Ijaz, Misbah, Qamar Uz Zaman",
      journal: "Journal of Financial Crime",
      year: 2024,
      status: "under-review"
    }
  ],
  awards: [
    {
      title: "Gold Medal",
      description: "MSc Accounting & Finance, BZU, Multan"
    },
    {
      title: "Silver Medalist",
      description: "Bachelor in Commerce, Hi-Career College of Commerce, Sahiwal"
    },
    {
      title: "Bronze Medalist",
      description: "Diploma in Commerce, GCC, Sahiwal"
    },
    {
      title: "Best Paper Award",
      description: "1st International Conference on Management & Economics held on February 11-12, 2012",
      year: 2012
    },
    {
      title: "Research Productivity Award",
      description: "COMSATS Institute of Information Technology, Sahiwal Campus",
      year: 2013
    }
  ],
  conferences: [
    {
      title: "Debt Advocacy and Financial Crisis: Can Islamic Finance Help Corporate Financing Policy?",
      authors: "Zaman, Q. U., Akhtar, W., & Meraj, M. A.",
      venue: "Islamic Finance, Banking & Business Ethics Global Conference 2016, LUMS, Lahore",
      year: 2016
    },
    {
      title: "Financial Crisis and Firm Financing Policy in Absence of Interest Tax Shield: In Perspective of Islamic Finance",
      authors: "Zaman, Q. U., Akhtar, W., & Meraj, M. A.",
      venue: "CEIF 1st International Conference on Towards Financial Inclusion, CEIF, UOP, Peshawar",
      year: 2016
    },
    {
      title: "From Interest Tax Shield to Dividend Tax Shield: Corporate Financing Theory in Perspective of Islamic Finance",
      authors: "Zaman, Q. U., Akhtar, W., & Meraj, M. A.",
      venue: "4th Global Forum on Islamic Finance, COMSATS, Lahore",
      year: 2016
    },
    {
      title: "From Interest Tax Shield to Dividend Tax Shield: Firm's Theory of Capital Structure",
      authors: "Zaman, Q. U., Akhtar, W., & Meraj, M. A.",
      venue: "Islamic Economics, Finance and Banking Global Forum, UMT, Lahore",
      year: 2016
    },
    {
      title: "Interest Tax Shield in perspective of Maqasid al Shariah in Finance",
      authors: "QU Zaman, MK Hassan, W Akhter, MA Meraj",
      venue: "Global Forum on Islamic Finance, Center of Islamic Finance, CIIT Lahore",
      year: 2017
    },
    {
      title: "Interest Tax Shield and Maqasid al Sharia'h: A Survey Analysis",
      authors: "QU Zaman, MK Hassan, W Akhter, MA Meraj",
      venue: "Islamic Finance Workshop, Islamabad, Pakistan",
      year: 2017
    }
  ],
  supervision: [
    {
      year: 2014,
      studentName: "Samara Qayyum",
      thesisTitle: "Human Capital Disclosure, The Case Study of KSE-100 index Companies",
      status: "completed"
    },
    {
      year: 2016,
      studentName: "Sahar Sultan",
      thesisTitle: "Does Managerial Ability Affect Firm's Financial Structure?",
      status: "completed"
    },
    {
      year: 2018,
      studentName: "Ayesha Ashraf",
      thesisTitle: "Do Firms Harvest From Political Connections: Case of Pakistan?",
      status: "completed"
    },
    {
      year: 2020,
      studentName: "Kinza Aish",
      thesisTitle: "Effect of Corruption, Money Laundering and Risk on Banking Profitability and Stability: Evidence from Pakistan and Malaysia",
      status: "completed"
    },
    {
      year: 2020,
      studentName: "Yasir Suhail",
      thesisTitle: "IPQ Performance: Long-Run Comparative Analysis of Emerging Asian Countries",
      status: "completed"
    },
    {
      year: 2021,
      studentName: "Aamir Nisar",
      thesisTitle: "The Moderating Effect of Corporate Social Responsibility (CSR) between Zero Leverage Policy and Earnings Management (EM): Evidence from Pakistan",
      status: "completed"
    },
    {
      year: 2021,
      studentName: "Aiza Ashraf",
      thesisTitle: "Exploring the Effect of Board Interlocking (BI) on Earnings Management (EM): The Moderating Role of Gender Diversity (GD)",
      status: "completed"
    },
    {
      year: 2021,
      studentName: "Misbah",
      thesisTitle: "Exploring the Effect of Liquidity Creation on Banking Profitability and Stability: Moderating Roles of Corruption, Political Instability and Tax-Amnesty",
      status: "completed"
    },
    {
      year: 2023,
      studentName: "Hafeez Ullah",
      thesisTitle: "Time Value of Money or Interest Value of Money: A Fundamental Revision",
      status: "ongoing"
    },
    {
      year: 2023,
      studentName: "Ismail",
      thesisTitle: "Dividend Tax shield and Working Capital Management",
      status: "ongoing"
    },
    {
      year: 2023,
      studentName: "Talha",
      thesisTitle: "Climate finance and Exposure of Pakistani Listed Firms",
      status: "ongoing"
    },
    {
      year: 2023,
      studentName: "Saima Talha",
      thesisTitle: "Do Zero leverage Firms invest more in Green Innovation?",
      status: "ongoing"
    }
  ],
  professionalService: [
    {
      title: "Member Board of Studies",
      items: [
        "Member Board of Studies, Department of Commerce, University of Sahiwal, Punjab, Pakistan",
        "Member Board of Studies, Department of Management Sciences, CUI, Pakistan",
        "Member Academic Council, CUI, Pakistan"
      ]
    },
    {
      title: "Member Advisory Board",
      items: [
        "International Journal of Islamic and Middle Eastern Finance and Management",
        "SEISENSE Journal of Management"
      ]
    },
    {
      title: "Peer-Reviewed Articles for",
      items: [
        "Abacus",
        "Kybernetes",
        "Finance Research Letters",
        "Asian Journal of Economics and Banking",
        "Emerging Markets Finance and Trade",
        "International Journal of Emerging Markets",
        "International Journal of Islamic and Middle Eastern Finance and Management",
        "Journal of Economic and Administrative Sciences",
        "Research in International Business and Finance",
        "Review of Financial Economics",
        "SEISENSE Journal of Management",
        "The Singapore Economic Review",
        "Thunderbird International Business Review"
      ]
    }
  ],
  languages: [
    { language: "Urdu", proficiency: "Superior" },
    { language: "Punjabi", proficiency: "Native Speaker" },
    { language: "English", proficiency: "Superior Listener, Advanced Speaker, Advanced Reading and Writing" }
  ],
  profileImage: "/images/profile.jpg"
};

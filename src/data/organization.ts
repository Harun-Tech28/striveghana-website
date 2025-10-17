export const organizationData = {
  name: {
    english: "StriveGhana",
    arabic: "السعي"
  },
  motto: "Strive in unity, growing in faith and brotherhood",
  mission: "To support and empower youth and new converts by fostering faith, unity, and personal growth through education, mentorship, and community engagement.",
  vision: "To build a resilient, educated, and spiritually grounded generation that strives together for truth, purpose, and belonging in Islam.",
  
  contact: {
    email: "striveghana@gmail.com",
    website: "striveghana.org",
    phone: "+233 24 892 4349",
    address: {
      poBox: "P O Box 222 Ejisu Ashanti",
      street: "99 BLK IX Ejisuman Near Family Hospital",
      city: "Ejisu",
      region: "Ashanti"
    }
  },

  coreObjectives: [
    {
      id: "support",
      title: "Support",
      description: "Offer spiritual, emotional, and social support to new converts",
      icon: "🤝"
    },
    {
      id: "education",
      title: "Education", 
      description: "Provide access to authentic Islamic learning and life skills",
      icon: "📚"
    },
    {
      id: "mentorship",
      title: "Mentorship",
      description: "Connect members with experienced Muslims for guidance and companionship",
      icon: "👥"
    },
    {
      id: "integration",
      title: "Integration",
      description: "Help new Muslims feel welcome and active in their local communities",
      icon: "🌍"
    },
    {
      id: "youth-empowerment",
      title: "Youth Empowerment",
      description: "Create leadership programmes for young Muslims to lead with faith and confidence",
      icon: "💪"
    },
    {
      id: "outreach",
      title: "Outreach",
      description: "Engage in dawah and service projects to give back to society and build bridges",
      icon: "🌟"
    }
  ],

  programs: [
    {
      id: "new-muslim-care",
      title: "New Muslim Care",
      description: "Comprehensive support for new converts to Islam",
      activities: [
        "Shahada follow-up",
        "Convert support circles", 
        "One-on-one mentoring"
      ],
      icon: "🕌",
      category: "new-muslim" as const
    },
    {
      id: "youth-empowerment", 
      title: "Youth Empowerment",
      description: "Leadership development and skill building for young Muslims",
      activities: [
        "Leadership workshops",
        "Dawah training",
        "Community service programs"
      ],
      icon: "🚀",
      category: "youth" as const
    },
    {
      id: "islamic-learning",
      title: "Islamic Learning", 
      description: "Educational programs for all levels of Islamic knowledge",
      activities: [
        "Beginner and intermediate learning",
        "Q&A sessions and book readings",
        "Weekend classes"
      ],
      icon: "📖",
      category: "learning" as const
    },
    {
      id: "social-integration",
      title: "Social Integration",
      description: "Building community bonds and cultural understanding", 
      activities: [
        "Islamic movie nights, retreats, and events",
        "Intercultural brotherhood activities"
      ],
      icon: "🤲",
      category: "social" as const
    }
  ],

  yearOneGoals: [
    {
      value: "35+",
      label: "Reach 35+ youth and converts",
      icon: "👥"
    },
    {
      value: "20",
      label: "Train 20 community mentors", 
      icon: "🎓"
    },
    {
      value: "5",
      label: "Launch 5 main program tracks",
      icon: "🚀"
    },
    {
      value: "3",
      label: "Establish partnership with 3 local Mosques", 
      icon: "🕌"
    }
  ],

  budget: {
    items: [
      {
        category: "Educational material & books",
        amount: 800
      },
      {
        category: "Event logistics & food", 
        amount: 1200
      },
      {
        category: "Volunteer stipends",
        amount: 500
      },
      {
        category: "Marketing & printing",
        amount: 500
      },
      {
        category: "Emergency convert support fund",
        amount: 1000
      }
    ],
    total: 4000
  },

  organizationalStructure: {
    board: [
      { role: "Senior scholars, educators, and community leaders" }
    ],
    executiveTeam: [
      { title: "Director (or president)", role: "Overall leadership and vision" },
      { title: "Programme coordinator", role: "Program management and coordination" },
      { title: "Outreach & events officer", role: "Community engagement and events" },
      { title: "Finance & fundraising officer", role: "Financial management and fundraising" },
      { title: "Volunteer coordinator", role: "Volunteer management and training" }
    ],
    departments: [
      { name: "Youth programs", description: "Leadership and empowerment initiatives" },
      { name: "New converts care", description: "Support and integration services" },
      { name: "Education & classes", description: "Islamic learning and skill development" },
      { name: "Counselling & mentorship", description: "Guidance and support services" },
      { name: "Media & communication", description: "Outreach and communication" }
    ]
  },

  quranicVerses: [
    {
      arabicText: "وَجَاهِدُوا فِي اللَّهِ حَقَّ جِهَادِهِ هُوَ اجْتَبَاكُمْ",
      translation: "And strive for Allah with the striving due to him. He has chosen you",
      reference: "Quran 22:78"
    },
    {
      arabicText: "وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ",
      translation: "And that man will have nothing except what he strives for",
      reference: "Quran 53:39"
    }
  ],

  striveInitiative: {
    acronym: "STRIVE",
    meaning: [
      { letter: "S", word: "Support" },
      { letter: "T", word: "Teach" },
      { letter: "R", word: "Reach" },
      { letter: "I", word: "Inspire" },
      { letter: "V", word: "Value" },
      { letter: "E", word: "Empower" }
    ]
  }
}
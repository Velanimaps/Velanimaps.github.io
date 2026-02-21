// ============================================
// TUTOR WEBSITE CONFIGURATION
// ============================================
// Edit this file to customize your website
// All content is centralized here for easy maintenance

export const siteConfig = {
  // Basic Info
  name: "EE Tutoring Academy",
  tagline: "Excellence in Physics & Mathematics",
  description: "Professional Physics and Mathematics tutoring for South African students in Grades 10, 11 & 12. Online lessons or face-to-face at designated locations.",
  
  // Contact Information - UPDATE THESE WITH YOUR DETAILS
  contact: {
    phone: "+27 61 016 9728",  // Update with your number
    email: "velanijobs@gmail.com",  // Update with your email
    address: "Designated tutoring locations across Durban",  // Update with your area
    whatsapp: "+27 61 016 9728",  // Update with your WhatsApp
  },
  
  // Social Links - UPDATE THESE WITH YOUR PROFILES
  social: {
    youtube: "https://youtube.com/@eetutoring",
    instagram: "https://instagram.com/eetutoring",
    facebook: "https://facebook.com/eetutoring",
    linkedin: "https://www.linkedin.com/in/velani-maphumulo-167453144/",
  },
  
  // Tutor Info
  tutor: {
    name: "Velani Maphumulo",  // UPDATE: Your full name
    title: "BEng Electrical Engineering",
    experience: "5 years",
    students: "10+",
    successRate: "90%",
    bio: "I am a qualified Electrical Engineer with 5 years of experience tutoring Physics and Mathematics to high school students. I specialize in the South African CAPS syllabus for Grades 10, 11, and 12. My engineering background gives me a unique perspective on applying theoretical concepts to real-world problems. I offer both online lessons via Zoom/Microsoft Teams and face-to-face sessions at designated locations. My teaching approach focuses on building strong fundamentals, exam preparation, and boosting student confidence.",
    image: "/tutor.jpg",
  },
  
  // Subjects Offered - SOUTH AFRICAN CAPS SYLLABUS
  subjects: [
    {
      name: "Physical Sciences (Physics)",
      icon: "Atom",
      grades: ["Grade 10", "Grade 11", "Grade 12"],
      description: "Complete CAPS Physics coverage including mechanics, electricity, waves, and modern physics. Perfect for students preparing for matric exams.",
      topics: [
        "Mechanics (Forces, Motion, Energy)",
        "Electricity & Magnetism",
        "Waves, Sound & Light",
        "Matter & Materials",
        "Chemical Change (Grade 10-11)",
        "Modern Physics (Grade 12)"
      ],
      color: "from-blue-500 to-cyan-400",
    },
    {
      name: "Mathematics",
      icon: "Calculator",
      grades: ["Grade 10", "Grade 11", "Grade 12"],
      description: "Comprehensive Mathematics tutoring aligned with the CAPS curriculum. From algebra to calculus, I've got you covered.",
      topics: [
        "Algebra & Equations",
        "Functions & Graphs",
        "Trigonometry",
        "Euclidean Geometry",
        "Analytical Geometry",
        "Calculus (Grade 12)",
        "Probability & Statistics"
      ],
      color: "from-purple-500 to-pink-400",
    },
    // {
    //   name: "Mathematical Literacy",
    //   icon: "BookOpen",
    //   grades: ["Grade 10", "Grade 11", "Grade 12"],
    //   description: "Practical mathematics for everyday life. Finance, measurement, data handling, and probability made simple.",
    //   topics: [
    //     "Finance (Tax, Interest, Budgets)",
    //     "Measurement & Conversions",
    //     "Maps, Plans & Representations",
    //     "Data Handling",
    //     "Probability"
    //   ],
    //   color: "from-green-500 to-emerald-400",
    // },
  ],
  
  // Features/Benefits
  features: [
    {
      title: "Online & Face-to-Face",
      description: "Choose between convenient online lessons or in-person sessions at designated locations",
      icon: "Monitor",
    },
    {
      title: "CAPS Aligned",
      description: "All lessons follow the South African CAPS syllabus for Grades 10-12",
      icon: "BookOpen",
    },
    {
      title: "Personalized Attention",
      description: "One-on-one or small group sessions for maximum learning effectiveness",
      icon: "Users",
    },
    {
      title: "Past Paper Practice",
      description: "Extensive practice with DBE past exam papers and memoranda",
      icon: "ClipboardCheck",
    },
    {
      title: "Conceptual Learning",
      description: "Focus on understanding concepts with real-world engineering examples",
      icon: "Lightbulb",
    },
    {
      title: "Flexible Scheduling",
      description: "Lessons scheduled to fit your school and extracurricular activities",
      icon: "Clock",
    },
  ],
  
  // Resources
  resources: [
    {
      title: "Formula Sheets",
      description: "CAPS-aligned formula sheets for quick revision before exams",
      type: "PDF",
      link: "#",
    },
    {
      title: "DBE Past Papers",
      description: "Department of Basic Education past exam papers with solutions",
      type: "PDF",
      link: "#",
    },
    {
      title: "Video Tutorials",
      description: "Recorded explanations of challenging topics for revision",
      type: "Video",
      link: "#",
    },
    {
      title: "Study Guides",
      description: "Comprehensive study notes covering the entire CAPS curriculum",
      type: "PDF",
      link: "#",
    },
  ],
  
  // Testimonials - UPDATE WITH YOUR STUDENT FEEDBACK
  testimonials: [
    {
      name: "Thabo Mokoena",
      grade: "Grade 12",
      text: "The tutor explained Physics concepts so clearly using real engineering examples. I went from 45% to 78% in my final matric exam!",
      rating: 5,
      image: "/student1.jpg",
    },
    {
      name: "Sarah van Wyk",
      grade: "Grade 11",
      text: "Online lessons were so convenient and effective. The flexible scheduling worked perfectly with my hockey practice.",
      rating: 5,
      image: "/student2.jpg",
    },
    {
      name: "Lungile Nkosi",
      grade: "Grade 12",
      text: "The past paper practice sessions were a game-changer. I felt so prepared for my matric finals and achieved a distinction!",
      rating: 5,
      image: "/student3.jpg",
    },
    {
      name: "Johan Pretorius",
      grade: "Grade 10",
      text: "My son's confidence in Maths has grown tremendously. The face-to-face sessions at the library work great for us.",
      rating: 5,
      image: "/student4.jpg",
    },
  ],
  
  // Pricing - SOUTH AFRICAN RAND (ZAR)
  pricing: [
    {
      name: "Online Sessions",
      price: "R250",
      period: "per hour",
      features: [
        "One-on-one online lessons",
        "Zoom/Microsoft Teams",
        "Digital whiteboard",
        "Session recordings",
        "Digital study materials",
      ],
      popular: true,
    },
    {
      name: "Face-to-Face",
      price: "R300",
      period: "per hour",
      features: [
        "In-person at designated location",
        "Hands-on demonstrations",
        "Printed study materials",
        "Flexible location options",
        "Small group discounts",
      ],
      popular: false,
    },
    {
      name: "Group Sessions",
      price: "R150",
      period: "per student/hour",
      features: [
        "2-4 students per group",
        "Peer learning benefits",
        "Reduced individual cost",
        "Online or face-to-face",
        "Shared study resources",
      ],
      popular: false,
    },
  ],
  
  // FAQ - UPDATED FOR SOUTH AFRICAN CONTEXT
  faqs: [
    {
      question: "What grades and subjects do you tutor?",
      answer: "I tutor Physics (Physical Sciences), Mathematics, and Mathematical Literacy for Grades 10, 11, and 12, following the South African CAPS curriculum.",
    },
    {
      question: "Do you offer online or face-to-face lessons?",
      answer: "Both! I offer online lessons via Zoom or Microsoft Teams, as well as face-to-face sessions at designated locations. Choose what works best for you.",
    },
    {
      question: "Which curriculum do you follow?",
      answer: "I follow the South African CAPS (Curriculum and Assessment Policy Statement) as prescribed by the Department of Basic Education (DBE).",
    },
    {
      question: "Do you help with matric exam preparation?",
      answer: "Absolutely! I specialize in matric exam preparation, including intensive past paper practice, exam technique, and revision of the entire Grade 12 syllabus.",
    },
    {
      question: "What are your rates?",
      answer: "Online sessions are R250/hour, face-to-face is R300/hour, and group sessions (2-4 students) are R150 per student per hour. Contact me for package deals!",
    },
    {
      question: "Do you provide study materials?",
      answer: "Yes, all students receive comprehensive study notes, formula sheets, and access to DBE past exam papers with detailed solutions.",
    },
  ],
  
  // Navigation
  navLinks: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Subjects", href: "#subjects" },
    { name: "Resources", href: "#resources" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ],
};

export default siteConfig;

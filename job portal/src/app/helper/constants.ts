//const BASEURL = "http://23.95.228.167:4080/";
const BASEURL = "http://localhost:3000/";
export const CONSTANTS = {
  MAX_FILE_SIZE: 1024 * 1024 * 5, // in MB max file size is 5MB

  MENUS: [
    {
      name: "Jobs",
      url: "/jobs",
      icon: "fa fa-suitcase",
      isForCandidate: "candidate",
      isMainMenu: true,
    },
    {
      name: "Search",
      url: "/search",
      icon: "fa fa-search",
      isForCandidate: "candidate",
      isMainMenu: true,
    },
    {
      name: "Jobs",
      url: "/posted-jobs",
      icon: "fa fa-suitcase",
      isForCandidate: "orgnization",
      isMainMenu: true,
    },
    {
      name: "Profile summary",
      url: "/profile-summary",
      icon: "",
      isForCandidate: "candidate",
      isMainMenu: false,
    },
    {
      name: "login",
      url: "/login",
      icon: "",
      isForCandidate: "candidate",
      isMainMenu: false,
    },
    {
      name: "Sign up",
      url: "/sign-up",
      icon: "",
      isForCandidate: "candidate",
      isMainMenu: false,
    },
    {
      name: "dashboard",
      url: "/dashboard",
      icon: "",
      isForCandidate: "candidate",
      isMainMenu: false,
    },
    {
      name: "about-you",
      url: "/about-you",
      icon: "",
      isForCandidate: "candidate",
      isMainMenu: false,
    },

    {
      name: "profile-summary",
      url: "/profile-summary",
      icon: "",
      isForCandidate: "candidate",
      isMainMenu: false,
    },
    {
      name: "work-experience",
      url: "/work-experience",
      icon: "",
      isForCandidate: "candidate",
      isMainMenu: false,
    },
    {
      name: "education-details/:id",
      url: "/education-details/:id",
      icon: "",
      isForCandidate: "candidate",
      isMainMenu: false,
    },
    {
      name: "role-profile",
      url: "/role-profile",
      icon: "",
      isForCandidate: "candidate",
      isMainMenu: false,
    },
    {
      name: "certificate",
      url: "/certificate",
      icon: "",
      isForCandidate: "candidate",
      isMainMenu: false,
    },
    {
      name: "myProfile",
      url: "/myProfile",
      icon: "",
      isForCandidate: "candidate",
      isMainMenu: false,
    },
    {
      name: "candidate-profile",
      url: "/candidate-profile",
      icon: "",
      isForCandidate: "candidate",
      isMainMenu: false,
    },

    {
      name: "change-password",
      url: "/change-password",
      icon: "",
      isForCandidate: "candidate",
      isMainMenu: false,
    },
    {
      name: "profile",
      url: "/profile",
      icon: "",
      isForCandidate: "candidate",
      isMainMenu: false,
    },
  ],
  SKILLS: [
    { name: "Programming Languages" },
    { name: "Web Development" },
    { name: "Data Structures" },
    { name: "Open Source Experience" },
    { name: "Security" },
    { name: "Machine Learning" },
    { name: "Debugging" },
    { name: "UX/UI" },
    { name: "Front-End & Back-End Development" },
    { name: "Cloud Management" },
    { name: "Agile Development" },
    { name: "HTML/CSS" },
    { name: "CSS Preprocessors" },
    { name: "Javascript" },
    { name: "Wordpress" },
    { name: "Graphic User Interfaces (GUI)" },
    { name: "Git/Version Control (Github, gitlab)" },
    { name: "Search Engine Optimization (SEO)" },
    { name: "Application Programming Interface (API)" },
    { name: "Adobe Photoshop, InDesign" },
    { name: "Content Management Systems (CMS)" },
    { name: "Testing/Debugging" },
    { name: "Responsive Design Principles" },
    { name: "Mobile and Web Development (e.g. iOS, Android)" },
    { name: "STEM Skills" },
    { name: "CAD" },
    { name: "Design" },
    { name: "Prototyping" },
    { name: "Testing" },
    { name: "Troubleshooting" },
    { name: "Project Launch" },
    { name: "Lean Manufacturing" },
    { name: "Workflow Development" },
    { name: "Computer Skills" },
    { name: "SolidWorks" },
    { name: "Budgeting" },
    { name: "Technical Report Writing" },
    { name: "Programming Languages HTML, CSS, CRM tools" },
    { name: "SEO (SEMRush, WordPress, and Ahrefs)" },
    { name: "SEM (i.e., Google Adwords)" },
    { name: "PPC" },
    { name: "CRO and A/B Testing" },
    { name: "Social Media Marketing and Paid Social Media Advertising" },
    { name: "Sales Funnel Management" },
    { name: "CMS Tools (WordPress, Weebly)" },
    { name: "Graphic Design Skills (Adobe Creative Suite)" },
    { name: "Email Marketing (MailChimp, Constant Contact)" },
    { name: "Email Automation" },
    { name: "Data Visualization" },
    { name: "CPC" },
    { name: "Typography" },
    { name: "Print Design" },
    { name: "Photography and Branding" },
    { name: "Communication " },
    { name: "Creativity " },
    { name: "Data Analytics (Google Analytics )" },
    { name: "Web Analytics" },
    { name: "Adaptability " },
    { name: "Organized" },
    { name: "Email Writing " },
    { name: "Google Adwords" },
    { name: "Social Media And Mobile Marketing " },
    { name: "Paid Social Media Advertisements" },
    { name: "Consumer Behavior Drivers" },
    { name: "Brand Management" },
    { name: "B2b Marketing" },
    { name: "Writing Advertising Copy" },
    { name: "Soliciting Feedback From Customers" },
    { name: "Cutting Costs" },
    { name: "Leadership skills" },
    { name: "Task Delegation " },
    { name: "Strategic Management" },
    { name: "Negotiation " },
    { name: "Planning" },
    { name: "Proposal writing" },
    { name: "Problem-solving" },
    { name: "Innovation" },
    { name: "Charisma" },
    { name: "Problem solving" },
    { name: "Personable" },
    { name: "Website Management" },
    { name: "Social Media Outreach" },
    { name: "Video Production" },
    { name: "Data Visualization" },
    { name: "Campaign Management" },
    { name: "Photo Editing" },
    { name: "Editing" },
    { name: "Typography" },
    { name: "Logo Creation" },
    { name: "Digital Printing" },
    { name: "Interactive Media Design " },
    { name: "Color Sense & Theory" },
    { name: "Ad Design" },
    { name: "Social Media Publishing" },
    { name: "UX Design" },
    { name: "Storytelling" },
    { name: "Financial Analysis" },
    { name: "Consumer Research" },
    { name: "Statistical Analysis" },
    { name: "Drawing " },
    { name: "Design " },
    { name: "Videography " },
    { name: "Technical Writing " },
    { name: "Mobile and Web Development (e.g. iOS, Android)" },
    { name: "Agile Project Management (Kanban)" },
    { name: "Managing Cross-Functional Teams" },
    { name: "Scrum Management" },
    { name: "Performance Tracking" },
    { name: "Financial Modelling" },
    { name: "Ideation Leadership" },
    { name: "Feature Definition" },
    { name: "Forecasting" },
    { name: "Profit and Loss" },
    { name: "Scope Management" },
    { name: "Project Lifecycle Management " },
    { name: "Meeting Facilitation" },
    { name: "Leadership " },
    { name: "Communication " },
    { name: "Critical Thinking" },
    { name: "Time Management " },
    { name: "Mentoring " },
    { name: "Risk Management " },
    { name: "Negotiation " },
    { name: "Cost Management " },
    { name: "Data Analysis " },
    { name: "Collaborative " },
    { name: "Collaborative Programs (Slack, WhatsApp, Dropbox)" },
    { name: "Wordpress" },
    { name: "Adobe Creative Suite" },
    { name: "Performance Tracking" },
  ],
  SECRET:
    "SiJIVnYKsw785iHCAZw6QY9hzi573lQnGlToW7LTWaEgtuV00DJFnUSxgMyrXoCgwk0ya1u2PYVRctsYGpJu9oDb1Jitb6gMYOkJujkHK2UNbYv9p8fdcY6dzzfYmRYgiu3mazCwaJXrhqJ7RCVjY7eddfNUFish",
  BASEURL: BASEURL,
  RECOMMENDEDJOBS: "v1/recomandedJobs",
  USERPROFILE: BASEURL + "v1/profile/",
  CANDIDATESIGNUP: BASEURL + "v1/register",
  CANDIDATELOGIN: BASEURL + "v1/login",
  CHANGEPASSWORD: BASEURL + "v1/change-password/",
  ABOUTYOU: BASEURL + "v1/aboutyou",
  UPDATEUSERPROFILE: BASEURL + "v1/profile/",
  ORGANIZATIONlOGIN: BASEURL + "v1/orgnization-login",
  ORGANIZATIONSIGNUP: BASEURL + "v1/register-orgnization",
  FORGOTPASSWORD: BASEURL + "v1/forgot-password",
  UPLOADCERTIFICATES: BASEURL + "v1/upload-certificates/",
  COMPANYDETAILS: BASEURL + "v1/orgnization/",
  // UPLOADCERTIFICATES: BASEURL+'v1/upload-certificates/',
  CREATEJOBS: BASEURL + "v1/create",
  // UPLOADCERTIFICATES: BASEURL + "v1/upload-certificates/",
  // CREATEJOBS: BASEURL + "v1/create",
  ORGNIZATIONJOBS: BASEURL + "v1/jobs-created-by/",
  JOBDETAILS: BASEURL + "v1/job/",
  COUNTRIES: BASEURL + "v1/countries",
  STATES: BASEURL + "v1/states/",
  CITIES: BASEURL + "v1/cities/",
  MAKEJOBACTIVEORINACTIVE: BASEURL + "v1/makeJobActiveOrInActive/",
};

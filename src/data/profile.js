// All site content lives here, taken from Sanoj_Kumar_Resume_Final.pdf.
// Update this file (not the components) when the resume changes.

export const profile = {
  name: "Sanoj Kumar",
  role: "Senior Mobile Developer",
  focus: "iOS & Flutter · AI-Powered Apps",
  location: "Bengaluru, India",
  email: "sanojsanoj638@gmail.com",
  phone: "+91 99735 95208",
  phoneHref: "tel:+919973595208",
  // Google Drive file: replace it there (Manage versions) to update the resume without a deploy.
  resume: "https://drive.google.com/file/d/15gByYTHFXgvuTIxxdVmRxBJr4xR2_G0B/view?usp=sharing",
  links: {
    github: "https://github.com/sanojkumaryadav",
    linkedin: "https://www.linkedin.com/in/sanojcoder/",
    whatsapp: "https://wa.me/919973595208",
    codeorbit: "https://codeorbitapp.com",
  },
  summary: [
    "4+ years building production iOS and Flutter apps across ride-sharing, health-tech and e-commerce.",
    "I work in Swift, UIKit, SwiftUI and Flutter with MVVM, real-time sockets, Google Maps and Fleet Engine SDKs and Firebase, and I've been the sole developer on several production Flutter apps.",
    "I own the full release path, from Fastlane and GitHub Actions to App Store Connect and Google Play, and I'm bringing AI into mobile apps with LangChain and FastAPI.",
  ],
  stats: [
    { value: "4+", label: "Years in production" },
    { value: "6+", label: "Apps shipped to the stores" },
    { value: "150+", label: "Production bugs fixed" },
  ],
};

export const experience = [
  {
    role: "App Development Engineer — iOS & Flutter",
    company: "Es Magico",
    period: "Aug 2023 – Present",
    place: "Bengaluru",
    points: [
      "Built the PeekUp Rider & Driver iOS apps (UIKit): Uber-like ride booking with Google Maps SDK, Google Fleet Engine Driver & Consumer SDKs, WebSocket live tracking and Firebase push notifications in every app state.",
      "Owned features end to end — UIKit/SwiftUI screens, API integration, MVVM architecture and a reusable component library that cut feature development time by ~40%.",
      "Developed 3 production Flutter apps — Plum (GetX), Ensto (Provider + GetX) and Soullab (BLoC) — with full front-end ownership, live on the Play Store and App Store.",
      "Owned CI/CD (Fastlane + GitHub Actions) across Dev, Staging and Prod for all iOS and Flutter projects, including App Store Connect and TestFlight releases.",
      "Integrated LangChain + FastAPI to prototype AI-powered in-app recommendations and intelligent ride features.",
    ],
  },
  {
    role: "iOS Developer",
    company: "ekincare",
    period: "Aug 2022 – Aug 2023",
    place: "Hyderabad",
    points: [
      "Shipped Swift / UIKit / SwiftUI features for a health-tech platform and resolved 150+ production bugs, improving crash rates, app-store rating and retention.",
      "Worked with design, backend and QA, following HIPAA-aligned practices for secure handling of health data.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Relinns Technology",
    period: "Jan 2022 – Mar 2022",
    place: "Remote",
    points: [
      "Built Node.js / Express / MongoDB services and integrated Google Workspace APIs (Sheets, Drive) into client dashboards.",
    ],
  },
];

export const projects = [
  {
    title: "PrepOrbit",
    tag: "Live on Google Play",
    description:
      "Exam-prep Android app for daily quizzes, practice and mock tests, sharing one account with learn.codeorbitapp.com. Push reminders, Google sign-in and progress synced with the web.",
    stack: ["Flutter", "Firebase", "Next.js API", "FCM"],
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.codeorbitapp.preporbit" },
      { label: "Website", href: "https://learn.codeorbitapp.com" },
    ],
  },
  {
    title: "PeekUp — Rider & Driver Apps",
    tag: "Es Magico",
    description:
      "Production ride-hailing iOS apps with Google Fleet Engine Driver & Consumer SDKs, live WebSocket tracking, Firebase notifications, multi-environment CI/CD and App Store delivery.",
    stack: ["UIKit", "Google Maps", "Fleet Engine", "Firebase", "WebSockets"],
    links: [],
  },
  {
    title: "Flutter Apps — Plum, Ensto, Soullab",
    tag: "Es Magico",
    description:
      "Three production cross-platform apps with full UI, API integration and state management, live on the Play Store and App Store.",
    stack: ["Flutter", "GetX", "BLoC", "Provider", "REST APIs"],
    links: [],
  },
  {
    title: "OrbitHisaab",
    tag: "CodeOrbit",
    description:
      "Loan-ledger app for money lenders: EMI schedules, receipts, overdue tracking, preclosure and PDF statements, with app lock and locked-down Firestore rules.",
    stack: ["Flutter", "Riverpod", "Firebase", "Clean Architecture"],
    links: [{ label: "Website", href: "https://hisaab.codeorbitapp.com" }],
  },
  {
    title: "AI Mobile Feature Prototype",
    tag: "R&D",
    description:
      "LangChain agents with a FastAPI backend, integrated into an iOS app to prototype intelligent in-app recommendations and AI-driven chat support.",
    stack: ["LangChain", "FastAPI", "Python", "Swift"],
    links: [],
  },
  {
    title: "Online Groceries Shop",
    tag: "SwiftUI",
    description:
      "End-to-end shopping app: product browsing, cart, checkout and Core Data persistence, built on a clean MVVM architecture.",
    stack: ["SwiftUI", "MVVM", "Core Data", "REST API"],
    links: [],
  },
];

// Early web projects from Masai School, kept as a compact list.
export const earlierProjects = [
  { title: "Swiggy Web Clone", live: "https://sanojswiggyclone.netlify.app/", code: "https://github.com/Sanojkumaryadav/Swiggy-Clone" },
  { title: "Zara Web Clone", live: "https://sanojzaraclone.netlify.app/", code: "https://github.com/Sanojkumaryadav/Zara-Clone" },
  { title: "Grocery Website", live: "https://sanojvegmartwebsite.netlify.app/", code: "https://github.com/Sanojkumaryadav/VegMartWebsite" },
  { title: "Text Transform (React)", live: "https://sanoj-tetx-transform-in-react.netlify.app/", code: "https://github.com/Sanojkumaryadav/React-Text-Converter" },
];

export const skillGroups = [
  { title: "iOS", items: ["Swift", "UIKit", "SwiftUI", "Core Data", "Combine", "URLSession", "MVVM / MVC", "XCTest", "XCUITest"] },
  { title: "Flutter", items: ["Dart", "GetX", "BLoC", "Provider", "Riverpod", "REST APIs", "Google Play"] },
  { title: "Real-time & Maps", items: ["WebSockets", "Google Maps SDK", "Fleet Engine (Driver & Consumer)", "Firebase FCM", "Crashlytics"] },
  { title: "AI / LLM", items: ["LangChain", "FastAPI", "OpenAI APIs", "Prompt Engineering"] },
  { title: "DevOps & Release", items: ["Fastlane", "GitHub Actions", "App Store Connect", "TestFlight", "CI/CD"] },
  { title: "Other", items: ["Node.js", "MongoDB", "React.js", "Git", "JIRA", "DSA", "OOP"] },
];

export const education = [
  { title: "B.Tech — Information Technology (CGPA 8.24)", place: "Gulzar Group of Institutes, Ludhiana", period: "2018 – 2022" },
  { title: "Full Stack Web Development", place: "Masai School, Bengaluru", period: "Nov 2021 – Aug 2022" },
];

export const achievements = {
  certs: ["iOS & Swift Complete Bootcamp", "XCUITest for iOS (Swift)", "Complete iOS 16 + SwiftUI", "ML Workshop with Python"],
  awards: ["All India Rank #2 — MHRD Online Quiz", "Coordinated CodeHack Event (Coding Ninjas × Arcane Innovation)"],
};

export const learning = [
  "SwiftUI Advanced Patterns",
  "Swift Concurrency (async/await, Actors)",
  "Core ML / Create ML",
  "LangChain Agents & RAG",
  "visionOS",
  "Kotlin Multiplatform",
];

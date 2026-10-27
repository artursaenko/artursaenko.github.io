// All texts of the site in one place. Edit here, both languages side by side.

export type Lang = "de" | "en";

export const links = {
  email: "artursaenko00@gmail.com",
  linkedin: "https://www.linkedin.com/in/artur-saienko",
  github: "https://github.com/artursaenko",
  whiteboardDemo: "https://artursaenko.github.io/drawing-table/?room=demo",
  whiteboardCode: "https://github.com/artursaenko/drawing-table",
  botCode: "https://github.com/artursaenko/telegram-sheets-bot",
  siteCode: "https://github.com/artursaenko/artursaenko.github.io",
};

// Optional: postal address for the Impressum. Leave empty to show name and e-mail only.
export const legal = {
  name: "Artur Saienko",
  address: ["Berliner Str. 10", "04105 Leipzig"] as string[],
};

const de = {
  meta: {
    title: "Artur Saienko · IT-Support & Softwaretest · Leipzig",
    description:
      "IT-Support, Softwaretest und Automatisierung in Leipzig. Technischer Support für Airbnb, Master in Softwareentwicklung, ab sofort verfügbar.",
  },
  skip: "Zum Inhalt springen",
  nav: { about: "Über mich", projects: "Projekte", experience: "Werdegang", contact: "Kontakt" },
  langSwitch: { label: "Sprache", other: "EN", otherName: "English" },
  hero: {
    subtitle: "IT-Support, Softwaretest & Automatisierung",
    meta: "Leipzig · ab sofort verfügbar",
    photoAlt: "Porträt von Artur Saienko",
    social: { linkedin: "LinkedIn", email: "E-Mail", github: "GitHub", cv: "Lebenslauf (PDF)" },
  },
  about: {
    title: "Über mich",
    paragraphs: [
      "Hallo, ich bin Artur. Knapp fünf Jahre habe ich in internationalen Teams im Support und im E-Commerce gearbeitet, davon über ein Jahr im technischen Support für Airbnb.",
      "Mein Ansatz ist einfach: Fehler erst selbst nachstellen, dann verstehen, dann so aufschreiben, dass niemand nachfragen muss. Und was sich jeden Tag wiederholt, automatisiere ich. Gerade bereite ich mich auf ITIL 4 Foundation vor.",
    ],
    skillsTitle: "Werkzeuge",
    skills: [
      "Zendesk",
      "Windows",
      "Microsoft 365",
      "iOS & Android",
      "AnyDesk & TeamViewer",
      "Google Apps Script",
      "Vue.js",
      "SQL (Grundkenntnisse)",
    ],
    languagesTitle: "Sprachen",
    languages: ["Deutsch B1", "Englisch C1", "Ukrainisch und Russisch Muttersprache"],
  },
  projects: {
    band: "Projekte",
    title: "Meine Projekte",
    items: [
      {
        key: "whiteboard",
        title: "Whiteboard für den Online-Unterricht",
        text: "Meine Masterarbeit: Lehrende zeichnen, Studierende sehen jeden Schritt in Echtzeit. Vue 3, Firebase, Canvas API. Probieren Sie die Demo in zwei Fenstern aus.",
        actions: [
          { label: "Demo öffnen", href: links.whiteboardDemo, primary: true },
          { label: "Code", href: links.whiteboardCode },
        ],
      },
      {
        key: "bot",
        title: "Telegram-Chat → Google Sheets",
        text: "Paketnummern und Tracking-Codes landen automatisch in der Tabelle, rund 100 Sendungen pro Woche. Mit Tippfehler-Erkennung, Bestätigung per Häkchen und 12 automatisierten Tests.",
        actions: [{ label: "Code und Beschreibung", href: links.botCode, primary: true }],
      },
      {
        key: "site",
        title: "Diese Website, getestet",
        text: "Gebaut mit Astro und Vue, auf Deutsch und Englisch, ohne Cookies und Tracking. Dazu ein offener Testbericht: Geräte, Barrierefreiheit, Ladezeit.",
        actions: [
          { label: "Testbericht", href: "/testbericht/", primary: true },
          { label: "Code", href: links.siteCode },
        ],
      },
    ],
  },
  experience: {
    title: "Werdegang",
    items: [
      {
        date: "11/2026 · geplant",
        title: "ITIL 4 Foundation",
        place: "Zertifizierung",
        text: "Grundlagen des IT-Service-Managements: Incident, Problem und Service Request.",
        icon: "badge",
      },
      {
        date: "08/2023 – heute",
        title: "Weiterbildung & eigene Projekte",
        place: "Leipzig",
        text: "Deutsch intensiv gelernt. Telegram-Bot für Google Sheets gebaut, meine Whiteboard-Demo modernisiert und diese Website entwickelt.",
        icon: "book",
      },
      {
        date: "2022 – 2024",
        title: "M.Sc. Software- und Anwendungsentwicklung",
        place: "Universität für Wissenschaft und Technologien, Dnipro",
        text: "Masterarbeit: Whiteboard-Plattform für den Online-Unterricht. Studium neben der Arbeit.",
        icon: "cap",
      },
      {
        date: "05/2022 – 07/2023",
        title: "Technischer Support für Airbnb",
        place: "Webhelp GmbH · Remote",
        text: "Bis zu 30 Tickets am Tag per Telefon, E-Mail und Chat. Fehler selbst nachgestellt, bevor ich sie weitergegeben habe, Quality-Score 90 %. Zehn neue Kolleginnen und Kollegen online eingearbeitet.",
        icon: "headset",
      },
      {
        date: "09/2018 – 02/2022",
        title: "Account Manager E-Commerce",
        place: "OneDayBundle · Amazon US · Remote",
        text: "Rund 200 Bestellungen am Tag geprüft, Abweichungen selbst geklärt. Onboarding für Neukunden geleitet, Abstimmung mit US-Lieferanten und Postdiensten.",
        icon: "box",
      },
      {
        date: "2018 – 2022",
        title: "B.Sc. Softwareentwicklung",
        place: "Dnipro",
        text: "Studium neben der Arbeit im E-Commerce.",
        icon: "cap",
      },
    ],
  },
  contact: {
    band: "Kontakt",
    text: "Sie suchen jemanden für Ihren Support oder Ihr Testing? Schreiben Sie mir, ich antworte schnell.",
    cvDe: "Lebenslauf (DE, PDF)",
    cvEn: "CV (EN, PDF)",
  },
  footer: {
    pages: "Seiten",
    documents: "Dokumente",
    legal: "Rechtliches",
    imprint: "Impressum",
    privacy: "Datenschutz",
    testReport: "Testbericht",
    updated: "Zuletzt aktualisiert: 10/2026",
  },
};

const en: typeof de = {
  meta: {
    title: "Artur Saienko · IT Support & Software Testing · Leipzig",
    description:
      "IT support, software testing and automation in Leipzig. Technical support for Airbnb, master's degree in software development, available now.",
  },
  skip: "Skip to content",
  nav: { about: "About", projects: "Projects", experience: "Experience", contact: "Contact" },
  langSwitch: { label: "Language", other: "DE", otherName: "Deutsch" },
  hero: {
    subtitle: "IT support, software testing & automation",
    meta: "Leipzig, Germany · available now",
    photoAlt: "Portrait of Artur Saienko",
    social: { linkedin: "LinkedIn", email: "Email", github: "GitHub", cv: "CV (PDF)" },
  },
  about: {
    title: "About me",
    paragraphs: [
      "Hi, I'm Artur. I spent almost five years in support and e-commerce in international teams, more than one of them in technical support for Airbnb.",
      "My approach is simple: reproduce the problem myself, understand it, then write it up so nobody has to ask again. And whatever repeats every day, I automate. I am currently preparing for ITIL 4 Foundation.",
    ],
    skillsTitle: "Tools",
    skills: [
      "Zendesk",
      "Windows",
      "Microsoft 365",
      "iOS & Android",
      "AnyDesk & TeamViewer",
      "Google Apps Script",
      "Vue.js",
      "SQL (basics)",
    ],
    languagesTitle: "Languages",
    languages: ["German B1", "English C1", "Ukrainian and Russian native"],
  },
  projects: {
    band: "Projects",
    title: "My projects",
    items: [
      {
        key: "whiteboard",
        title: "Whiteboard for online teaching",
        text: "My master's thesis: teachers draw, students see every step in real time. Vue 3, Firebase, Canvas API. Try the demo in two windows.",
        actions: [
          { label: "Open demo", href: links.whiteboardDemo, primary: true },
          { label: "Code", href: links.whiteboardCode },
        ],
      },
      {
        key: "bot",
        title: "Telegram chat → Google Sheets",
        text: "Parcel numbers and tracking codes go straight into the spreadsheet, about 100 shipments a week. With typo detection, checkbox confirmation and 12 automated tests.",
        actions: [{ label: "Code and write-up", href: links.botCode, primary: true }],
      },
      {
        key: "site",
        title: "This website, tested",
        text: "Built with Astro and Vue, in German and English, without cookies or tracking. Plus an open test report: devices, accessibility, load time.",
        actions: [
          { label: "Test report", href: "/en/test-report/", primary: true },
          { label: "Code", href: links.siteCode },
        ],
      },
    ],
  },
  experience: {
    title: "Experience",
    items: [
      {
        date: "11/2026 · planned",
        title: "ITIL 4 Foundation",
        place: "Certification",
        text: "IT service management basics: incident, problem and service request.",
        icon: "badge",
      },
      {
        date: "08/2023 – today",
        title: "Further education & own projects",
        place: "Leipzig",
        text: "Intensive German studies. Built a Telegram bot for Google Sheets, modernised my whiteboard demo and developed this website.",
        icon: "book",
      },
      {
        date: "2022 – 2024",
        title: "M.Sc. Software and Application Development",
        place: "University of Science and Technologies, Dnipro",
        text: "Master's thesis: whiteboard platform for online teaching. Studied alongside work.",
        icon: "cap",
      },
      {
        date: "05/2022 – 07/2023",
        title: "Technical support for Airbnb",
        place: "Webhelp GmbH · Remote",
        text: "Up to 30 tickets a day by phone, email and chat. Reproduced bugs myself before handing them over, quality score 90%. Onboarded ten new colleagues online.",
        icon: "headset",
      },
      {
        date: "09/2018 – 02/2022",
        title: "E-commerce account manager",
        place: "OneDayBundle · Amazon US · Remote",
        text: "Checked around 200 orders a day and resolved discrepancies myself. Ran onboarding for new clients, coordinated with US suppliers and postal services.",
        icon: "box",
      },
      {
        date: "2018 – 2022",
        title: "B.Sc. Software Development",
        place: "Dnipro",
        text: "Studied alongside working in e-commerce.",
        icon: "cap",
      },
    ],
  },
  contact: {
    band: "Contact",
    text: "Looking for someone for your support or testing team? Write to me, I reply quickly.",
    cvDe: "Lebenslauf (German, PDF)",
    cvEn: "CV (English, PDF)",
  },
  footer: {
    pages: "Pages",
    documents: "Documents",
    legal: "Legal",
    imprint: "Impressum (German)",
    privacy: "Privacy policy (German)",
    testReport: "Test report",
    updated: "Last updated: 10/2026",
  },
};

export const content = { de, en };

export const paths = {
  de: { home: "/", testReport: "/testbericht/" },
  en: { home: "/en/", testReport: "/en/test-report/" },
};

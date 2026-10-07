import { useEffect, useMemo, useState } from 'react'
import { PreferencesContext } from './preferences.js'

const messages = {
  es: {
    nav: ['Inicio', 'Sobre mí', 'Experiencia', 'Habilidades', 'Proyectos', 'SkeyFort', 'Contacto'],
    menu: 'Menú', closeMenu: 'Cerrar menú', navigation: 'Navegación principal', footerNavigation: 'Navegación del pie de página', breadcrumbLabel: 'Migas de pan', breadcrumbHome: 'Inicio',
    themeLabel: 'Tema', languageLabel: 'Idioma', system: 'Sistema', light: 'Claro', dark: 'Oscuro',
    projects: 'Proyectos', privacy: 'Privacidad de SkeyFort', support: 'Soporte de SkeyFort', contact: 'Contacto',
    crumbAbout: 'Sobre mí', crumbExperience: 'Experiencia', crumbSkills: 'Habilidades', crumbProjects: 'Proyectos', crumbContact: 'Contacto', crumbPrivacy: 'Política de privacidad', crumbSupport: 'Soporte',
    greeting: 'Hola, amigo. 👋', david: 'David RodriguezZ', role: 'Computer Systems Engineer | Full-Stack Developer',
    intro: 'Desarrollador Full-Stack con más de 7 años de experiencia en PHP y Laravel. Especializado en aplicaciones web empresariales, APIs REST, bases de datos y optimización de sistemas legacy.', viewProjects: 'Ver proyectos', aboutMe: 'Sobre mí',
    about: 'Sobre mí', aboutSummary: 'Desarrollador Full-Stack enfocado en crear soluciones mantenibles, seguras y escalables.', aboutPlaceholder: 'Perfil profesional',
    educationLabel: 'Formación académica', languagesLabel: 'Idiomas', certificationsLabel: 'Certificaciones', strengthsLabel: 'Fortalezas profesionales', degreeStatus: 'Titulado',
    experience: 'Experiencia', experienceSoon: 'Trayectoria en desarrollo de software y aseguramiento de calidad.',
    skills: 'Habilidades', skillsSummary: 'Tecnologías y áreas de experiencia profesional.',
    projectsSummary: 'Una selección de proyectos de software.', learnMore: 'Conocer más', viewProject: 'Ver proyecto',
    contactSummary: 'Puedes encontrarme o escribirme a través de estos canales.', emailLabel: 'Correo electrónico', linkedinLabel: 'LinkedIn', githubLabel: 'GitHub',
    notFound: 'Página no encontrada', notFoundText: 'La página que buscas no existe.', home: 'Volver al inicio',
    microsoftStore: 'Microsoft Store',
    skeyfortInfo: 'Información de SkeyFort', privacyPolicy: 'Política de privacidad',
    privacySummary: 'Esta página está reservada para la Política de privacidad oficial de SkeyFort.',
    privacyPending: 'El contenido definitivo de la política está pendiente y se publicará aquí.',
    supportSummary: 'Aquí estará disponible la información de soporte de SkeyFort.',
    supportPending: 'Los detalles de soporte estarán disponibles próximamente.',
  },
  en: {
    nav: ['Home', 'About', 'Experience', 'Skills', 'Projects', 'SkeyFort', 'Contact'],
    menu: 'Menu', closeMenu: 'Close menu', navigation: 'Main navigation', footerNavigation: 'Footer navigation', breadcrumbLabel: 'Breadcrumb', breadcrumbHome: 'Home',
    themeLabel: 'Theme', languageLabel: 'Language', system: 'System', light: 'Light', dark: 'Dark',
    projects: 'Projects', privacy: 'SkeyFort Privacy', support: 'SkeyFort Support', contact: 'Contact',
    crumbAbout: 'About', crumbExperience: 'Experience', crumbSkills: 'Skills', crumbProjects: 'Projects', crumbContact: 'Contact', crumbPrivacy: 'Privacy Policy', crumbSupport: 'Support',
    greeting: 'Hello, friend. 👋', david: 'David RodriguezZ', role: 'Computer Systems Engineer | Full-Stack Developer',
    intro: 'Full-Stack Developer with 7+ years of experience in PHP and Laravel. Specializes in enterprise web applications, REST APIs, databases, and legacy system optimization.', viewProjects: 'View Projects', aboutMe: 'About Me',
    about: 'About', aboutSummary: 'Full-Stack Developer focused on building maintainable, secure, and scalable solutions.', aboutPlaceholder: 'Professional profile',
    educationLabel: 'Education', languagesLabel: 'Languages', certificationsLabel: 'Certifications', strengthsLabel: 'Professional strengths', degreeStatus: 'Degree awarded',
    experience: 'Experience', experienceSoon: 'Experience in software development and quality assurance.',
    skills: 'Skills', skillsSummary: 'Technologies and areas of professional experience.',
    projectsSummary: 'A selection of software projects.', learnMore: 'Learn more', viewProject: 'View project',
    contactSummary: 'You can find me or get in touch through these channels.', emailLabel: 'Email', linkedinLabel: 'LinkedIn', githubLabel: 'GitHub',
    notFound: 'Page not found', notFoundText: 'The page you are looking for does not exist.', home: 'Return to Home',
    microsoftStore: 'Microsoft Store',
    skeyfortInfo: 'SkeyFort information', privacyPolicy: 'Privacy Policy',
    privacySummary: 'This page is reserved for the official SkeyFort Privacy Policy.',
    privacyPending: 'The definitive policy content is pending and will be published here.',
    supportSummary: 'Support information for SkeyFort will be available here.',
    supportPending: 'Support details are coming soon.',
  },
}

function getStoredValue(key, fallback, allowedValues) {
  try {
    const value = localStorage.getItem(key)
    return allowedValues.includes(value) ? value : fallback
  } catch {
    return fallback
  }
}

export function PreferencesProvider({ children }) {
  const [language, setLanguage] = useState(() => getStoredValue('hellofriendev-language', 'es', ['es', 'en']))
  const [theme, setTheme] = useState(() => getStoredValue('hellofriendev-theme', 'system', ['system', 'light', 'dark']))

  useEffect(() => {
    document.documentElement.lang = language
    try {
      localStorage.setItem('hellofriendev-language', language)
    } catch {
      // Keep preferences available for the current session when storage is unavailable.
    }
  }, [language])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const updateTheme = () => {
      const isDark = theme === 'dark' || (theme === 'system' && media.matches)
      document.documentElement.classList.toggle('dark', isDark)
      document.documentElement.style.colorScheme = isDark ? 'dark' : 'light'
    }

    updateTheme()
    media.addEventListener('change', updateTheme)
    try {
      localStorage.setItem('hellofriendev-theme', theme)
    } catch {
      // Keep preferences available for the current session when storage is unavailable.
    }
    return () => media.removeEventListener('change', updateTheme)
  }, [theme])

  const value = useMemo(() => ({
    language,
    setLanguage,
    theme,
    setTheme,
    t: (key) => messages[language][key] ?? key,
  }), [language, theme])

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>
}

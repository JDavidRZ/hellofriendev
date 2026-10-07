import PageHeading from '../components/ui/PageHeading.jsx'
import { profile } from '../data/profile.js'
import { usePreferences } from '../context/usePreferences.js'

function Contact() {
  const { language, t } = usePreferences()
  const { contact } = profile[language]
  const links = [
    { label: t('emailLabel'), value: contact.email, href: `mailto:${contact.email}` },
    { label: t('linkedinLabel'), value: 'LinkedIn', href: contact.linkedin },
    { label: t('githubLabel'), value: 'GitHub', href: contact.github },
  ]

  return (
    <section>
      <PageHeading title={t('contact')}>{t('contactSummary')}</PageHeading>
      <ul className="grid gap-4 sm:grid-cols-2">
        {links.map((link) => (
          <li className="rounded-lg border border-slate-200 p-5 dark:border-slate-700" key={link.label}>
            <h2 className="text-sm font-medium text-slate-500 dark:text-slate-400">{link.label}</h2>
            <a className="mt-2 inline-block break-all font-medium text-blue-700 underline-offset-4 hover:underline focus-visible:underline dark:text-blue-300" href={link.href} rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'} target={link.href.startsWith('mailto:') ? undefined : '_blank'}>{link.value}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Contact

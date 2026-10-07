import PageHeading from '../components/ui/PageHeading.jsx'
import { profile } from '../data/profile.js'
import { usePreferences } from '../context/usePreferences.js'

function About() {
  const { language, t } = usePreferences()
  const details = profile[language]

  return (
    <section>
      <PageHeading title={t('about')}>{details.summary}</PageHeading>
      <div className="grid gap-8 lg:grid-cols-2">
        <section aria-labelledby="education-title">
          <h2 className="mb-3 text-xl font-semibold tracking-tight text-slate-950 dark:text-white" id="education-title">{t('educationLabel')}</h2>
          <div className="rounded-lg border border-slate-200 p-5 dark:border-slate-700">
            <h3 className="font-semibold">{details.education.degree}</h3>
            <p className="mt-1 text-slate-600 dark:text-slate-300">{details.education.institution}</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{details.education.period} · {details.education.status}</p>
          </div>
        </section>

        <section aria-labelledby="languages-title">
          <h2 className="mb-3 text-xl font-semibold tracking-tight text-slate-950 dark:text-white" id="languages-title">{t('languagesLabel')}</h2>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            {details.languages.map((languageName) => <li key={languageName}>{languageName}</li>)}
          </ul>
        </section>

        <section aria-labelledby="certifications-title">
          <h2 className="mb-3 text-xl font-semibold tracking-tight text-slate-950 dark:text-white" id="certifications-title">{t('certificationsLabel')}</h2>
          <ul className="list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
            {details.certifications.map((certification) => <li key={certification}>{certification}</li>)}
          </ul>
        </section>

        <section aria-labelledby="strengths-title">
          <h2 className="mb-3 text-xl font-semibold tracking-tight text-slate-950 dark:text-white" id="strengths-title">{t('strengthsLabel')}</h2>
          <ul className="list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
            {details.strengths.map((strength) => <li key={strength}>{strength}</li>)}
          </ul>
        </section>
      </div>
    </section>
  )
}

export default About

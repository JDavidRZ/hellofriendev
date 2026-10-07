import PageHeading from '../components/ui/PageHeading.jsx'
import { profile } from '../data/profile.js'
import { usePreferences } from '../context/usePreferences.js'

function Experience() {
  const { language, t } = usePreferences()
  const experience = profile[language].experience

  return (
    <section>
      <PageHeading title={t('experience')}>{t('experienceSoon')}</PageHeading>
      <ol className="space-y-6 border-l border-slate-200 pl-6 dark:border-slate-700">
        {experience.map((position) => (
          <li className="relative" key={position.role}>
            <span aria-hidden="true" className="absolute -left-[1.95rem] top-1.5 h-3 w-3 rounded-full border-2 border-blue-600 bg-white dark:bg-slate-950" />
            <article>
              <h2 className="text-xl font-semibold text-slate-950 dark:text-white">{position.role}</h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{position.period}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700 dark:text-slate-300">
                {position.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Experience

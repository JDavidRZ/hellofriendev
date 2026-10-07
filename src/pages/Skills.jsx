import PageHeading from '../components/ui/PageHeading.jsx'
import { profile } from '../data/profile.js'
import { usePreferences } from '../context/usePreferences.js'

function Skills() {
  const { language, t } = usePreferences()
  const skillGroups = profile[language].skills
  return (
    <section>
      <PageHeading title={t('skills')}>{t('skillsSummary')}</PageHeading>
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <section className="motion-card rounded-lg border border-slate-200 p-5 dark:border-slate-700" key={group.category}>
            <h2 className="font-semibold text-slate-950 dark:text-white">{group.category}</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((skill) => <li className="rounded-md bg-slate-100 px-3 py-1.5 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200" key={skill}>{skill}</li>)}
            </ul>
          </section>
        ))}
      </div>
    </section>
  )
}

export default Skills

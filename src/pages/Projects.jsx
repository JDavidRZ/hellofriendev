import PageHeading from '../components/ui/PageHeading.jsx'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import { usePreferences } from '../context/usePreferences.js'

function Projects() {
  const { language, t } = usePreferences()
  return (
    <section>
      <PageHeading title={t('projects')}>{t('projectsSummary')}</PageHeading>
      <ul className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <li className="motion-card rounded-lg border border-slate-200 p-5 dark:border-slate-700" key={project.name}>
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="mt-2 leading-6 text-slate-600 dark:text-slate-300">{project.description[language]}</p>
            {project.path ? (
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                <Link className="font-medium text-blue-700 hover:underline dark:text-blue-300" to={project.path}>{t('learnMore')}</Link>
                {project.storeUrl && <a className="font-medium text-blue-700 hover:underline dark:text-blue-300" href={project.storeUrl} rel="noreferrer" target="_blank">{t('microsoftStore')}</a>}
              </div>
            ) : (
              <a className="mt-4 inline-block font-medium text-blue-700 hover:underline dark:text-blue-300" href={project.url} rel="noreferrer" target="_blank">{t('viewProject')}</a>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects

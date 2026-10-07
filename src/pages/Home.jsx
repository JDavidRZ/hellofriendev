import { Link } from 'react-router-dom'
import { usePreferences } from '../context/usePreferences.js'

function Home() {
  const { t } = usePreferences()
  return (
    <section className="max-w-3xl py-8 sm:py-16" aria-labelledby="home-title">
      <p className="mb-4 text-lg text-slate-600 dark:text-slate-300">{t('greeting')}</p>
      <h1 id="home-title" className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">{t('david')}</h1>
      <p className="mt-4 text-xl text-slate-700 dark:text-slate-200 sm:text-2xl">{t('role')}</p>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">{t('intro')}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link className="motion-interactive rounded-md bg-blue-700 px-5 py-3 text-sm font-medium !text-white hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500" to="/projects">{t('viewProjects')}</Link>
        <Link className="motion-interactive rounded-md border border-slate-300 px-5 py-3 text-sm font-medium hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-800" to="/about">{t('aboutMe')}</Link>
      </div>
    </section>
  )
}

export default Home

import { Link } from 'react-router-dom'
import { usePreferences } from '../context/usePreferences.js'

function NotFound() {
  const { t } = usePreferences()
  return (
    <section className="py-8" aria-labelledby="not-found-title">
      <h1 id="not-found-title" className="text-3xl font-semibold tracking-tight">{t('notFound')}</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-300">{t('notFoundText')}</p>
      <Link className="mt-5 inline-block text-blue-700 hover:underline dark:text-blue-300" to="/">{t('home')}</Link>
    </section>
  )
}

export default NotFound

import { Link } from 'react-router-dom'
import { usePreferences } from '../../context/usePreferences.js'

function Footer() {
  const { t } = usePreferences()
  return (
    <footer className="border-t border-slate-200 dark:border-slate-700">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-6 text-sm text-slate-600 dark:text-slate-300 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© HelloFriendDev</p>
        <nav aria-label={t('footerNavigation')} className="flex flex-wrap gap-x-5 gap-y-2">
          <Link className="hover:text-blue-700 dark:hover:text-blue-300" to="/projects">{t('projects')}</Link>
          <Link className="hover:text-blue-700 dark:hover:text-blue-300" to="/skeyfort/privacy">{t('privacy')}</Link>
          <Link className="hover:text-blue-700 dark:hover:text-blue-300" to="/skeyfort/support">{t('support')}</Link>
          <Link className="hover:text-blue-700 dark:hover:text-blue-300" to="/contact">{t('contact')}</Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer

import { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { usePreferences } from '../../context/usePreferences.js'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const themeMenu = useRef(null)
  const languageMenu = useRef(null)
  const { language, setLanguage, theme, setTheme, t } = usePreferences()
  const links = [
    [t('nav')[0], '/'], [t('nav')[1], '/about'], [t('nav')[2], '/experience'],
    [t('nav')[3], '/skills'], [t('nav')[4], '/projects'], [t('nav')[5], '/skeyfort'], [t('nav')[6], '/contact'],
  ]

  return (
    <header className="border-b border-slate-200 dark:border-slate-700">
      <nav aria-label={t('navigation')} className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4 sm:px-8">
        <Link className="text-lg font-semibold tracking-tight" to="/">HelloFriendDev</Link>
        <button
          aria-label={menuOpen ? t('closeMenu') : t('menu')}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
        <ul id="primary-navigation" className={`${menuOpen ? 'flex' : 'hidden'} w-full flex-col gap-1 md:flex md:w-auto md:flex-row md:items-center md:gap-5`}>
          {links.map(([label, to]) => (
            <li key={to}>
              <NavLink
                className={({ isActive }) => `block rounded px-2 py-2 text-sm hover:text-blue-700 dark:hover:text-blue-300 ${isActive ? 'font-semibold text-blue-700 dark:text-blue-300' : 'text-slate-700 dark:text-slate-300'}`}
                onClick={() => setMenuOpen(false)}
                to={to}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="ml-auto flex items-center justify-end gap-1 md:ml-2">
          <details className="group relative" ref={themeMenu}>
            <summary aria-label={t('themeLabel')} title={t('themeLabel')} className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md text-slate-700 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-blue-600 dark:text-slate-200 dark:hover:bg-slate-800 [&::-webkit-details-marker]:hidden">
              <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                {theme === 'system' ? <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8m-4-4v4" /></> : theme === 'dark' ? <path strokeLinecap="round" strokeLinejoin="round" d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5a8.5 8.5 0 1 0 12 12Z" /> : <><circle cx="12" cy="12" r="4" /><path strokeLinecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></>}
              </svg>
            </summary>
            <fieldset className="absolute right-0 z-50 mt-2 w-44 rounded-lg border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-700 dark:bg-slate-900">
              <legend className="sr-only">{t('themeLabel')}</legend>
              {[['system', t('system')], ['light', t('light')], ['dark', t('dark')]].map(([value, label]) => (
                <label className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800" key={value}>
                  <input checked={theme === value} className="accent-blue-600" name="theme" onChange={() => { setTheme(value); themeMenu.current.open = false }} type="radio" value={value} />
                  {label}
                </label>
              ))}
            </fieldset>
          </details>
          <details className="group relative" ref={languageMenu}>
            <summary aria-label={t('languageLabel')} title={t('languageLabel')} className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md text-slate-700 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-blue-600 dark:text-slate-200 dark:hover:bg-slate-800 [&::-webkit-details-marker]:hidden">
              <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 5h12M10 3v2m3 0c-.5 4-3 7-7 9m1-6c1 2 3 4 5 5m2 8 4.5-10L23 21m-6.5-3h5" />
              </svg>
            </summary>
            <fieldset className="absolute right-0 z-50 mt-2 w-40 rounded-lg border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-700 dark:bg-slate-900">
              <legend className="sr-only">{t('languageLabel')}</legend>
              {[['es', 'Español'], ['en', 'English']].map(([value, label]) => (
                <label className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800" key={value}>
                  <input checked={language === value} className="accent-blue-600" name="language" onChange={() => { setLanguage(value); languageMenu.current.open = false }} type="radio" value={value} />
                  {label}
                </label>
              ))}
            </fieldset>
          </details>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

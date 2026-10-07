import { Link, useLocation } from 'react-router-dom'
import { usePreferences } from '../../context/usePreferences.js'

const segmentLabels = {
  about: 'crumbAbout',
  experience: 'crumbExperience',
  skills: 'crumbSkills',
  projects: 'crumbProjects',
  contact: 'crumbContact',
  privacy: 'crumbPrivacy',
  support: 'crumbSupport',
  skeyfort: 'SkeyFort',
}

function humanizeSegment(segment) {
  return segment
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function Breadcrumbs() {
  const { pathname } = useLocation()
  const { t } = usePreferences()
  const segments = pathname.split('/').filter(Boolean)

  if (segments.length === 0) return null

  const crumbs = [
    { label: t('breadcrumbHome'), to: '/' },
    ...segments.map((segment, index) => {
      const to = `/${segments.slice(0, index + 1).join('/')}`
      const labelKey = segmentLabels[segment.toLowerCase()]
      const label = labelKey === 'SkeyFort' ? labelKey : labelKey ? t(labelKey) : humanizeSegment(segment)
      return { label, to }
    }),
  ]

  return (
    <nav aria-label={t('breadcrumbLabel')} className="mb-8 min-w-0 text-sm text-slate-500 dark:text-slate-400">
      <ol className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1">
        {crumbs.map((crumb, index) => {
          const isCurrent = index === crumbs.length - 1

          return (
            <li className="flex min-w-0 items-center gap-2" key={crumb.to}>
              {index > 0 && (
                <svg aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-slate-400" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m6 3 5 5-5 5" />
                </svg>
              )}
              {isCurrent ? (
                <span aria-current="page" className="max-w-full break-words font-medium text-slate-800 dark:text-slate-200">{crumb.label}</span>
              ) : (
                <Link className="rounded-sm hover:text-blue-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:hover:text-blue-300" to={crumb.to}>{crumb.label}</Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs

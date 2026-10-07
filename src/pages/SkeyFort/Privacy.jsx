import { privacyPolicies } from '../../data/privacyPolicy.js'
import { usePreferences } from '../../context/usePreferences.js'

function Privacy() {
  const { language } = usePreferences()
  const policy = privacyPolicies[language]

  return (
    <article className="mx-auto max-w-3xl">
      <header className="mb-10 border-b border-slate-200 pb-6 dark:border-slate-700">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">{policy.title}</h1>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{policy.lastUpdated}</p>
      </header>

      <div className="space-y-5 text-base leading-7 text-slate-700 dark:text-slate-300">
        {policy.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>

      <div className="mt-10 space-y-10">
        {policy.sections.map((section) => (
          <section aria-labelledby={`privacy-section-${section.heading}`} key={section.heading}>
            <h2 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white" id={`privacy-section-${section.heading}`}>{section.heading}</h2>
            <div className="mt-3 space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.list && (
                <ul className="list-disc space-y-1 pl-6">
                  {section.list.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
              {section.after?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.emailPlaceholder && (
                <p><strong className="font-semibold text-slate-900 dark:text-slate-100">{section.emailLabel}</strong> {section.emailPlaceholder}</p>
              )}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-10 border-t border-slate-200 pt-6 text-base leading-7 text-slate-700 dark:border-slate-700 dark:text-slate-300">{policy.acknowledgement}</p>
    </article>
  )
}

export default Privacy

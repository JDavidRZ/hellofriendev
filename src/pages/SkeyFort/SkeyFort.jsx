import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeading from '../../components/ui/PageHeading.jsx'
import { usePreferences } from '../../context/usePreferences.js'
import { skeyfortContent, skeyfortStoreUrl } from '../../data/skeyfort.js'
import accessScreenshot from '../../assets/images/skeyfort/access.png'
import menuScreenshot from '../../assets/images/skeyfort/menu.png'
import formScreenshot from '../../assets/images/skeyfort/form.png'
import settingsScreenshot from '../../assets/images/skeyfort/settings.png'
import appIcon from '../../assets/images/skeyfort/appicon.png'

const screenshotImages = [accessScreenshot, menuScreenshot, formScreenshot, settingsScreenshot]

function SkeyFort() {
  const { language, t } = usePreferences()
  const content = skeyfortContent[language]
  const [selectedScreenshot, setSelectedScreenshot] = useState(null)
  const dialogRef = useRef(null)

  useEffect(() => {
    if (selectedScreenshot && !dialogRef.current.open) {
      dialogRef.current.showModal()
    }
  }, [selectedScreenshot])

  function closeScreenshot() {
    dialogRef.current?.close()
  }

  return (
    <section>
      <div className="flex items-start gap-4 sm:gap-6">
        <img alt={language === 'es' ? 'Icono de la aplicación SkeyFort' : 'SkeyFort app icon'} className="mt-1 h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20" decoding="async" height="128" src={appIcon} width="128" />
        <PageHeading title="SkeyFort">{content.description}</PageHeading>
      </div>
      <p className="text-sm text-slate-500 dark:text-slate-400">{content.availability}</p>
      <a className="motion-interactive mt-5 inline-flex rounded-md bg-blue-700 px-5 py-3 text-sm font-medium !text-white hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500" href={skeyfortStoreUrl} rel="noreferrer" target="_blank">
        {content.storeAction}
      </a>

      <section aria-labelledby="skeyfort-screenshots" className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white" id="skeyfort-screenshots">{content.screenshotsHeading}</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {content.screenshots.map((screenshot, index) => (
            <figure className="overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900" key={screenshot.caption}>
              <button aria-label={`${content.openScreenshot} ${screenshot.caption}`} className="block w-full cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue-600" onClick={() => setSelectedScreenshot({ ...screenshot, src: screenshotImages[index] })} type="button">
                <img alt={screenshot.alt} className="aspect-[16/10] w-full object-cover" decoding="async" loading="lazy" src={screenshotImages[index]} />
              </button>
              <figcaption className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">{screenshot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section aria-labelledby="skeyfort-features" className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white" id="skeyfort-features">{content.featuresHeading}</h2>
        <ul className="mt-5 space-y-3 text-slate-700 dark:text-slate-300">
          {content.features.map((feature) => <li className="flex gap-3 leading-7" key={feature}><span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />{feature}</li>)}
        </ul>
      </section>

      <nav aria-label={t('skeyfortInfo')} className="mt-10 flex flex-wrap gap-x-5 gap-y-2">
        <Link className="text-blue-700 hover:underline dark:text-blue-300" to="/skeyfort/privacy">{t('privacyPolicy')}</Link>
        <Link className="text-blue-700 hover:underline dark:text-blue-300" to="/skeyfort/support">{t('support')}</Link>
      </nav>

      <dialog
        aria-label={selectedScreenshot?.caption}
        className="m-auto max-h-[92vh] w-[min(96vw,72rem)] max-w-none rounded-xl border border-slate-200 bg-white p-3 text-slate-900 shadow-2xl backdrop:bg-black/80 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 sm:p-5"
        onClick={(event) => { if (event.target === dialogRef.current) closeScreenshot() }}
        onClose={() => setSelectedScreenshot(null)}
        ref={dialogRef}
      >
        {selectedScreenshot && (
          <figure>
            <div className="mb-3 flex items-center justify-between gap-4">
              <figcaption className="font-medium">{selectedScreenshot.caption}</figcaption>
              <button aria-label={content.closeScreenshot} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-xl text-slate-600 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-blue-600 dark:text-slate-300 dark:hover:bg-slate-800" onClick={closeScreenshot} type="button">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <img alt={selectedScreenshot.alt} className="mx-auto max-h-[calc(92vh-5rem)] max-w-full rounded object-contain" src={selectedScreenshot.src} />
          </figure>
        )}
      </dialog>
    </section>
  )
}

export default SkeyFort

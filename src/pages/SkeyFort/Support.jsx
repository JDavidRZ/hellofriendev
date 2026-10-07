import PageHeading from '../../components/ui/PageHeading.jsx'
import { usePreferences } from '../../context/usePreferences.js'

function Support() {
  const { t } = usePreferences()
  return <section><PageHeading title={`SkeyFort — ${t('support')}`}>{t('supportSummary')}</PageHeading><p className="max-w-2xl leading-7 text-slate-600 dark:text-slate-300">{t('supportPending')}</p></section>
}

export default Support

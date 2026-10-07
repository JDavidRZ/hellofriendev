import { useContext } from 'react'
import { PreferencesContext } from './preferences.js'

export function usePreferences() {
  const context = useContext(PreferencesContext)
  if (!context) throw new Error('usePreferences must be used within PreferencesProvider')
  return context
}

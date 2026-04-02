import { useState, useEffect } from 'react'
import { getSession, signInWithGoogle, signOut, onAuthChange } from '../services/supabase/auth'

// ── Domain restriction ────────────────────────────────────────────────────────
const ALLOWED_DOMAIN = 'pilani.bits-pilani.ac.in'

function isAllowedEmail(email) {
  return typeof email === 'string' && email.toLowerCase().endsWith(`@${ALLOWED_DOMAIN}`)
}
// ─────────────────────────────────────────────────────────────────────────────

export function useAuth() {
  const [user,        setUser]        = useState(null)
  const [loading,     setLoading]     = useState(true)
  const [domainError, setDomainError] = useState(false)

  useEffect(() => {
    // Restore session on mount
    getSession().then(async ({ data: { session } }) => {
      await handleSession(session)
      setLoading(false)
    })

    // React to auth events
    const { data: { subscription } } = onAuthChange(async (_event, session) => {
      await handleSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  async function handleSession(session) {
    const u = session?.user ?? null

    if (u && !isAllowedEmail(u.email)) {
      // Wrong domain — boot them out immediately
      await signOut().catch(() => {})
      setUser(null)
      setDomainError(true)
      return
    }

    setUser(u)
    if (u) setDomainError(false)
  }

  return { user, loading, domainError, signInWithGoogle, signOut }
}

import { useState, useEffect, useCallback } from 'react'
import { insertScore, getUserScores } from '../services/supabase/scores'

export function useScores(user, gameName) {
  const [scores,  setScores]  = useState([])
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState(null)

  const fetchScores = useCallback(async () => {
    if (!user || !gameName) return
    setLoading(true)
    setError(null)
    try {
      const data = await getUserScores(user.id, gameName)
      setScores(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [user, gameName])

  // Auto-fetch when user or game changes
  useEffect(() => { fetchScores() }, [fetchScores])

  const saveScore = useCallback(async (score) => {
    if (!user || !gameName) return
    setError(null)
    try {
      await insertScore({
        user_id:     user.id,
        email:       user.email,
        player_name: user.user_metadata?.full_name || 'Player',
        game_name:   gameName,
        score,
      })
      fetchScores() // refresh history after saving
    } catch (err) {
      setError(err.message)
      console.error('[useScores] Failed to save score:', err)
    }
  }, [user, gameName, fetchScores])

  return { scores, loading, error, saveScore }
}

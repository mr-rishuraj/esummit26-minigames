export default function ScoreHistory({ scores, loading }) {
  if (loading) {
    return (
      <div className="font-pixel text-arcade-gray text-xs text-center py-4 animate-blink">
        LOADING...
      </div>
    )
  }

  if (!scores.length) {
    return (
      <div className="font-pixel text-arcade-gray text-xs text-center py-4">
        NO RUNS YET — START PLAYING!
      </div>
    )
  }

  const best = Math.max(...scores.map(s => s.score))

  return (
    <div>
      <h3 className="font-pixel text-arcade-cyan text-xs mb-3">YOUR LAST RUNS</h3>
      <div className="space-y-1">
        {scores.map((s, i) => (
          <div
            key={s.id}
            className="flex items-center justify-between bg-arcade-bg border border-arcade-gray/30
                       px-3 py-2 hover:border-arcade-gray/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="font-pixel text-arcade-gray text-xs w-4">#{i + 1}</span>
              <span className={`font-pixel text-xs ${s.score === best ? 'text-arcade-yellow' : 'text-arcade-green'}`}>
                {s.score}
                {s.score === best && <span className="ml-2 text-[8px] text-arcade-yellow">★ BEST</span>}
              </span>
            </div>
            <span className="font-mono text-arcade-gray text-xs">
              {new Date(s.created_at).toLocaleDateString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

const DUMMY_SCORES = [
  { rank: 1, name: 'SPEEDMASTER', score: 2847, game: 'DINO RUN' },
  { rank: 2, name: 'FLAPPYKING',  score: 1923, game: 'FLAPPY'   },
  { rank: 3, name: 'PIXELPRO99',  score: 1456, game: 'DINO RUN' },
  { rank: 4, name: 'TAPMASTER',   score:  987, game: 'FLAPPY'   },
  { rank: 5, name: 'ARCADEFAN',   score:  543, game: 'DINO RUN' },
]

const RANK_META = {
  1: { color: '#f1fa8c', glow: '#f1fa8c55', label: 'GOLD'   },
  2: { color: '#8be9fd', glow: '#8be9fd44', label: 'SILVER' },
  3: { color: '#ffb86c', glow: '#ffb86c44', label: 'BRONZE' },
}

export default function Leaderboard() {
  return (
    <section className="mb-5 sm:mb-8">
      {/* Title row */}
      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        <span className="font-pixel text-arcade-yellow text-[10px] sm:text-xs whitespace-nowrap
                         drop-shadow-[0_0_6px_#f1fa8c]">
          HALL OF FAME
        </span>
        <div className="flex-1 h-px bg-arcade-yellow/30" />
        <span className="font-pixel text-arcade-gray text-[8px] sm:text-[9px] whitespace-nowrap">
          TOP 5
        </span>
      </div>

      {/* Cards strip — scrollable on mobile */}
      <div className="scroll-x pb-2">
        <div className="flex gap-2 sm:gap-3"
             style={{ minWidth: 'max-content' }}>
          {DUMMY_SCORES.map(entry => {
            const meta  = RANK_META[entry.rank]
            const isTop = !!meta

            return (
              <div
                key={entry.rank}
                className="flex flex-col items-center gap-1.5 px-2 sm:px-3 py-2 sm:py-3
                           border-2 bg-arcade-panel flex-shrink-0"
                style={{
                  width:       'clamp(72px, 18vw, 110px)',
                  borderColor: isTop ? meta.color : '#6272a4',
                  boxShadow:   isTop ? `0 0 10px ${meta.glow}` : 'none',
                }}
              >
                {/* Rank label */}
                <span
                  className="font-pixel text-[7px] sm:text-[9px] whitespace-nowrap"
                  style={{ color: isTop ? meta.color : '#6272a4' }}
                >
                  {isTop ? meta.label : `#${entry.rank}`}
                </span>

                {/* Name — truncated */}
                <span className="font-pixel text-[7px] sm:text-[8px] text-white text-center
                                 leading-snug w-full truncate px-1">
                  {entry.name}
                </span>

                {/* Score */}
                <span
                  className="font-pixel text-sm sm:text-xl leading-none"
                  style={{ color: isTop ? meta.color : '#f8f8f2' }}
                >
                  {entry.score.toLocaleString()}
                </span>

                {/* Game tag */}
                <span className="font-pixel text-[6px] sm:text-[7px] text-arcade-gray
                                 text-center whitespace-nowrap">
                  {entry.game}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

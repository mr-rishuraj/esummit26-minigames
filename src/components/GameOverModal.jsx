// ─── Ad Configuration ────────────────────────────────────────────────────────
// Set this to your ad image URL, or leave null to show the placeholder box.
const AD_IMAGE_URL = null
// ─────────────────────────────────────────────────────────────────────────────

export default function GameOverModal({ score, onPlayAgain }) {
  return (
    <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-20 p-3 sm:p-4">
      <div className="bg-arcade-panel border-2 sm:border-4 border-arcade-red
                      shadow-[0_0_20px_#ff5555] w-full max-w-[260px] sm:max-w-xs
                      text-center px-4 py-5 sm:p-6 animate-shake">

        {/* Title */}
        <h2 className="font-pixel text-arcade-red text-lg sm:text-2xl mb-0.5
                       drop-shadow-[0_0_8px_#ff5555]">
          GAME
        </h2>
        <h2 className="font-pixel text-arcade-red text-lg sm:text-2xl mb-4 sm:mb-6
                       drop-shadow-[0_0_8px_#ff5555]">
          OVER
        </h2>

        {/* Score */}
        <div className="bg-arcade-bg border-2 border-arcade-yellow px-3 py-2 sm:px-4 sm:py-3 mb-4 sm:mb-6">
          <p className="font-pixel text-arcade-gray text-[9px] sm:text-xs mb-1 sm:mb-2">
            YOUR SCORE
          </p>
          <p className="font-pixel text-arcade-yellow text-2xl sm:text-3xl leading-none">
            {score}
          </p>
        </div>

        {/* Ad */}
        <div className="mb-4 sm:mb-6">
          {AD_IMAGE_URL ? (
            <img
              src={AD_IMAGE_URL}
              alt="Advertisement"
              className="w-full border-2 border-arcade-gray"
            />
          ) : (
            <div className="border-2 border-dashed border-arcade-gray/50 bg-arcade-bg
                            flex flex-col items-center justify-center h-16 sm:h-20 gap-1">
              <span className="font-pixel text-arcade-gray text-[8px] sm:text-[9px]">
                AD SPACE
              </span>
              <span className="font-mono text-arcade-gray/50 text-[7px] sm:text-[8px]">
                Set AD_IMAGE_URL in GameOverModal.jsx
              </span>
            </div>
          )}
        </div>

        {/* Play Again */}
        <button
          onClick={onPlayAgain}
          className="w-full font-pixel text-[10px] sm:text-sm text-arcade-bg bg-arcade-green
                     border-2 sm:border-4 border-arcade-green shadow-pixel py-2.5 sm:py-3
                     hover:bg-arcade-yellow hover:border-arcade-yellow
                     active:translate-x-1 active:translate-y-1 active:shadow-none
                     transition-all"
        >
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

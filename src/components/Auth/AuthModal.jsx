export default function AuthModal({ onSignInWithGoogle, domainError }) {
  return (
    <div className="fixed inset-0 bg-arcade-bg flex items-center justify-center z-50 p-4">
      {/* CRT radial vignette */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse at center, transparent 55%, #000 100%)' }} />

      <div className="relative z-10 w-full max-w-sm flex flex-col items-center gap-6">

        {/* Logo */}
        <div className="text-center">
          <p className="font-pixel text-arcade-green text-2xl sm:text-3xl mb-1
                        drop-shadow-[0_0_14px_#50fa7b]">
            MINI
          </p>
          <p className="font-pixel text-arcade-yellow text-2xl sm:text-3xl
                        drop-shadow-[0_0_14px_#f1fa8c]">
            ARCADE
          </p>
        </div>

        {/* Panel */}
        <div className="w-full bg-arcade-panel border-4 border-arcade-green
                        shadow-[0_0_24px_#50fa7b44] px-5 py-6 flex flex-col gap-5">

          {/* Domain notice */}
          <div className="border-2 border-arcade-cyan/40 bg-arcade-cyan/5 px-3 py-3 text-center">
            <p className="font-pixel text-arcade-cyan text-[9px] sm:text-[10px] leading-relaxed">
              BITS PILANI STUDENTS ONLY
            </p>
            <p className="font-mono text-arcade-gray text-[9px] mt-1 leading-relaxed">
              @pilani.bits-pilani.ac.in
            </p>
          </div>

          {/* Domain error */}
          {domainError && (
            <div className="border-2 border-arcade-red bg-arcade-red/10 px-3 py-3 text-center">
              <p className="font-pixel text-arcade-red text-[9px] sm:text-[10px] leading-relaxed">
                ACCESS DENIED
              </p>
              <p className="font-mono text-arcade-gray text-[9px] mt-1 leading-relaxed">
                Only @pilani.bits-pilani.ac.in<br />accounts are allowed.
              </p>
            </div>
          )}

          {/* Google sign-in button */}
          <button
            onClick={onSignInWithGoogle}
            className="w-full flex items-center justify-center gap-3
                       font-pixel text-[10px] sm:text-xs text-arcade-bg
                       bg-arcade-green border-4 border-arcade-green shadow-pixel
                       py-3 sm:py-4
                       hover:bg-arcade-yellow hover:border-arcade-yellow
                       active:translate-x-1 active:translate-y-1 active:shadow-none
                       transition-all"
          >
            {/* Google "G" mark */}
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            SIGN IN WITH GOOGLE
          </button>
        </div>

        <p className="font-pixel text-arcade-gray text-[8px] sm:text-[9px] text-center animate-blink">
          INSERT COIN © MINI ARCADE 2025
        </p>
      </div>
    </div>
  )
}

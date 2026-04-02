/**
 * skinRenderer.js
 * ───────────────
 * Shared face-drawing utility used by both game engines AND the skin selector
 * thumbnails. Always draws into a bounding box (fx, fy, fw, fh).
 */

// ── Helpers ──────────────────────────────────────────────────────────────────

function px(v, scale) { return Math.round(v * scale) }

function drawOvalFace(ctx, fx, fy, fw, fh, color) {
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.ellipse(fx + fw / 2, fy + fh / 2, fw / 2, fh / 2, 0, 0, Math.PI * 2)
  ctx.fill()

  // Subtle dark outline
  ctx.strokeStyle = 'rgba(0,0,0,0.35)'
  ctx.lineWidth   = Math.max(1, fw * 0.04)
  ctx.stroke()
}

// ── Expression face primitives (all coords proportional to fw/fh) ────────────

function drawHappy(ctx, fx, fy, fw, fh) {
  const s = fw / 40   // scale factor

  // Eyes — two pixel squares
  ctx.fillStyle = '#0f0f23'
  ctx.fillRect(fx + fw*0.28, fy + fh*0.30, px(6,s), px(7,s))
  ctx.fillRect(fx + fw*0.58, fy + fh*0.30, px(6,s), px(7,s))

  // Smile arc
  ctx.strokeStyle = '#0f0f23'
  ctx.lineWidth   = Math.max(2, px(3, s))
  ctx.beginPath()
  ctx.arc(fx + fw*0.5, fy + fh*0.52, fw*0.26, 0.15, Math.PI - 0.15)
  ctx.stroke()

  // Rosy cheeks
  ctx.fillStyle = 'rgba(255,100,100,0.3)'
  ctx.beginPath()
  ctx.ellipse(fx + fw*0.22, fy + fh*0.56, fw*0.1, fh*0.07, 0, 0, Math.PI*2)
  ctx.fill()
  ctx.beginPath()
  ctx.ellipse(fx + fw*0.78, fy + fh*0.56, fw*0.1, fh*0.07, 0, 0, Math.PI*2)
  ctx.fill()
}

function drawRage(ctx, fx, fy, fw, fh) {
  const s = fw / 40

  // Angry eyebrows (angled inward)
  ctx.strokeStyle = '#0f0f23'
  ctx.lineWidth   = Math.max(2, px(4, s))
  ctx.beginPath()
  ctx.moveTo(fx + fw*0.20, fy + fh*0.22)
  ctx.lineTo(fx + fw*0.44, fy + fh*0.30)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(fx + fw*0.80, fy + fh*0.22)
  ctx.lineTo(fx + fw*0.56, fy + fh*0.30)
  ctx.stroke()

  // Eyes — squinting (short wide rects)
  ctx.fillStyle = '#0f0f23'
  ctx.fillRect(fx + fw*0.24, fy + fh*0.33, px(10,s), px(5,s))
  ctx.fillRect(fx + fw*0.56, fy + fh*0.33, px(10,s), px(5,s))

  // Grim mouth (frown)
  ctx.strokeStyle = '#0f0f23'
  ctx.lineWidth   = Math.max(2, px(3, s))
  ctx.beginPath()
  ctx.arc(fx + fw*0.5, fy + fh*0.82, fw*0.22, Math.PI + 0.2, -0.2)
  ctx.stroke()

  // Vein lines on forehead
  ctx.strokeStyle = 'rgba(0,0,0,0.25)'
  ctx.lineWidth   = 1
  ctx.beginPath()
  ctx.moveTo(fx + fw*0.42, fy + fh*0.10)
  ctx.lineTo(fx + fw*0.46, fy + fh*0.17)
  ctx.lineTo(fx + fw*0.44, fy + fh*0.10)
  ctx.stroke()
}

function drawCool(ctx, fx, fy, fw, fh) {
  const s = fw / 40

  // Eyes behind shades (hint)
  ctx.fillStyle = '#0f0f23'
  ctx.fillRect(fx + fw*0.22, fy + fh*0.30, px(18,s), px(16,s))
  ctx.fillRect(fx + fw*0.56, fy + fh*0.30, px(18,s), px(16,s))

  // Sunglasses frames
  ctx.strokeStyle = '#1a1a1a'
  ctx.lineWidth   = Math.max(1, px(2, s))
  ctx.strokeRect(fx + fw*0.21, fy + fh*0.29, px(19,s), px(17,s))
  ctx.strokeRect(fx + fw*0.55, fy + fh*0.29, px(19,s), px(17,s))

  // Bridge
  ctx.strokeStyle = '#1a1a1a'
  ctx.lineWidth   = Math.max(1, px(2,s))
  ctx.beginPath()
  ctx.moveTo(fx + fw*0.44, fy + fh*0.35)
  ctx.lineTo(fx + fw*0.56, fy + fh*0.35)
  ctx.stroke()

  // Side arms
  ctx.beginPath()
  ctx.moveTo(fx + fw*0.20, fy + fh*0.35)
  ctx.lineTo(fx + fw*0.10, fy + fh*0.30)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(fx + fw*0.80, fy + fh*0.35)
  ctx.lineTo(fx + fw*0.90, fy + fh*0.30)
  ctx.stroke()

  // Smirk (right side only)
  ctx.strokeStyle = '#0f0f23'
  ctx.lineWidth   = Math.max(2, px(3,s))
  ctx.beginPath()
  ctx.arc(fx + fw*0.62, fy + fh*0.76, fw*0.15, Math.PI + 0.3, 0)
  ctx.stroke()
}

function drawSleepy(ctx, fx, fy, fw, fh) {
  const s = fw / 40

  // Heavy eyelids (dark rect over top half of eye area)
  ctx.fillStyle = '#0f0f23'
  ctx.fillRect(fx + fw*0.24, fy + fh*0.33, px(12,s), px(9,s))
  ctx.fillRect(fx + fw*0.58, fy + fh*0.33, px(12,s), px(9,s))

  // Slightly visible eyeballs underneath
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(fx + fw*0.25, fy + fh*0.38, px(10,s), px(5,s))
  ctx.fillRect(fx + fw*0.59, fy + fh*0.38, px(10,s), px(5,s))

  // Pupils
  ctx.fillStyle = '#0f0f23'
  ctx.fillRect(fx + fw*0.29, fy + fh*0.39, px(4,s), px(4,s))
  ctx.fillRect(fx + fw*0.63, fy + fh*0.39, px(4,s), px(4,s))

  // Sleepy wavy mouth
  ctx.strokeStyle = '#0f0f23'
  ctx.lineWidth   = Math.max(1, px(2,s))
  ctx.beginPath()
  ctx.moveTo(fx + fw*0.32, fy + fh*0.68)
  ctx.bezierCurveTo(
    fx + fw*0.41, fy + fh*0.64,
    fx + fw*0.59, fy + fh*0.72,
    fx + fw*0.68, fy + fh*0.68
  )
  ctx.stroke()

  // Zzz
  ctx.fillStyle = 'rgba(180,150,255,0.7)'
  ctx.font      = `bold ${Math.max(6, px(10,s))}px "Press Start 2P", monospace`
  ctx.textAlign = 'left'
  ctx.fillText('z', fx + fw*0.72, fy + fh*0.28)
  ctx.font      = `bold ${Math.max(4, px(7,s))}px "Press Start 2P", monospace`
  ctx.fillText('z', fx + fw*0.80, fy + fh*0.18)
}

function drawGhost(ctx, fx, fy, fw, fh) {
  const s = fw / 40

  // Override face shape — ghost has a specific shape: oval top + wavy bottom
  // We already drew the oval in drawOvalFace; add wavy bottom by drawing BG over it
  ctx.fillStyle = '#0f0f23'   // bg color
  const waveY = fy + fh*0.72
  ctx.fillRect(fx, waveY, fw, fh - (waveY - fy))
  // Wavy edge
  ctx.fillStyle = '#f8f8f2'
  for (let wx = 0; wx < fw; wx += fw/3) {
    ctx.beginPath()
    ctx.arc(fx + wx + fw/6, waveY, fw/6, 0, Math.PI, true)
    ctx.fill()
  }

  // Big oval dark eyes
  ctx.fillStyle = '#0f0f23'
  ctx.beginPath()
  ctx.ellipse(fx + fw*0.32, fy + fh*0.38, fw*0.13, fh*0.16, 0, 0, Math.PI*2)
  ctx.fill()
  ctx.beginPath()
  ctx.ellipse(fx + fw*0.68, fy + fh*0.38, fw*0.13, fh*0.16, 0, 0, Math.PI*2)
  ctx.fill()

  // Oval open mouth
  ctx.beginPath()
  ctx.ellipse(fx + fw*0.5, fy + fh*0.60, fw*0.14, fh*0.12, 0, 0, Math.PI*2)
  ctx.fill()
}

function drawDefaultThumb(ctx, fx, fy, fw, fh) {
  // Thumbnail for 'default' — a simple pixel art smiley in arcade green
  ctx.fillStyle = '#0f0f23'
  ctx.fillRect(fx, fy, fw, fh)
  ctx.fillStyle = '#50fa7b'
  ctx.beginPath()
  ctx.ellipse(fx + fw/2, fy + fh/2, fw/2 - 2, fh/2 - 2, 0, 0, Math.PI*2)
  ctx.fill()
  const s = fw / 40
  ctx.fillStyle = '#0f0f23'
  ctx.fillRect(fx + fw*0.30, fy + fh*0.34, px(6,s), px(7,s))
  ctx.fillRect(fx + fw*0.60, fy + fh*0.34, px(6,s), px(7,s))
  ctx.strokeStyle = '#0f0f23'
  ctx.lineWidth   = Math.max(2, px(3,s))
  ctx.beginPath()
  ctx.arc(fx + fw*0.5, fy + fh*0.54, fw*0.24, 0.15, Math.PI - 0.15)
  ctx.stroke()
}

// ── Public API ────────────────────────────────────────────────────────────────

/**
 * Draw a face into the bounding box (fx, fy, fw, fh).
 * Called by both the game engines and the skin selector thumbnails.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} fx  x of bounding box
 * @param {number} fy  y of bounding box
 * @param {number} fw  width
 * @param {number} fh  height
 * @param {{ type:string, color:string, expression:string }} skin
 * @param {HTMLImageElement|null} skinImg  preloaded image for 'image' skins
 * @param {boolean} thumbnail  if true, draws a self-contained thumbnail (adds bg)
 */
export function drawFace(ctx, fx, fy, fw, fh, skin, skinImg, thumbnail = false) {
  if (!skin) return

  if (skin.type === 'default') {
    if (thumbnail) drawDefaultThumb(ctx, fx, fy, fw, fh)
    return
  }

  if (skin.type === 'image') {
    if (!skinImg) {
      // Image not loaded yet — show a placeholder
      ctx.fillStyle = '#1a1a3e'
      ctx.beginPath()
      ctx.ellipse(fx+fw/2, fy+fh/2, fw/2, fh/2, 0, 0, Math.PI*2)
      ctx.fill()
      ctx.fillStyle = '#6272a4'
      ctx.font      = `${Math.max(7, fw*0.18)}px "Press Start 2P", monospace`
      ctx.textAlign = 'center'
      ctx.fillText('...', fx+fw/2, fy+fh/2 + fw*0.06)
      return
    }

    // Circular clip + draw image
    ctx.save()
    ctx.beginPath()
    ctx.ellipse(fx+fw/2, fy+fh/2, fw/2, fh/2, 0, 0, Math.PI*2)
    ctx.clip()
    try {
      ctx.drawImage(skinImg, fx, fy, fw, fh)
    } catch (_) {
      ctx.fillStyle = skin.color || '#f1fa8c'
      ctx.fill()
    }
    ctx.restore()

    // Pixel ring border
    ctx.strokeStyle = '#f1fa8c'
    ctx.lineWidth   = Math.max(2, fw * 0.05)
    ctx.beginPath()
    ctx.ellipse(fx+fw/2, fy+fh/2, fw/2 - 1, fh/2 - 1, 0, 0, Math.PI*2)
    ctx.stroke()
    return
  }

  if (skin.type === 'face') {
    drawOvalFace(ctx, fx, fy, fw, fh, skin.color)

    switch (skin.expression) {
      case 'happy':  drawHappy(ctx, fx, fy, fw, fh);  break
      case 'rage':   drawRage(ctx, fx, fy, fw, fh);   break
      case 'cool':   drawCool(ctx, fx, fy, fw, fh);   break
      case 'sleepy': drawSleepy(ctx, fx, fy, fw, fh); break
      case 'ghost':  drawGhost(ctx, fx, fy, fw, fh);  break
      default: break
    }
  }
}

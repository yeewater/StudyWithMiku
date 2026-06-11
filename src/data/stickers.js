export const STICKER_BASE_URL = '/sticker'
export const STICKER_FILES = {
  1: 'webp',
  2: 'webp',
  3: 'webp',
  4: 'jpg',
  5: 'webp',
  6: 'webp',
  7: 'webp',
  8: 'webp',
  9: 'webp',
  10: 'webp',
  11: 'jpg',
  12: 'gif',
  13: 'jpg',
  14: 'jpg',
  15: 'gif',
}
export const STICKER_IDS = Object.keys(STICKER_FILES).map(Number).sort((a, b) => a - b)
export const STICKER_PATTERN = /^\[sticker:(?:1[0-5]|[1-9])\]$/
export const getStickerId = (content) => {
  if (typeof content !== 'string') return null
  const match = content.match(STICKER_PATTERN)
  return match ? Number(match[1]) : null
}
export const buildStickerMessage = (id) => {
  if (!STICKER_FILES[id]) return ''
  return `[sticker:${id}]`
}
export const getStickerUrl = (id) => {
  if (!STICKER_FILES[id]) return ''
  return `${STICKER_BASE_URL}/${id}.${STICKER_FILES[id]}`
}

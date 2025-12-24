// 判断颜色是否rgb或者rgba
export function isRgbOrRgba(color: string) {
  return color.includes('rgb') || color.includes('rgba')
}

// 判断是否hex形式
export function isHex(color: string) {
  return color.includes('#')
}

// 把hex颜色转成rgb数值类型
export function hexToRgba(hex: string) {
  const r = Number.parseInt(hex.slice(1, 3), 16)
  const g = Number.parseInt(hex.slice(3, 5), 16)
  const b = Number.parseInt(hex.slice(5, 7), 16)

  return { r, g, b }
}
// 把rgb数组转化成r g b 数值
export function rgbToRgba(rgb: string) {
  const rgbArr = rgb.split('(')[1].split(')')[0].split(',')

  return { r: rgbArr[0], g: rgbArr[1], b: rgbArr[2] }
}

// 组成rgb颜色添加透明度
export function rgba(color: string, opacity: number) {
  opacity = opacity || 1
  let rgbaStr = ''
  // 判断是否是hex颜色
  if (isHex(color)) {
    const { r, g, b } = hexToRgba(color)
    rgbaStr = `rgba(${r},${g},${b},${opacity})`
  }
  else {
    const { r, g, b } = rgbToRgba(color)
    rgbaStr = `rgba(${r},${g},${b},${opacity})`
  }

  return rgbaStr
}

export function rgbToHex(color: string) {
  // 支持 rgb(r,g,b) / rgba(r,g,b,a)
  const normalized = color.replaceAll(/\s+/g, '').toLowerCase()
  const isRgba = normalized.startsWith('rgba(') && normalized.endsWith(')')
  const isRgb = normalized.startsWith('rgb(') && normalized.endsWith(')')
  if (!isRgb && !isRgba) {
    throw new Error('Invalid color format')
  }

  const inside = normalized.slice(isRgba ? 5 : 4, -1)
  const parts = inside.split(',')
  if (parts.length !== 3 && parts.length !== 4) {
    throw new Error('Invalid color format')
  }

  const r = Number.parseInt(parts[0], 10)
  const g = Number.parseInt(parts[1], 10)
  const b = Number.parseInt(parts[2], 10)
  const a = parts[3] !== undefined ? Number.parseFloat(parts[3]) : undefined
  if ([r, g, b].some(n => Number.isNaN(n))) {
    throw new Error('Invalid color format')
  }

  // 将 RGB 值转换为十六进制
  let hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`

  // 如果提供了 alpha 值，则将其转换为十六进制并附加到结果中
  if (a !== undefined && !Number.isNaN(a)) {
    const alpha = Math.round(a * 255)
    const alphaHex = alpha.toString(16).padStart(2, '0').toUpperCase()
    hex += alphaHex
  }

  return hex
}

import { describe, expect, it, vi } from 'vitest'
import { selectCard } from '@/utils'

describe('utils/selectCard', () => {
  it('should return a valid index within range (including last index)', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.999999)
    const idx = selectCard([], 10, 0)
    expect(idx).toBe(9)
    vi.restoreAllMocks()
  })

  it('should avoid indices already used', () => {
    const seq = [0.0, 0.0, 0.5] // 先命中 0（冲突），再命中 0（冲突），最后命中 5
    let i = 0
    vi.spyOn(Math, 'random').mockImplementation(() => seq[Math.min(i++, seq.length - 1)])
    const idx = selectCard([0], 10, 0)
    expect(idx).toBe(5)
    vi.restoreAllMocks()
  })
})

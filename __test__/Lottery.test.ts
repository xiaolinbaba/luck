import { describe, expect, it } from 'vitest'
import { getDefaultPersonList } from '@/store/data'

describe('store/data default person generator', () => {
  it('should generate persons with hx + 6 digits uid and required fields', () => {
    const list = getDefaultPersonList(20)
    expect(list).toHaveLength(20)
    for (const p of list) {
      expect(p.uid).toMatch(/^hx\d{6}$/)
      expect(p.name).toBeTruthy()
      expect(p.department).toBeTruthy()
      expect(p.identity).toBeTruthy()
      expect(p.avatar).toMatch(/^https:\/\/randomuser\.me\/api\/portraits\/(men|women)\/\d+\.jpg$/)
    }
  })
})

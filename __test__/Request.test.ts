import { describe, expect, it, vi } from 'vitest'

vi.mock('axios', () => {
  const request = vi.fn(async () => ({ data: { ok: true } }))
  const create = vi.fn(() => ({
    interceptors: {
      request: { use: vi.fn() },
      response: { use: vi.fn() },
    },
    request,
  }))
  return {
    default: { create },
    create,
  }
})

import request from '@/api/request'

describe('api/request', () => {
  it('should be a function and return mocked data', async () => {
    const res = await request<{ ok: boolean }>({ url: '/test', method: 'GET' })
    expect(res.ok).toBe(true)
  })
})

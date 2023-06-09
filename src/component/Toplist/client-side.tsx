'use client'

// Components
import { useEffect, useState } from 'react'
import { ToplistLayout } from './layout'

// Constants
import { API_BASE } from '../../constants'

// Types
import { APIResponse } from '@/types'

export const ToplistClientSide = () => {
  const [data, setData] = useState<APIResponse>()

  useEffect(() => {
    (async () => {
      const res = await fetch(`${API_BASE}/prod/results`)
      const json = await res.json()
      const body = JSON.parse(json.body)
      setData(body)
    })()
  }, [])

  if (!data) return null
  return <ToplistLayout content={data.contents[0]}/>
}

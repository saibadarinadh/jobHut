'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import * as gtag from '../lib/gtag'

export function usePageViews() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
    gtag.pageview(url)
  }, [pathname, searchParams])
}


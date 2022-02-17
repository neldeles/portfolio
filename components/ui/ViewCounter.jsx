import { useEffect } from 'react'
import useSWR from 'swr'
import fetcher from '@/lib/fetcher'

const ViewCounter = ({ slug }) => {
  const { data } = useSWR(`/api/views/${slug}`, fetcher)
  const views = Number(data ? data.total : 0)

  useEffect(() => {
    const registerView = () => fetch(`/api/views/${slug}`, { method: 'POST' })
    registerView()
  }, [slug])

  return `${views > 0 ? views.toLocaleString() : '---'} views`
}

export default ViewCounter

'use client'
import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  if (!show) return null
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 rounded-full px-3 py-2 shadow-lg border bg-white/90 dark:bg-gray-800/90 backdrop-blur text-sm"
      aria-label="Volver arriba"
    >
      ↑ Arriba
    </button>
  )
}

'use client'

import { useEffect, useState } from 'react'

type TocItem = { id: string; text: string; level: number }

export default function TOC() {
  const [items, setItems] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  // lee encabezados del artículo renderizado
  useEffect(() => {
    const container = document.querySelector('article')
    if (!container) return
    const hs = Array.from(
      container.querySelectorAll('h2, h3')
    ) as HTMLHeadingElement[]
    const toc = hs
      .filter(h => h.id)
      .map(h => ({
        id: h.id,
        text: h.innerText.replace('#', '').trim(),
        level: h.tagName === 'H2' ? 2 : 3,
      }))
    setItems(toc)
  }, [])

  // resalta el heading activo con IntersectionObserver
  useEffect(() => {
    const hs = Array.from(document.querySelectorAll('article h2, article h3'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = (e.target as HTMLElement).id
            if (id) setActiveId(id)
          }
        })
      },
      { rootMargin: '0px 0px -70% 0px', threshold: 0.1 }
    )
    hs.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [items])

  if (!items.length) return null

  return (
    <nav className="hidden xl:block sticky top-24 max-h-[calc(100vh-6rem)] overflow-auto pr-4">
      <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">Contenido</p>
      <ul className="space-y-1 text-sm">
        {items.map((it) => (
          <li key={it.id} className={it.level === 3 ? 'pl-4' : ''}>
            <a
              href={`#${it.id}`}
              className={`block py-1 hover:underline ${
                activeId === it.id ? 'text-indigo-600 dark:text-indigo-400 font-medium' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {it.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

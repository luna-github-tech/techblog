import { allPosts } from "contentlayer/generated"

// Ordena por fecha desc
export function getAllPostsSorted() {
  return [...allPosts].sort(
    (a, b) => +new Date(b.date) - +new Date(a.date)
  )
}

export function getFeaturedPost() {
  return getAllPostsSorted().find(p => p.featured)
}

export function getLatestPosts(limit = 6) {
  return getAllPostsSorted().slice(0, limit)
}

export function getPopularPosts(limit = 3) {
  return getAllPostsSorted().filter(p => p.popular).slice(0, limit)
}

export function getCategoriesCount() {
  // a partir de "category"
  const counts: Record<string, number> = {}
  for (const p of allPosts) {
    const cat = p.category || "General"
    counts[cat] = (counts[cat] || 0) + 1
  }
  return Object.entries(counts)
    .sort((a, b) => a[0].localeCompare(b[0])) // alfabético
}

export function getAllTags() {
  const set = new Set<string>()
  for (const p of allPosts) (p.tags || []).forEach(t => set.add(t))
  return Array.from(set).sort()
}

import { allPosts } from "contentlayer/generated"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  const tags = new Set<string>()
  for (const p of allPosts) (p.tags || []).forEach(t => tags.add(t))
  return Array.from(tags).map(t => ({ slug: encodeURIComponent(t) }))
}

export default function TagPage({ params }: { params: { slug: string } }) {
  const tag = decodeURIComponent(params.slug)
  const posts = allPosts.filter(p => (p.tags || []).includes(tag))
  if (posts.length === 0) return notFound()

  posts.sort((a,b) => +new Date(b.date) - +new Date(a.date))

  return (
    <main className="max-w-3xl mx-auto py-10 space-y-6">
      <h1 className="text-3xl font-bold">Tag: {tag}</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map(p => (
          <li key={p._id} className="border rounded-lg overflow-hidden">
            <Link href={p.url} className="block">
              <div className="relative h-40">
                <Image src={p.cover || "/images/placeholder.jpg"} alt={p.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm opacity-70">{new Date(p.date).toLocaleDateString()}</p>
                {p.summary && <p className="text-sm mt-1 line-clamp-3">{p.summary}</p>}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

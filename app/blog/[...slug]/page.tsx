import { allPosts } from "contentlayer/generated"
import { notFound } from "next/navigation"
import { useMDXComponent } from "next-contentlayer2/hooks"
import Image from "next/image"

export async function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p._raw.flattenedPath.split("/") }))
}

export default function PostPage({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.join("/")
  const post = allPosts.find((p) => p._raw.flattenedPath === slug)
  if (!post) return notFound()

  const MDX = useMDXComponent(post.body.code)

  return (
    <article className="prose mx-auto py-10">
      {post.cover && (
        <div className="relative w-full h-64 mb-6">
          <Image src={post.cover} alt={post.title} fill className="object-cover rounded-xl" />
        </div>
      )}
      <h1>{post.title}</h1>
      <p><small>{post.category ?? "General"} • {new Date(post.date).toLocaleDateString()}</small></p>
      <MDX />
    </article>
  )
}

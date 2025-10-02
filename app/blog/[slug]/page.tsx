import { allPosts } from 'contentlayer/generated'        // <- OJO: 'contentlayer', no 'contentlayer2'
import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer2/hooks' // <- hooks de la versión 2
import { MDXComponents } from '../../components/MDXComponents'
import BackToTop from '../../components/BackToTop'
import TOC from '../../components/TOC'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }))
}

export default function PostPage({ params }: Props) {
  const post = allPosts.find((p) => p.slug === params.slug)

  if (!post) return notFound()
  const MDX = useMDXComponent(post.body.code)
  return (
   <div className="mx-auto max-w-6xl px-4 py-8 grid grid-cols-1 xl:grid-cols-[1fr_280px] gap-10">
   {/* Contenido */}
    <article className="prose prose-slate dark:prose-invert lg:prose-lg">
       <h1 className="mb-2">{post.title}</h1>

        {/* 🕓 Aquí va tu bloque */}
      <p className="text-sm opacity-70">
        {new Date(post.date).toLocaleDateString('es-MX')}
        {(post as any).readingTimeMinutes
          ? ` · ${(post as any).readingTimeMinutes} min`
          : null}
      </p>

      {post.cover && (
        <img src={post.cover} alt={post.title} className="rounded-xl my-6 w-full" />
      )}
       
       {/* ⬇️ Aquí pasamos los componentes personalizados */}
      <MDX components={MDXComponents} />
    </article>
     
     
       {/* TOC */}
      <TOC />

      {/* Back to top */}
      <BackToTop />


    </div>
    
  )
}

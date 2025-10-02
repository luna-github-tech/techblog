import Image from "next/image";
import Link from "next/link";
import { posts } from "../../lib/posts";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return <div className="container mx-auto px-4 py-8">Post no encontrado.</div>;

  return (
    <main className="container mx-auto px-4 py-8">
      <article className="bg-white rounded-lg shadow-sm overflow-hidden">
        <Image src={post.image} alt={post.title} width={1200} height={600} className="w-full h-80 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <div className="mt-2 text-sm text-gray-500 flex items-center gap-3">
            <span><i className="far fa-clock" aria-hidden="true" /> {new Date(post.date).toLocaleDateString()}</span>
            <Link href={`/category/${post.category}`} className="hover:text-blue-600">
              <i className="far fa-folder-open" aria-hidden="true" /> {post.category}
            </Link>
          </div>
          <p className="mt-4 text-gray-700 leading-relaxed">{post.excerpt}</p>
          <p className="mt-3 text-gray-600">
            {/* Contenido de ejemplo — aquí iría tu MDX o CMS */}
            Este es el contenido del artículo. Puedes integrar MDX o un CMS más adelante.
          </p>
        </div>
      </article>
    </main>
  );
}

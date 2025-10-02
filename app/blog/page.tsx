// app/blog/page.tsx
import { allPosts } from "contentlayer/generated";
import PostCard from "../components/PostCard";
import Pagination from "../components/Pagination";

const PER_PAGE = 6;

export default function BlogPage({ searchParams }: { searchParams: { page?: string } }) {
  const page = Math.max(1, Number(searchParams?.page ?? 1));
  const posts = [...allPosts].sort((a, b) => +new Date(b.date) - +new Date(a.date));
  const pageCount = Math.ceil(posts.length / PER_PAGE);
  const slice = posts.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">📰 Todos los artículos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {slice.map((p) => (
          <PostCard key={p._id} href={p.url} title={p.title} date={p.date} summary={p.summary} cover={p.cover} category={p.category} tags={p.tags} />
        ))}
      </div>

      <Pagination basePath="/blog" page={page} pageCount={pageCount} />

     <p className="text-center mt-4 text-gray-500">
    {pageCount} página(s) • {posts.length} artículos totales
  </p>
    </main>
  );
}

// (Opcional SEO): añade <link rel="prev/next"> en el head si quieres

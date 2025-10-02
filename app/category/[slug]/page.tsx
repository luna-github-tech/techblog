// app/category/[slug]/page.tsx
import { allPosts } from "contentlayer/generated";
import PostCard from "../../components/PostCard";
import Pagination from "../../components/Pagination";
import { slugify } from "../../lib/slug";

const PER_PAGE = 6;

export default function CategoryPage({
  params,
  searchParams,
}: { params: { slug: string }; searchParams: { page?: string } }) {
  const page = Math.max(1, Number(searchParams?.page ?? 1));
  const { slug } = params;

  const filtered = allPosts
    .filter((p) => p.category && slugify(p.category) === slug)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

  const pageCount = Math.ceil(filtered.length / PER_PAGE);
  const slice = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const displayName = filtered[0]?.category || slug.replace(/-/g, " ");

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">📂 Categoría: {displayName}</h1>

      {slice.length === 0 ? (
        <p className="opacity-70">No hay artículos en esta categoría.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {slice.map((p) => (
            <PostCard
              key={p._id}
              href={p.url}
              title={p.title}
              date={p.date}
              summary={p.summary}
              cover={p.cover}
              category={p.category}
              tags={p.tags}
            />
          ))}
        </div>
      )}

      <Pagination basePath={`/category/${slug}`} page={page} pageCount={pageCount} />
    </main>
  );
}

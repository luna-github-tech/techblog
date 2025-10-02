import { allPosts, type Post } from "contentlayer/generated";
import PostCard from "../components/PostCard";
import SearchBox from "../components/SearchBox";

type SearchParams = Record<string, string | string[] | undefined>;

function matches(post: Post, q: string) {
  const hay = (s?: string) => (s ?? "").toLowerCase().includes(q);
  const tags = Array.isArray(post.tags) ? post.tags : [];
  return (
    hay(post.title) ||
    hay(post.summary) ||
    hay(post.category) ||
    tags.some((t) => hay(t))
  );
}

export default function SearchPage({
  searchParams,
}: {
  searchParams?: SearchParams;
}) {
  const rawParam = Array.isArray(searchParams?.q)
    ? searchParams?.q[0]
    : searchParams?.q;
  const raw = (rawParam ?? "").trim();
  const q = raw.toLowerCase();

  const posts = [...allPosts].sort(
    (a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const results = q ? posts.filter((p) => matches(p, q)) : [];

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-2xl font-bold">🔎 Buscar</h1>

      {/* buscador arriba para refinar */}
      <div className="max-w-md">
        <SearchBox placeholder="Escribe y presiona Enter..." />
      </div>

      {!raw && (
        <p className="text-gray-600">
          Escribe un término y presiona Enter para buscar.
        </p>
      )}

      {raw && (
        <p className="text-gray-600">
          Resultados para <strong>“{raw}”</strong>: {results.length}
        </p>
      )}

      {raw && results.length === 0 && (
        <p className="opacity-70">No encontramos artículos que coincidan.</p>
      )}

      {results.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {results.map((p) => (
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
    </main>
  );
}

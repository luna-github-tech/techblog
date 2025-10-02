import { allPosts } from "contentlayer/generated";
import PostCard from "../components/PostCard";
import SearchBox from "../components/SearchBox";

function matches(post: any, q: string) {
  const hay = (s?: string) => (s || "").toLowerCase().includes(q);
  return (
    hay(post.title) ||
    hay(post.summary) ||
    hay(post.category) ||
    (post.tags || []).some((t: string) => hay(t))
  );
}

export default function SearchPage({ searchParams }: { searchParams?: { q?: string } }) {
  const raw = (searchParams?.q || "").trim();
  const q = raw.toLowerCase();

  const posts = [...allPosts].sort((a, b) => +new Date(b.date) - +new Date(a.date));
  const results = q ? posts.filter((p) => matches(p, q)) : [];

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-2xl font-bold">🔎 Buscar</h1>

      {/* buscador arriba para refinar */}
      <div className="max-w-md">
        <SearchBox placeholder="Escribe y presiona Enter..." />
      </div>

      {!raw && (
        <p className="text-gray-600">Escribe un término y presiona Enter para buscar.</p>
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

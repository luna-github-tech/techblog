// app/components/Pagination.tsx
"use client";
import Link from "next/link";

export default function Pagination({
  basePath, page, pageCount,
}: { basePath: string; page: number; pageCount: number }) {
  if (pageCount <= 1) return null;

  const prev = page > 1 ? page - 1 : null;
  const next = page < pageCount ? page + 1 : null;

  const makeHref = (p: number) => `${basePath}?page=${p}`;

  return (
    <nav className="flex items-center justify-center gap-2 mt-8" aria-label="Paginación">
      <Link
        aria-disabled={!prev}
        href={prev ? makeHref(prev) : "#"}
        className={`px-3 py-1 rounded border ${prev ? "hover:bg-gray-50" : "opacity-40 pointer-events-none"}`}
      >
        ← Anterior
      </Link>

      {/* Números (hasta 7) */}
      {Array.from({ length: pageCount }).map((_, i) => {
        const p = i + 1;
        const active = p === page;
        // compresión simple si hay muchas páginas
        if (pageCount > 7) {
          const near = Math.abs(p - page) <= 1;
          const edges = p === 1 || p === pageCount;
          if (!near && !edges) return (p === 2 || p === pageCount - 1) ? <span key={p}>…</span> : null;
        }
        return (
          <Link
            key={p}
            href={makeHref(p)}
            aria-current={active ? "page" : undefined}
            className={`px-3 py-1 rounded border ${active ? "bg-blue-600 text-white border-blue-600" : "hover:bg-gray-50"}`}
          >
            {p}
          </Link>
        );
      })}

      <Link
        aria-disabled={!next}
        href={next ? makeHref(next) : "#"}
        className={`px-3 py-1 rounded border ${next ? "hover:bg-gray-50" : "opacity-40 pointer-events-none"}`}
      >
        Siguiente →
      </Link>
    </nav>
  );
}

"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function SearchBox({ placeholder = "Buscar" }: { placeholder?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [q, setQ] = useState(searchParams?.get("q") ?? "");

  // enviar al presionar Enter
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const query = q.trim();
      router.push(query ? `/search?q=${encodeURIComponent(query)}` : "/search");
    }
  };

  // botón de limpiar
  const clear = () => {
    setQ("");
    inputRef.current?.focus();
  };

  return (
    <div className="relative">
      <span className="absolute left-3 top-2 text-sm text-gray-500">
        <i className="fas fa-search" aria-hidden="true" />
      </span>
      <input
        ref={inputRef}
        type="text"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        className="pl-10 pr-8 py-2 text-sm rounded-3xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-500"
        aria-label="Buscar artículos"
      />
      {q && (
        <button
          aria-label="Limpiar búsqueda"
          className="absolute right-2 top-1.5 text-gray-400 hover:text-gray-600"
          onClick={clear}
        >
          <i className="fas fa-times" />
        </button>
      )}
    </div>
  );
}

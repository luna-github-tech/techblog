// app/components/SearchBox.tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  placeholder?: string;
  initialQuery?: string;
};

export default function SearchBox({ placeholder = "Buscar...", initialQuery = "" }: Props) {
  const router = useRouter();
  const [value, setValue] = useState<string>(initialQuery);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = value.trim();
    router.push(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="search"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="flex-1 rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Buscar artículos"
      />
      <button
        type="submit"
        className="rounded-xl bg-blue-600 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-700"
      >
        Buscar
      </button>
    </form>
  );
}

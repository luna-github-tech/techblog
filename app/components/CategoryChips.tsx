// app/components/CategoryChips.tsx
import Link from "next/link"

type CategoryObj = { slug: string; label?: string; name?: string }
type Props = {
  // Puedes pasarle tags (string[]) o categories (objetos)
  tags?: string[]
  categories?: CategoryObj[]
  // basePath controla a dónde enlaza: /tag o /category
  basePath?: "/tag" | "/category"
  className?: string
}

export default function CategoryChips({
  tags,
  categories,
  basePath = "/tag",
  className = "",
}: Props) {
  // Normaliza a una lista de { slug, label }
  const items =
    (categories && categories.length
      ? categories.map(c => ({
          slug: c.slug ?? encodeURIComponent((c.label ?? c.name ?? "").toLowerCase()),
          label: c.label ?? c.name ?? c.slug,
        }))
      : (tags ?? []).map(t => ({
          slug: encodeURIComponent(t),
          label: t,
        }))
    ) ?? []

  if (items.length === 0) return null

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((it) => (
        <Link
          key={it.slug}
          href={`${basePath}/${it.slug}`}
          className="text-xs px-3 py-1 rounded-full border hover:bg-gray-50"
        >
          {it.label}
        </Link>
      ))}
    </div>
  )
}

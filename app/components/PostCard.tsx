// app/components/PostCard.tsx
import Image from "next/image"
import Link from "next/link"
import CategoryChips from "./CategoryChips"

type Props = {
  href: string
  title: string
  date?: string
  summary?: string
  cover?: string
  category?: string
  tags?: string[]
  className?: string
}

export default function PostCard({
  href,
  title,
  date,
  summary,
  cover,
  category,
  tags,
  className = "",
}: Props) {
  const formattedDate = date ? new Date(date).toLocaleDateString() : undefined
  const imageSrc = cover || "/images/placeholder.jpg"

  return (
    <article className={`bg-white rounded-lg shadow-sm overflow-hidden ${className}`}>
      <Link href={href} className="block">
        <div className="relative w-full h-40">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </Link>

      <div className="p-4">
        <Link href={href} className="block hover:underline">
          <h3 className="text-lg font-semibold">{title}</h3>
        </Link>

        <div className="text-xs opacity-70 mt-1">
          {category ?? "General"}{formattedDate ? ` • ${formattedDate}` : ""}
        </div>

        {summary && <p className="text-sm mt-2 line-clamp-3">{summary}</p>}

        {tags && tags.length > 0 && (
          <div className="mt-3">
            {/* Reutiliza CategoryChips como chips de tags */}
            <CategoryChips tags={tags} basePath="/tag" />
          </div>
        )}
      </div>
    </article>
  )
}

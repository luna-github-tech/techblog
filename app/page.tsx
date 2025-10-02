// app/page.tsx
import Image from "next/image"
import Link from "next/link"
import { slugify } from "./lib/slug"



// TUS componentes existentes:
import MobileSidebar from "./components/MobileSidebar"
import SocialPlugin from "./components/SocialPlugin"
import SubscribeCard from "./components/SubscribeCard"
import AboutCard from "./components/AboutCard"
import AboutBlog from "./components/AboutBlog"
import PostCard from "./components/PostCard"
import CategoryChips from "./components/CategoryChips"

import { allPosts } from 'contentlayer/generated'

// DATA desde contentlayer:
import {
  getFeaturedPost,
  getLatestPosts,
  getPopularPosts,
  getCategoriesCount,
  getAllTags,
} from "./lib/posts"

export default function Page() {
  const featured = getFeaturedPost()
  const latest = getLatestPosts(6)          // “Últimos artículos”
  const popular = getPopularPosts(3)        // sidebar derecha
  const categoriesCount = getCategoriesCount() // sidebar izq
  const tags = getAllTags()                 // tags de la derecha
  
   // 🔹 Ordena los posts por fecha descendente
  const posts = [...allPosts].sort(
    (a, b) => +new Date(b.date) - +new Date(a.date)
  )


  return (
    <div className="container mx-auto px-4 mt-6 md:mt-8">

      {/* Layout de 3 columnas como en tu screenshot */}
      <div className="grid grid-cols-12 gap-6">

       {/* Columna izquierda (solo visible en pantallas grandes) */}
<aside className="hidden lg:block lg:col-span-3 space-y-6">
          


         {/* Categorías con conteo */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
         
            <h3 className="font-semibold mb-3 text-blue-600">Categorías</h3>
           <ul className="space-y-2 text-sm">
  {categoriesCount.map(([name, count]) => {
    const slug = slugify(name)
    return (
      <li key={name} className="flex justify-between">
        <Link
          href={`/category/${slug}`}
          className="text-blue-600 hover:underline"
          title={`Ver artículos de ${name}`}
        >
          {name}
        </Link>
        <span className="opacity-60">({count})</span>
      </li>
    )
  })}
</ul>
          </div>

          {/* Sobre el blog */}
          <AboutBlog />

          {/* Recursos recomendados (puedes dejar estático) */}
          {/* ... */}
        </aside>

        {/* Columna central (Hero, destacados, últimos) */}
        <main className="col-span-12 lg:col-span-6 space-y-6">
        
          {/* HERO destacado */}
          {featured && (
            <article className="bg-white border border-gray-200 border rounded-xl overflow-hidden">
            
              <Link href={featured.url}>
                <div className="relative h-56 md:h-64 w-full">
                  <Image
                    src={featured.cover || "/images/placeholder.jpg"}
                    alt={featured.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </Link>
              <div className="p-4">
                <Link href={featured.url} className="text-2xl font-bold hover:underline">
                  {featured.title}
                </Link>
                <p className="text-sm opacity-70 mt-1">
                  {/* categoría + fecha */}
                  {featured.category ?? "General"} • {new Date(featured.date).toLocaleDateString()}
                </p>
                {featured.summary && <p className="mt-2">{featured.summary}</p>}

                {/* Chips de categorías destacadas (si quieres usar tags aquí) */}
                <div className="mt-3">
                  <CategoryChips tags={featured.tags || []} />
                </div>
              </div>
            </article>
          )}

          {/* Últimos artículos (grid 2xN como en tu screenshot) */}
          <section>
            <h3 className="font-semibold mb-3">Últimos artículos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {latest.map((p) => (
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
          </section>

          {/* “Tutoriales populares” puedes reutilizar otra query o tags específicas */}
          {/* ... */}
        </main>

        {/* Columna derecha (social, suscripción, about, popular posts, tags) */}
        <aside className="bg-blue-50 border border-blue-100 rounded-lg p-4 col-span-12 lg:col-span-3 space-y-6">
          <SocialPlugin />
          <SubscribeCard />
          {/* Acerca de mi (si quieres duplicar o dejar uno solo) */}
          {/* <AboutCard /> */}

          {/* Popular posts */}
          <div className="bg-white border border-gray-200 border rounded-lg p-4">
            <h3 className="font-semibold mb-3">Popular Posts</h3>
            <ul className="space-y-3">
              {popular.map((p) => (
                <li key={p._id} className="flex gap-3">
                  <Link href={p.url} className="flex-shrink-0">
                    <Image
                      src={p.cover || "/images/placeholder.jpg"}
                      alt={p.title}
                      width={80}
                      height={60}
                      className="rounded object-cover"
                    />
                  </Link>
                  <div className="text-sm">
                    <Link href={p.url} className="font-medium hover:underline">
                      {p.title}
                    </Link>
                    <div className="opacity-60">{new Date(p.date).toLocaleDateString()}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="bg-white border border-gray-200 border rounded-lg p-4">
            <h3 className="font-semibold mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map(t => (
                <Link
                  key={t}
                  href={`/tag/${encodeURIComponent(t)}`} // (si luego implementas rutas por tag)
                  className="text-xs px-3 py-1 rounded-full border hover:bg-gray-50"
                >
                  {t}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

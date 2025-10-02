// app/blog/[slug]/page.tsx
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import MDXComponents from "../../components/MDXComponents"; // default import
import BackToTop from "../../components/BackToTop";
import TOC from "../../components/TOC";
import Image from "next/image";

type Props = { params: { slug: string } };

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return allPosts.map((p) => ({ slug: p.slug }));
}

export default function PostPage({ params }: Props) {
  // 1) Busca el post ANTES de usar hooks
  const post = allPosts.find(
    (p) => p.slug === params.slug || p.slugAsParams === params.slug
  );

  if (!post) {
    notFound();
  }

  // 2) Hook SIEMPRE en el mismo orden
  const MDX = useMDXComponent(post.body.code);

  // 3) Evitar `any` para readingTimeMinutes
  const readingTimeMinutes =
    typeof (post as Record<string, unknown>).readingTimeMinutes === "number"
      ? (post as Record<string, unknown>).readingTimeMinutes
      : undefined;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 grid grid-cols-1 xl:grid-cols-[1fr_280px] gap-10">
      {/* Contenido */}
      <article className="prose prose-slate dark:prose-invert lg:prose-lg">
        <h1 className="mb-2">{post.title}</h1>

        <p className="text-sm opacity-70">
          {new Date(post.date).toLocaleDateString("es-MX")}
          {typeof readingTimeMinutes === "number" ? ` · ${readingTimeMinutes} min` : null}
        </p>

        {post.cover && (
          <Image
            src={post.cover}
            alt={post.title}
            width={1200}
            height={630}
            className="rounded-xl my-6 w-full h-auto"
            priority
          />
        )}

        {/* MDX con componentes tipados */}
        <MDX components={MDXComponents} />
      </article>

      {/* TOC */}
      <TOC />

      {/* Back to top */}
      <BackToTop />
    </div>
  );
}

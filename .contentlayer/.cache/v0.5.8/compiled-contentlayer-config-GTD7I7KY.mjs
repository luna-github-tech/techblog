// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import remarkGfm from "remark-gfm";
import remarkSlug from "remark-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "posts/**/*.mdx",
  // dentro de content/posts/
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    summary: { type: "string", required: false },
    cover: { type: "string", required: false },
    category: { type: "string", required: false },
    tags: { type: "list", of: { type: "string" }, required: false },
    featured: { type: "boolean", required: false },
    popular: { type: "boolean", required: false },
    // seguimos con A) tolerante: string
    readingTime: { type: "string", required: false }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/^posts\//, "")
    },
    url: {
      type: "string",
      resolve: (doc) => `/blog/${doc._raw.flattenedPath.replace(/^posts\//, "")}`
    },
    readingTimeMinutes: {
      type: "number",
      resolve: (doc) => {
        const raw = (doc.readingTime ?? "").toString();
        const n = parseInt(raw.replace(/\D/g, ""), 10);
        return Number.isFinite(n) && n > 0 ? n : 1;
      }
    }
  }
}));
var contentlayer_config_default = makeSource({
  // ⬅️ MUY IMPORTANTE: limita el scope a /content
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm, remarkSlug],
    rehypePlugins: [[rehypeAutolinkHeadings, { behavior: "append" }]]
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-GTD7I7KY.mjs.map

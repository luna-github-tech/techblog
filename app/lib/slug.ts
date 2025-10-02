// app/lib/slug.ts
export function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize('NFD') // quita acentos
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-') // reemplaza espacios y símbolos por guiones
    .replace(/(^-|-$)/g, '');    // remueve guiones al inicio o fin
}

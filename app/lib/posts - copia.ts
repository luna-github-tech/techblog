export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  featured?: boolean;
  popular?: boolean;
};

export const posts: Post[] = [
  {
    slug: "automatiza-respaldos-sqlserver-aws-s3",
    title: "Automatiza respaldos de SQL Server con AWS S3",
    excerpt:
      "Crea un sistema de backups automático con Node.js y S3, incluyendo rotación y verificación.",
    image: "/images/img-12.jpg",
    date: "2025-06-15",
    category: "technology",
    featured: true,
    popular: true,
  },
  {
    slug: "ml-ventas-cafeterias",
    title: "Machine Learning aplicado a ventas en cafeterías",
    excerpt:
      "Cómo detectar horas muertas y optimizar promociones con datos reales.",
    image: "/images/img-7.jpg",
    date: "2025-06-05",
    category: "business",
    featured: true,
  },
  {
    slug: "etl-basico-pos",
    title: "ETL básico para puntos de venta",
    excerpt:
      "Extracción, transformación y carga de tickets hacia un datalake económico.",
    image: "/images/img-6.jpg",
    date: "2025-05-28",
    category: "learn",
    popular: true,
  },
  {
    slug: "api-reportes-diarios",
    title: "API para reportes diarios con gráficos",
    excerpt:
      "Servicio ligero que genera KPIs y los envía por correo cada mañana.",
    image: "/images/img-5.jpg",
    date: "2025-05-10",
    category: "technology",
  },
  {
    slug: "mejores-practicas-aws-costos",
    title: "Mejores prácticas para bajar costos en AWS",
    excerpt:
      "Instancias spot, almacenamiento inteligente y alertas preventivas.",
    image: "/images/img-11.jpg",
    date: "2025-04-20",
    category: "business",
    popular: true,
  },
  {
    slug: "monitor-pos-tiempo-real",
    title: "Monitoreo de POS en tiempo real",
    excerpt:
      "Websockets + Redis para detectar caídas y recuperarlas automáticamente.",
    image: "/images/img-9.jpg",
    date: "2025-04-05",
    category: "technology",
    featured: true,
  },
];

export const categories = [
  { slug: "technology", label: "Technology" },
  { slug: "business", label: "Business" },
  { slug: "learn", label: "Learn" },
  { slug: "food", label: "Food" },
];

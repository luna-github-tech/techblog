import Image from "next/image";

export default function AboutBlogCard() {
  return (
    <div className="w-full mt-8 bg-white shadow-sm rounded-sm p-4 text-sm">
      <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">
        Acerca del Blog
      </h3>

      <div className="flex items-start gap-3">
        <Image
          src="/images/sobreelblog.png" // 📸 agrega una imagen representativa del blog en public/images/blog-cover.jpg
          alt="Blog de Tecnología"
          width={60}
          height={60}
          className="rounded object-cover"
        />
        <div>
          <p className="text-gray-600 leading-relaxed">
            Este <strong>blog técnico</strong> está diseñado para ayudarte a dominar los sistemas de punto de venta y otras herramientas tecnológicas esenciales, con guías paso a paso y soluciones prácticas para tu día a día.
          
          </p>
         
        </div>
      </div>

     
    </div>
  );
}

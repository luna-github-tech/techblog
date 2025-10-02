// app/components/SocialPlugin.tsx
export default function SocialPlugin() {
  const icons = [
     "fab fa-linkedin-in",
  ];

  return (
    <div className="w-full bg-white shadow-sm rounded-sm p-4">
      <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">
        Social Plugin
      </h3>
      <div className="flex gap-2">
        {icons.map((icon, i) => (
          <a
            key={i}
            href="https://www.linkedin.com/in/juanluna-webdeveloper/"
            className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800"
          >
            <i className={icon} />
          </a>
        ))}
      </div>
    </div>
  );
}

"use client";
import Script from "next/script";

export default function SubscribeCard() {
  return (
    <div className="border rounded-xl p-5 bg-white shadow-md">
      <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
        <i className="fas fa-envelope text-blue-500" /> Suscríbete
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        Recibe nuevos artículos y guías directamente en tu correo.
      </p>

     
  <div className="subscribe-ml-wrapper overflow-hidden">
    <div className="ml-embedded" data-form="ZBsr9F"></div>
 </div>

      {/* Script de integración */}
      <Script id="mailerlite-universal" strategy="lazyOnload">
        {`
          (function(w,d,e,u,f,l,n){
            w[f]=w[f]||function(){(w[f].q=w[f].q||[]).push(arguments);},
            l=d.createElement(e),l.async=1,l.src=u,
            n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);
          })(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
          ml('account', '1830209');
        `}
      </Script>
    </div>
  );
}

"use client";
import { useState } from "react";

export default function SubscribeBanner() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data: { error?: string } = await res.json();
      if (!res.ok) throw new Error(data?.error || "Error desconocido");

      setStatus("ok");
      setMsg("✅ ¡Gracias por suscribirte!");
      setEmail("");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Ocurrió un error";
      setStatus("error");
      setMsg(message);
    }
  }

  return (
    <div className="bg-blue-50 border-b border-blue-100 py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-blue-700">Suscríbete al boletín</h3>
        <p className="text-sm text-blue-600">
            Recibe artículos, tips y recursos directamente en tu correo 📬
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex w-full md:w-auto max-w-md gap-2">
          <input
            type="email"
            required
            placeholder="tu@email.com"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            className="flex-1 rounded-xl border border-blue-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-xl bg-blue-600 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-700 disabled:opacity-50"
          >
            {status === "loading" ? "Enviando..." : "Suscribirme"}
          </button>
        </form>

        {status !== "idle" && (
          <p
            className={`w-full md:w-auto text-sm mt-2 md:mt-0 ${
              status === "ok" ? "text-green-600" : "text-red-600"
            }`}
          >
            {msg}
          </p>
        )}
      </div>
    </div>
  );
}

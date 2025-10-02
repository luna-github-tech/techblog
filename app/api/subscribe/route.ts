import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // Validación básica
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return NextResponse.json({ error: "Correo inválido" }, { status: 400 });

    // TODO: aquí guarda en tu proveedor:
    // - Supabase: tabla 'subscribers' (email, created_at)
    // - Resend / Mailchimp / Brevo: añadir a lista
    // Por ahora lo simulamos:
    console.log("Nuevo suscriptor:", email);

    return NextResponse.json({ ok: true });
 } catch (e) {
  console.error("POST /api/subscribe error:", e);
  return new Response(JSON.stringify({ error: "Error interno" }), { status: 500 });
}
}

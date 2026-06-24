/**
 * Margarit Construcciones — Landing Page
 * Design: Elegancia Constructora Clásica-Moderna
 * Colors: Navy #0D1B3E, Gold #C9A227, Cream #F8F6F0
 * Typography: Playfair Display (headings) + Montserrat (body)
 */

import { useEffect, useRef } from "react";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";

// ─── Social & Contact Links (configurables) ───────────────────────────────────
const WHATSAPP_NUMBER = "56978265720"; // Número de contacto de Margarit Construcciones
const WHATSAPP_MESSAGE = "Hola, me gustaría solicitar información sobre sus servicios de construcción.";
const INSTAGRAM_URL = "https://www.instagram.com";
const TIKTOK_URL = "https://www.tiktok.com";
const FACEBOOK_URL = "https://www.facebook.com";

// ─── Asset URLs ───────────────────────────────────────────────────────────────
const LOGO_URL = "/manus-storage/logo-margarit-final_73658c33.png";
const HERO_IMG = "/manus-storage/estacionamiento_f3ee1b69.png"; // Imagen de estacionamiento en construcción
const INTERIOR_IMG = "/manus-storage/Ayudantespintando_7e3d269c.png"; // Imagen de trabajadores pintando
const EXTERIOR_IMG = "/manus-storage/reja-obra_e2977470.jpeg"; // Imagen de reja y obra terminada

// ─── Scroll reveal hook ───────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ─── Column SVG (isotipo decorativo) ─────────────────────────────────────────
function ColumnSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Capital */}
      <rect x="5" y="8" width="110" height="14" rx="2" fill="url(#goldGrad)" />
      <rect x="15" y="22" width="90" height="8" rx="1" fill="url(#goldGrad2)" />
      {/* Shaft lines */}
      <rect x="28" y="30" width="14" height="100" rx="2" fill="url(#goldGrad)" />
      <rect x="46" y="30" width="14" height="100" rx="2" fill="url(#goldGrad2)" />
      <rect x="64" y="30" width="14" height="100" rx="2" fill="url(#goldGrad)" />
      <rect x="82" y="30" width="14" height="100" rx="2" fill="url(#goldGrad2)" />
      {/* Base */}
      <rect x="15" y="130" width="90" height="8" rx="1" fill="url(#goldGrad2)" />
      <rect x="5" y="138" width="110" height="14" rx="2" fill="url(#goldGrad)" />
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8C84A" />
          <stop offset="50%" stopColor="#C9A227" />
          <stop offset="100%" stopColor="#A07C1A" />
        </linearGradient>
        <linearGradient id="goldGrad2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C9A227" />
          <stop offset="100%" stopColor="#8A6A10" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ─── WhatsApp Icon ────────────────────────────────────────────────────────────
function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─── Instagram Icon ───────────────────────────────────────────────────────────
function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

// ─── TikTok Icon ──────────────────────────────────────────────────────────────
function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
    </svg>
  );
}

// ─── Facebook Icon ────────────────────────────────────────────────────────────
function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

// ─── Services Data ────────────────────────────────────────────────────────────
const servicesIntro = "Podemos encargarnos de todo: desde el diseño hasta la entrega final. Trabajamos con presupuestos claros, materiales de calidad y garantía por escrito, para que disfrutes de espacios bien construidos, sin sorpresas y con la tranquilidad que mereces.";

const services = [
  {
    icon: "🔄",
    title: "Ampliaciones y Remodelaciones",
    description: "Transformamos tu hogar con proyectos diseñados a tu medida. Ampliaciones, remodelaciones y renovaciones ejecutadas con altos estándares de calidad, terminaciones impecables y garantía por escrito, siempre a un precio justo.",
    image: "/manus-storage/ChatGPTImage23jun2026,21_08_15_254d0971.png",
    imageCaption: "Remodelación de cocina con isla de granito en Pudahuel",
  },
  {
    icon: "🏢",
    title: "Oficinas y Espacios Comerciales",
    description: "Diseñamos y construimos espacios que potencian la productividad y la imagen de tu empresa. Trabajamos con plazos definidos, presupuestos transparentes y una ejecución eficiente para minimizar interrupciones en tu operación.",
    image: "/manus-storage/ChatGPTImage23jun2026,21_07_36_c59e4b6a.png",
    imageCaption: "Oficina de abogado con biblioteca a medida en Las Condes",
  },
  {
    icon: "🔧",
    title: "Reparaciones y Mantención",
    description: "Recuperamos el valor, la funcionalidad y la seguridad de tus espacios. Realizamos reparaciones y mejoras con soluciones duraderas, rapidez de respuesta y excelencia técnica en cada detalle.",
    image: "/manus-storage/ChatGPTImage23jun2026,21_08_48_0404f438.png",
    imageCaption: "Reparación de techado y cerámica exterior en Lo Prado",
  },
  {
    icon: "💡",
    title: "Soluciones Tecnológicas y Domótica",
    description: "Incorporamos tecnología para hacer tu hogar o empresa más segura, cómoda y eficiente. Instalamos chapas inteligentes, cámaras de seguridad, automatización, control de accesos y soluciones energéticas de última generación.",
    image: "/manus-storage/ChatGPTImage23jun2026,21_12_44_f80cd634.png",
    imageCaption: "Instalación de chapa inteligente en Peñalolén",
  },
  {
    icon: <img src="/manus-storage/mascara-de-soldadura_eb87e0ad.png" alt="Estructuras metálicas" style={{ width: "48px", height: "48px", objectFit: "contain" }} />,
    title: "Estructuras Metálicas",
    description: "Fabricamos e instalamos portones, pérgolas, estacionamientos, protecciones, cercos perimetrales y estructuras metálicas a medida. Combinamos resistencia, diseño y optimización de costos para entregar soluciones duraderas y de calidad.",
    image: "/manus-storage/ChatGPTImage23jun2026,21_08_30_8116025d.png",
    imageCaption: "Diseño e instalación de escalera en casa de Maipú",
  },
  {
    icon: "🎨",
    title: "Diseño de Interiores",
    description: "Creamos espacios funcionales, armónicos y personalizados que reflejan tu estilo y necesidades. Nuestro equipo desarrolla propuestas integrales para optimizar cada ambiente, combinando diseño, confort y aprovechamiento eficiente de los espacios.",
    image: "/manus-storage/ChatGPTImage23jun2026,21_13_02_1a466fe7.png",
    imageCaption: "Amoblado de living en Depto de Cerrillos",
  },
];

// ─── Why Us Data ──────────────────────────────────────────────────────────────
const whyUs = [
  { number: "1", title: "Calidad Garantizada", desc: "Porque confiamos en la calidad de nuestro trabajo, cada proyecto incluye garantías claramente establecidas en el contrato para la mano de obra y los materiales utilizados." },
  { number: "2", title: "Precio Justo", desc: "Conozca exactamente cuánto cuesta su proyecto gracias a un desglose completo de materiales y mano de obra, con precios justos, transparentes y ajustados al mercado. Sin costos ocultos ni cobros inesperados." },
];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Home() {
  useScrollReveal();
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Montserrat', sans-serif" }}>

      {/* ── NAVBAR ─────────────────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 md:px-10"
        style={{
          background: "linear-gradient(180deg, rgba(13,27,62,0.97) 0%, rgba(13,27,62,0.85) 100%)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(201,162,39,0.2)",
        }}
      >
        <img
          src={LOGO_URL}
          alt="Margarit Construcciones"
          className="h-15 md:h-18 w-auto object-contain"
          style={{ filter: "drop-shadow(0 0 0 transparent)" }}
        />
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-sm font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95"
          style={{
            background: "linear-gradient(135deg, #C9A227 0%, #E8C84A 50%, #C9A227 100%)",
            color: "#0D1B3E",
            fontFamily: "'Montserrat', sans-serif",
            letterSpacing: "0.03em",
            boxShadow: "0 2px 12px rgba(201,162,39,0.35)",
          }}
        >
          <WhatsAppIcon size={16} />
          <span className="hidden sm:inline">Contactanos</span>
        </a>
      </nav>

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "#0D1B3E" }}
      >
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${HERO_IMG})`,
            opacity: 0.22,
          }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(110deg, rgba(13,27,62,0.97) 45%, rgba(13,27,62,0.55) 100%)",
          }}
        />

        {/* Decorative column watermark */}
        <ColumnSVG className="absolute right-8 bottom-0 w-40 md:w-56 opacity-[0.07] pointer-events-none select-none" />

        {/* Content */}
        <div className="container relative z-10 pt-28 pb-20">
          <div className="max-w-2xl">
            {/* Gold accent line */}
            <div
              className="mb-6"
              style={{
                width: "60px",
                height: "3px",
                background: "linear-gradient(90deg, #C9A227, #E8C84A)",
                borderRadius: "2px",
              }}
            />

            <h1
              className="mb-4 leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
                color: "#FFFFFF",
                lineHeight: 1.1,
              }}
            >
              Volvemos realidad
              <br />
              <span style={{ color: "#C9A227" }}>tu proyecto</span>
              <br />
              con excelencia
            </h1>

            <p
              className="mb-3 text-lg md:text-xl font-medium tracking-wide"
              style={{ color: "#C9A227", fontFamily: "'Montserrat', sans-serif" }}
            >
              Calidad garantizada a precio justo
            </p>

            <p
              className="mb-10 text-base md:text-lg leading-relaxed max-w-xl"
              style={{ color: "rgba(255,255,255,0.78)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
            >
              Somos una pyme especializada en desarrollar proyectos de construccion adaptados a las necesidades de nuestros clientes. Cuéntanos qué necesitas:
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-sm font-semibold text-base transition-all duration-200 hover:scale-105 active:scale-95 whatsapp-pulse"
                style={{
                  background: "#25D366",
                  color: "#FFFFFF",
                  fontFamily: "'Montserrat', sans-serif",
                  letterSpacing: "0.04em",
                  boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
                }}
              >
                <WhatsAppIcon size={22} />
                Contactanos por WhatsApp
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm font-semibold text-base transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  border: "2px solid rgba(201,162,39,0.6)",
                  color: "#E8C84A",
                  fontFamily: "'Montserrat', sans-serif",
                  letterSpacing: "0.04em",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(201,162,39,0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                Ver nuestros servicios
              </a>
            </div>

            {/* Social links in hero */}
            <div className="flex items-center gap-5 mt-10">
              <span
                className="text-xs font-medium tracking-widest uppercase"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Síguenos en redes
              </span>
              <div className="flex gap-4">
                {[
                  { href: INSTAGRAM_URL, icon: <InstagramIcon size={18} />, label: "Instagram" },
                  { href: TIKTOK_URL, icon: <TikTokIcon size={18} />, label: "TikTok" },
                  { href: FACEBOOK_URL, icon: <FacebookIcon size={18} />, label: "Facebook" },
                ].map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 hover:scale-110"
                    style={{
                      border: "1px solid rgba(201,162,39,0.35)",
                      color: "rgba(255,255,255,0.65)",
                      background: "rgba(255,255,255,0.05)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "#C9A227";
                      (e.currentTarget as HTMLElement).style.color = "#C9A227";
                      (e.currentTarget as HTMLElement).style.background = "rgba(201,162,39,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,162,39,0.35)";
                      (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                    }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
          aria-hidden="true"
        >
          <span className="text-xs tracking-widest uppercase" style={{ color: "#C9A227", fontFamily: "'Montserrat', sans-serif" }}>
            Scroll
          </span>
          <div
            className="w-px h-10"
            style={{ background: "linear-gradient(180deg, #C9A227, transparent)" }}
          />
        </div>
      </section>

      {/* ── GOLD DIVIDER ───────────────────────────────────────────────────── */}
      <hr className="gold-divider" />

      {/* ── STATS STRIP ────────────────────────────────────────────────────── */}
      <section style={{ background: "#0D1B3E" }} className="py-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x" style={{ borderColor: "rgba(201,162,39,0.2)" }}>
            {[
              { num: "+15", label: "Años de experiencia" },
              { num: "+350", label: "Proyectos realizados" },
              { num: "100%", label: "trabajo garantizado" },
              { num: "3/4", label: "clientes nos vuelven a contratar." },
            ].map(({ num, label }) => (
              <div key={label} className="text-center px-4 reveal">
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    color: "#C9A227",
                    lineHeight: 1,
                  }}
                >
                  {num}
                </div>
                <div
                  className="mt-1 text-sm font-medium"
                  style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Montserrat', sans-serif" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOLD DIVIDER ───────────────────────────────────────────────────── */}
      <hr className="gold-divider" />

      {/* ── SERVICES ───────────────────────────────────────────────────────── */}
      <section id="servicios" className="py-20 md:py-28" style={{ background: "#F8F6F0" }}>
        <div className="container">
          {/* Section header */}
          <div className="mb-14 reveal">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#C9A227", fontFamily: "'Montserrat', sans-serif" }}
            >
              Lo que hacemos
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: "#1A1A2E" }}
            >
              Nuestros Servicios
            </h2>
            <hr className="gold-divider" style={{ maxWidth: "80px" }} />
            <p
              className="text-base md:text-lg leading-relaxed mt-6 max-w-3xl"
              style={{ color: "#5A5A7A", fontFamily: "'Montserrat', sans-serif" }}
            >
              {servicesIntro}
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="reveal card-gold-top bg-white p-7 rounded-sm transition-all duration-250 group"
                style={{
                  transitionDelay: `${i * 80}ms`,
                  boxShadow: "0 2px 16px rgba(13,27,62,0.08)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(13,27,62,0.14)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(13,27,62,0.08)";
                }}
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#1A1A2E" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "#5A5A7A", fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
                  dangerouslySetInnerHTML={{ __html: service.description }}
                />
                {service.image && (
                  <div className="mt-6">
                    <img
                      src={service.image}
                      alt={service.imageCaption}
                      className="w-full h-48 object-cover rounded-sm mb-3"
                    />
                    <p
                      className="text-xs text-center italic"
                      style={{ color: "#C9A227", fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {service.imageCaption}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / IMAGE SPLIT ────────────────────────────────────────────── */}
      <section style={{ background: "#112240" }} className="py-20 md:py-28 overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text side */}
            <div className="reveal">
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: "#C9A227", fontFamily: "'Montserrat', sans-serif" }}
              >
                Nuestra obra
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold mb-5"
                style={{ fontFamily: "'Playfair Display', serif", color: "#FFFFFF" }}
              >
                Construimos con pasión y precisión
              </h2>
              <hr className="gold-divider mb-6" style={{ maxWidth: "80px" }} />
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "rgba(255,255,255,0.72)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
              >
                En Margarit Construcciones cada proyecto es único. Trabajamos codo a codo con nuestros clientes desde la primera reunión hasta la entrega "llaves en mano", asegurándonos de que cada detalle refleje sus necesidades y supere sus expectativas.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(255,255,255,0.72)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
              >
                Nuestra filosofía es simple: <span style={{ color: "#C9A227", fontWeight: 600 }}>calidad garantizada a precio justo</span>. Porque creemos que construir bien no debería ser un lujo, sino un estándar.
              </p>
            </div>

            {/* Image side */}
            <div className="reveal" style={{ transitionDelay: "120ms" }}>
              <div
                className="relative rounded-sm overflow-hidden"
                style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}
              >
                <img
                  src={EXTERIOR_IMG}
                  alt="Obra terminada Margarit Construcciones"
                  className="w-full h-72 md:h-96 object-cover"
                />
                {/* Gold frame accent */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    border: "2px solid rgba(201,162,39,0.3)",
                    borderRadius: "2px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US ─────────────────────────────────────────────────────────── */}
      <section id="nosotros" className="py-20 md:py-28" style={{ background: "#F8F6F0" }}>
        <div className="container">
          <div className="mb-14 reveal">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#C9A227", fontFamily: "'Montserrat', sans-serif" }}
            >
              Por qué elegirnos
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: "#1A1A2E" }}
            >
              Nuestro Compromiso
            </h2>
            <hr className="gold-divider" style={{ maxWidth: "80px" }} />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyUs.map((item, i) => {
              const isQuality = item.title === "Calidad Garantizada";
              return (
                <div
                  key={item.number}
                  className="reveal flex flex-col gap-4 items-center text-center"
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  {/* Icon */}
                  <div className="flex justify-center">
                    {isQuality ? (
                      <img src="/manus-storage/certificado-award_a34276c4.png" alt="Calidad Garantizada" style={{ width: "52px", height: "52px", objectFit: "contain" }} />
                    ) : (
                      <img src="/manus-storage/balanza-justicia_04bace95.png" alt="Precio Justo" style={{ width: "52px", height: "52px", objectFit: "contain" }} />
                    )}
                  </div>
                  {/* Content */}
                  <div>
                    <h3
                      className="text-lg font-bold mb-3"
                      style={{ fontFamily: "'Playfair Display', serif", color: "#1A1A2E" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#5A5A7A", fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── GALLERY STRIP ──────────────────────────────────────────────────── */}
      <section className="py-0 overflow-hidden" style={{ background: "#0D1B3E" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 h-64 md:h-80">
          <div
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_IMG})` }}
          />
          <div
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${INTERIOR_IMG})` }}
          />
        </div>
      </section>

      {/* ── ABOUT US SECTION ────────────────────────────────────────────────── */}
      <section id="quienes-somos" className="py-20 md:py-28" style={{ background: "#2A2A3E" }}>
        <div className="container">
          {/* Section header */}
          <div className="mb-16 reveal">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#C9A227", fontFamily: "'Montserrat', sans-serif" }}
            >
              Nuestro equipo
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: "#FFFFFF" }}
            >
              ¿Quiénes somos?
            </h2>
            <hr className="gold-divider mb-6" style={{ maxWidth: "80px" }} />
            <p
              className="text-base leading-relaxed max-w-2xl"
              style={{ color: "rgba(255,255,255,0.72)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
            >
              Somos una empresa familiar moderna, liderada por profesionales que entienden que construir un hogar o una oficina requiere mucho más que conocimientos técnicos: requiere confianza, atención personalizada y un compromiso genuino con la satisfacción de cada cliente.
            </p>
          </div>

          {/* Team members grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Rodrigo Donoso */}
            <div className="reveal flex flex-col items-center text-center" style={{ transitionDelay: "0ms" }}>
              <div
                className="w-full max-w-xs rounded-sm overflow-hidden mb-8 shadow-lg"
                style={{
                  boxShadow: "0 8px 32px rgba(13,27,62,0.15)",
                }}
              >
                <img
                  src="/manus-storage/Rodrigo-FotosociosWeb(sinfondo)RECORTADA_e8b58b5b.png"
                  alt="Rodrigo Donoso"
                  className="w-full object-contain"
                  style={{ height: "250px" }}
                />
              </div>
              <h3
                className="text-2xl font-bold mb-2"
                style={{ fontFamily: "'Playfair Display', serif", color: "#FFFFFF" }}
              >
                Rodrigo Donoso
              </h3>
              <p
                className="text-sm font-semibold mb-4"
                style={{ color: "#C9A227", fontFamily: "'Montserrat', sans-serif" }}
              >
                Administrador General
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.72)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
              >
                Con más de 10 años liderando equipos y proyectos, Rodrigo es responsable de la planificación, administración y control de cada iniciativa desarrollada por Margarit Construcciones. Ingeniero Comercial de la Universidad de Chile y Magíster en Gestión de Proyectos de la Universidad de Barcelona, trabaja para garantizar una experiencia profesional, ordenada y confiable desde el primer contacto hasta la entrega final de la obra.
              </p>
            </div>

            {/* Christian Margarit */}
            <div className="reveal flex flex-col items-center text-center" style={{ transitionDelay: "120ms" }}>
              <div
                className="w-full max-w-xs rounded-sm overflow-hidden mb-8 shadow-lg"
                style={{
                  boxShadow: "0 8px 32px rgba(13,27,62,0.15)",
                }}
              >
                <img
                  src="/manus-storage/Christian-FotosociosWeb(sinfondo)RECORTADAredimensionada_506dba6b.png"
                  alt="Christian Margarit"
                  className="w-full object-contain"
                  style={{ height: "250px" }}
                />
              </div>
              <h3
                className="text-2xl font-bold mb-2"
                style={{ fontFamily: "'Playfair Display', serif", color: "#FFFFFF" }}
              >
                Christian Margarit
              </h3>
              <p
                className="text-sm font-semibold mb-4"
                style={{ color: "#C9A227", fontFamily: "'Montserrat', sans-serif" }}
              >
                Líder de Operaciones
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.72)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
              >
                Con más de 15 años de experiencia en construcción, Christian dirige la ejecución de las obras y coordina los equipos en terreno. Su conocimiento técnico, compromiso con la calidad y enfoque en la satisfacción del cliente permiten transformar cada proyecto en una solución sólida, funcional y duradera. Estudió Construcción Civil en AIEP y supervisa personalmente los trabajos para asegurar los más altos estándares de ejecución.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS SECTION ──────────────────────────────────────────── */}
      <section id="testimonios" className="py-20 md:py-28" style={{ background: "#112240" }}>
        <div className="container">
          {/* Section header */}
          <div className="mb-14 reveal">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#C9A227", fontFamily: "'Montserrat', sans-serif" }}
            >
              Voces de confianza
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: "#FFFFFF" }}
            >
              Lo que dicen nuestros clientes
            </h2>
            <hr className="gold-divider mb-6" style={{ maxWidth: "80px" }} />
            <p
              className="text-base leading-relaxed max-w-2xl"
              style={{ color: "rgba(255,255,255,0.72)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
            >
              Nuestros clientes son el reflejo de nuestro compromiso con la excelencia:
            </p>
          </div>

          {/* Carousel */}
          <div className="reveal" style={{ transitionDelay: "120ms" }}>
            <TestimonialsCarousel autoPlayInterval={6000} />
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ────────────────────────────────────────────────────── */}
      <section
        id="contacto"
        className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: "#0D1B3E" }}
      >
        {/* Decorative column */}
        <ColumnSVG className="absolute left-0 top-1/2 -translate-y-1/2 w-40 opacity-[0.06] pointer-events-none" />
        <ColumnSVG className="absolute right-0 top-1/2 -translate-y-1/2 w-40 opacity-[0.06] pointer-events-none" />

        <div className="container relative z-10 text-center">
          <div className="reveal max-w-2xl mx-auto">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#C9A227", fontFamily: "'Montserrat', sans-serif" }}
            >
              Hablemos de tu proyecto
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold mb-5"
              style={{ fontFamily: "'Playfair Display', serif", color: "#FFFFFF" }}
            >
              ¿Listo para construir?
            </h2>
            <hr className="gold-divider mb-6 mx-auto" style={{ maxWidth: "80px" }} />
            <p
              className="text-base md:text-lg mb-10 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.72)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
            >
              Escríbenos hoy y recibe respuesta antes de 24 horas. Nuestro equipo está listo para escucharte y hacer realidad tu proyecto.
            </p>

            {/* Main CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-sm font-bold text-lg transition-all duration-200 hover:scale-105 active:scale-95 whatsapp-pulse mb-8"
              style={{
                background: "#25D366",
                color: "#FFFFFF",
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: "0.04em",
                boxShadow: "0 6px 30px rgba(37,211,102,0.45)",
              }}
            >
              <WhatsAppIcon size={26} />
              Contactanos por WhatsApp
            </a>

            {/* Social links */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-sm text-sm font-semibold transition-all duration-200 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
                  color: "#FFFFFF",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                <InstagramIcon size={16} />
                Instagram
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-sm text-sm font-semibold transition-all duration-200 hover:scale-105"
                style={{
                  background: "#000000",
                  color: "#FFFFFF",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                <TikTokIcon size={16} />
                TikTok
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-sm text-sm font-semibold transition-all duration-200 hover:scale-105"
                style={{
                  background: "#1877F2",
                  color: "#FFFFFF",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                <FacebookIcon size={16} />
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer
        className="py-10"
        style={{
          background: "#080F1F",
          borderTop: "1px solid rgba(201,162,39,0.2)",
        }}
      >
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <img
              src={LOGO_URL}
              alt="Margarit Construcciones"
              className="h-10 w-auto object-contain opacity-90"
            />

            {/* Slogan */}
            <p
              className="text-sm text-center italic"
              style={{ color: "#C9A227", fontFamily: "'Playfair Display', serif" }}
            >
              "Calidad garantizada a precio justo"
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { href: INSTAGRAM_URL, icon: <InstagramIcon size={16} />, label: "Instagram" },
                { href: TIKTOK_URL, icon: <TikTokIcon size={16} />, label: "TikTok" },
                { href: FACEBOOK_URL, icon: <FacebookIcon size={16} />, label: "Facebook" },
                { href: whatsappUrl, icon: <WhatsAppIcon size={16} />, label: "WhatsApp" },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 hover:scale-110"
                  style={{
                    border: "1px solid rgba(201,162,39,0.3)",
                    color: "rgba(255,255,255,0.5)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#C9A227";
                    (e.currentTarget as HTMLElement).style.color = "#C9A227";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,162,39,0.3)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <hr className="gold-divider my-6" />

          <p
            className="text-center text-xs"
            style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Montserrat', sans-serif" }}
          >
            © {new Date().getFullYear()} Margarit Construcciones. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP BUTTON ────────────────────────────────────────── */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 whatsapp-pulse"
        style={{
          background: "#25D366",
          color: "#FFFFFF",
          boxShadow: "0 4px 24px rgba(37,211,102,0.5)",
        }}
      >
        <WhatsAppIcon size={28} />
      </a>
    </div>
  );
}

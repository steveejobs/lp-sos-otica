import type { Metadata } from "next";
import Image from "next/image";
import {
  ChevronRight,
  Clock,
  Eye,
  Glasses,
  Globe2,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Sparkles,
  Star,
  Sun,
  Watch,
} from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/site";

const instagramWhatsAppUrl = buildWhatsAppUrl(
  "Olá, S.O.S Ótica! Vim pelo Instagram e quero atendimento.",
);
const visionTestWhatsAppUrl = buildWhatsAppUrl(
  "Olá, S.O.S Ótica! Vim pelo Instagram e quero agendar um teste de visão.",
);
const gradeWhatsAppUrl = buildWhatsAppUrl(
  "Olá, S.O.S Ótica! Vim pelo Instagram e quero ver opções de óculos de grau.",
);
const solarWhatsAppUrl = buildWhatsAppUrl(
  "Olá, S.O.S Ótica! Vim pelo Instagram e quero ver opções de óculos solares.",
);
const collectionsWhatsAppUrl = buildWhatsAppUrl(
  "Olá, S.O.S Ótica! Vim pelo Instagram e quero ver as coleções disponíveis.",
);
const accessoriesWhatsAppUrl = buildWhatsAppUrl(
  "Olá, S.O.S Ótica! Vim pelo Instagram e quero ver relógios e acessórios.",
);

const routeUrl =
  "https://www.google.com/maps/dir/?api=1&destination=-7.1920373,-48.2087301&travelmode=driving";
const fullSiteUrl = "https://lp-sos-otica.vercel.app/";

const mainLinks = [
  {
    label: "Chamar no WhatsApp",
    href: instagramWhatsAppUrl,
    ariaLabel: "Chamar a SOS Ótica no WhatsApp",
    icon: MessageCircle,
    variant: "primary",
  },
  {
    label: "Traçar rota",
    href: routeUrl,
    ariaLabel: "Traçar rota para a SOS Ótica no Google Maps",
    icon: Navigation,
    variant: "light",
  },
  {
    label: "Ver coleções",
    href: collectionsWhatsAppUrl,
    ariaLabel: "Ver coleções disponíveis pelo WhatsApp",
    icon: Sparkles,
    variant: "light",
  },
  {
    label: "Agendar teste de visão",
    href: visionTestWhatsAppUrl,
    ariaLabel: "Agendar teste de visão pelo WhatsApp",
    icon: Eye,
    variant: "light",
  },
  {
    label: "Ver o site completo",
    href: fullSiteUrl,
    ariaLabel: "Abrir o site completo da SOS Ótica",
    icon: Globe2,
    variant: "ghost",
  },
] as const;

const proofItems = [
  { value: "4,9", label: "no Google" },
  { value: "92", label: "avaliações" },
  { value: "Centro", label: "de Araguaína" },
  { value: "Seg-Sáb", label: "8h às 18h / 12h" },
];

const featuredItems = [
  {
    title: "Óculos de grau",
    href: gradeWhatsAppUrl,
    image: "/assets/glasses/eyeglasses-hero.webp",
    alt: "Armação de óculos de grau",
    icon: Glasses,
  },
  {
    title: "Óculos solares",
    href: solarWhatsAppUrl,
    image: "/galeria%20cole%C3%A7%C3%A3o/cole%C3%A7%C3%A3o%203%20(4).jpg",
    alt: "Óculos solares em destaque",
    icon: Sun,
  },
  {
    title: "Coleções",
    href: collectionsWhatsAppUrl,
    image: "/galeria%20cole%C3%A7%C3%A3o/cole%C3%A7%C3%A3o%204%20(3).jpg",
    alt: "Coleção de armações da SOS Ótica",
    icon: Sparkles,
  },
  {
    title: "Relógios e acessórios",
    href: accessoriesWhatsAppUrl,
    image: "/imagens/TECHNOS-02.jpg",
    alt: "Relógio Technos disponível na SOS Ótica",
    icon: Watch,
  },
];

export const metadata: Metadata = {
  title: "SOS Ótica | Links do Instagram",
  description:
    "Links rápidos da SOS Ótica no Centro de Araguaína: WhatsApp, rota, coleções, teste de visão e site completo.",
  alternates: {
    canonical: "/instagram",
  },
  openGraph: {
    title: "SOS Ótica | Centro de Araguaína",
    description:
      "Óculos pronto em até 30 minutos, teste de visão no local e atendimento pelo WhatsApp.",
    type: "website",
    images: [
      {
        url: "/imagens/logotipo icon preto.png",
        width: 1200,
        height: 1200,
        alt: "Logo SOS Ótica",
      },
    ],
  },
};

export default function InstagramBioPage() {
  return (
    <main className="instagram-page">
      <section className="instagram-hero" aria-labelledby="instagram-title">
        <div className="instagram-shell">
          <div className="instagram-brand-lockup">
            <Image
              src="/imagens/logotipo icon preto.png"
              alt=""
              width={92}
              height={92}
              priority
              className="instagram-logo"
              aria-hidden="true"
            />
            <div>
              <h1 id="instagram-title">SOS Ótica</h1>
              <p>Centro de Araguaína</p>
            </div>
          </div>

          <p className="instagram-intro">
            Óculos pronto em até 30 minutos, teste de visão no local e
            atendimento pelo WhatsApp.
          </p>

          <div className="instagram-visual" aria-hidden="true">
            <div className="instagram-photo instagram-photo-main">
              <Image
                src="/galeria%20cole%C3%A7%C3%A3o/cole%C3%A7%C3%A3o%203%20(4).jpg"
                alt=""
                fill
                sizes="(min-width: 720px) 340px, 76vw"
                priority
              />
            </div>
            <div className="instagram-photo instagram-photo-float">
              <Image
                src="/assets/glasses/eyeglasses-hero.webp"
                alt=""
                fill
                sizes="150px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="instagram-links instagram-shell" aria-label="Links principais">
        {mainLinks.map((link) => {
          const Icon = link.icon;

          return (
            <a
              key={link.label}
              href={link.href}
              className={`instagram-main-link is-${link.variant}`}
              aria-label={link.ariaLabel}
            >
              <span className="instagram-main-link-icon">
                <Icon size={20} aria-hidden="true" />
              </span>
              <span>{link.label}</span>
              <ChevronRight size={18} aria-hidden="true" />
            </a>
          );
        })}
      </section>

      <section className="instagram-proof instagram-shell" aria-label="Prova rápida">
        {proofItems.map((item) => (
          <div key={`${item.value}-${item.label}`}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="instagram-featured instagram-shell" aria-labelledby="featured-title">
        <div className="instagram-section-heading">
          <h2 id="featured-title">Em destaque</h2>
          <a href={collectionsWhatsAppUrl} aria-label="Pedir ajuda para escolher óculos pelo WhatsApp">
            Pedir ajuda
          </a>
        </div>

        <div className="instagram-featured-grid">
          {featuredItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                className="instagram-featured-card"
                aria-label={`Ver ${item.title} pelo WhatsApp`}
              >
                <span className="instagram-featured-image">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 720px) 160px, 43vw"
                    loading="lazy"
                  />
                </span>
                <span className="instagram-featured-copy">
                  <Icon size={16} aria-hidden="true" />
                  <strong>{item.title}</strong>
                </span>
              </a>
            );
          })}
        </div>
      </section>

      <section className="instagram-contact instagram-shell" aria-labelledby="contact-title">
        <div className="instagram-section-heading">
          <h2 id="contact-title">Contato</h2>
        </div>

        <address className="instagram-contact-list">
          <a href={routeUrl} aria-label="Abrir rota para o endereço da SOS Ótica">
            <MapPin size={18} aria-hidden="true" />
            <span>R. Sadoc Correa, 154 - Central, Araguaína - TO, 77803-060</span>
          </a>
          <a href="tel:+5563992938550" aria-label="Ligar para a SOS Ótica">
            <Phone size={18} aria-hidden="true" />
            <span>(63) 99293-8550</span>
          </a>
          <div>
            <Clock size={18} aria-hidden="true" />
            <span>Segunda a sexta: 8h às 18h<br />Sábado: 8h às 12h</span>
          </div>
        </address>
      </section>

      <footer className="instagram-footer instagram-shell">
        <Star size={15} aria-hidden="true" />
        <span>SOS Ótica - Centro de Araguaína</span>
      </footer>

      <a
        href={instagramWhatsAppUrl}
        className="instagram-fixed-cta"
        aria-label="Falar com a SOS Ótica no WhatsApp"
      >
        <MessageCircle size={19} aria-hidden="true" />
        <span>Falar no WhatsApp</span>
      </a>
    </main>
  );
}

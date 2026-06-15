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
import { TestimonialsMobileMarquee } from "@/components/ui/testimonials-columns-1";
import { InstagramVideoCard } from "@/components/InstagramVideoCard";
import { testimonials, testimonialsSummary } from "@/data/testimonials";
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
const videoWhatsAppUrl = buildWhatsAppUrl(
  "Olá, S.O.S Ótica! Vim pelo Instagram, vi o vídeo e quero atendimento.",
);

const routeUrl =
  "https://www.google.com/maps/dir/?api=1&destination=-7.1920373,-48.2087301&travelmode=driving";
const fullSiteUrl = "/";

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
    href: "#colecoes",
    ariaLabel: "Ver coleções em destaque na página",
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
    label: "Ver site completo",
    href: fullSiteUrl,
    ariaLabel: "Abrir o site completo da SOS Ótica",
    icon: Globe2,
    variant: "ghost",
  },
] as const;

const showcaseMainImages = [
  {
    src: "/assets/glasses/eyeglasses-hero.webp",
    alt: "Armação de óculos de grau da SOS Ótica",
    contain: true,
  },
  {
    src: "/galeria%20cole%C3%A7%C3%A3o/cole%C3%A7%C3%A3o%203%20(4).jpg",
    alt: "Óculos solar em destaque",
  },
  {
    src: "/galeria%20cole%C3%A7%C3%A3o/cole%C3%A7%C3%A3o%204%20(3).jpg",
    alt: "Armação premium em coleção",
  },
  {
    src: "/galeria%20cole%C3%A7%C3%A3o/cole%C3%A7%C3%A3o%205%20(3).jpg",
    alt: "Detalhe de armação de óculos",
  },
  {
    src: "/galeria%20cole%C3%A7%C3%A3o/cole%C3%A7%C3%A3o%206%20(3).jpg",
    alt: "Óculos de coleção da SOS Ótica",
  },
];

const showcaseFloatingImages = [
  {
    src: "/galeria%20cole%C3%A7%C3%A3o/cole%C3%A7%C3%A3o%201%20(1).jpg",
    alt: "Armação clara em destaque",
  },
  {
    src: "/galeria%20cole%C3%A7%C3%A3o/cole%C3%A7%C3%A3o%202%20(1).jpg",
    alt: "Óculos de grau da coleção",
  },
  {
    src: "/galeria%20cole%C3%A7%C3%A3o/cole%C3%A7%C3%A3o%205%20(2).jpg",
    alt: "Detalhe de óculos premium",
  },
];

const showcaseLoopImages = [...showcaseMainImages, ...showcaseMainImages];
const floatingLoopImages = [
  ...showcaseFloatingImages,
  ...showcaseFloatingImages,
];

const featuredItems = [
  {
    title: "Óculos de grau",
    href: gradeWhatsAppUrl,
    image: "/galeria%20cole%C3%A7%C3%A3o/cole%C3%A7%C3%A3o%202%20(1).jpg",
    alt: "Óculos de grau em destaque",
    icon: Glasses,
  },
  {
    title: "Óculos solares",
    href: solarWhatsAppUrl,
    image: "/galeria%20cole%C3%A7%C3%A3o/cole%C3%A7%C3%A3o%204%20(3).jpg",
    alt: "Óculos solares em destaque",
    icon: Sun,
  },
  {
    title: "Coleções",
    href: collectionsWhatsAppUrl,
    image: "/galeria%20cole%C3%A7%C3%A3o/cole%C3%A7%C3%A3o%203%20(1).jpg",
    alt: "Mulher usando óculos da coleção",
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

const localInfo = [
  "Centro de Araguaína",
  "R. Sadoc Correa, 154",
  "Seg-Sex 8h às 18h",
  "Sáb 8h às 12h",
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

function InstagramShowcase() {
  return (
    <div
      className="instagram-showcase"
      aria-label="Vitrine de óculos da SOS Ótica"
    >
      <div className="instagram-showcase-main">
        <div className="instagram-showcase-track">
          {showcaseLoopImages.map((image, index) => (
            <div
              className={
                image.contain
                  ? "instagram-showcase-card is-contain"
                  : "instagram-showcase-card"
              }
              key={`${image.src}-${index}`}
              aria-hidden={index >= showcaseMainImages.length}
            >
              <Image
                src={image.src}
                alt={index < showcaseMainImages.length ? image.alt : ""}
                fill
                sizes="(min-width: 720px) 190px, 48vw"
                priority={index === 0}
                loading={index === 0 ? undefined : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="instagram-showcase-floating" aria-hidden="true">
        <div className="instagram-showcase-floating-track">
          {floatingLoopImages.map((image, index) => (
            <div
              className="instagram-showcase-mini-card"
              key={`${image.src}-mini-${index}`}
            >
              <Image src={image.src} alt="" fill sizes="104px" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function InstagramSocialProof() {
  return (
    <section
      className="instagram-social instagram-shell"
      aria-label="Prova social da SOS Ótica"
    >
      <div className="instagram-rating-card">
        <span className="instagram-rating-stars" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} size={15} fill="currentColor" />
          ))}
        </span>
        <strong>
          {testimonialsSummary.rating.toFixed(1).replace(".", ",")} no Google
        </strong>
        <span>{testimonialsSummary.total} avaliações de clientes</span>
      </div>
    </section>
  );
}

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

          <InstagramShowcase />
        </div>
      </section>

      <section
        className="instagram-links instagram-shell"
        aria-label="Links principais"
      >
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

      <InstagramSocialProof />

      <InstagramVideoCard whatsappUrl={videoWhatsAppUrl} />

      <section
        className="instagram-testimonials"
        aria-labelledby="instagram-testimonials-title"
      >
        <div className="instagram-shell instagram-section-heading">
          <h2 id="instagram-testimonials-title">Quem comprou recomenda</h2>
        </div>
        <TestimonialsMobileMarquee testimonials={testimonials} />
      </section>

      <section
        id="colecoes"
        className="instagram-featured instagram-shell"
        aria-labelledby="featured-title"
      >
        <div className="instagram-section-heading">
          <h2 id="featured-title">Mini vitrine</h2>
          <a
            href={collectionsWhatsAppUrl}
            aria-label="Pedir ajuda para escolher óculos pelo WhatsApp"
          >
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

      <section
        className="instagram-local instagram-shell"
        aria-label="Informações locais"
      >
        {localInfo.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </section>

      <section
        className="instagram-contact instagram-shell"
        aria-labelledby="contact-title"
      >
        <div className="instagram-section-heading">
          <h2 id="contact-title">Contato</h2>
        </div>

        <address className="instagram-contact-list">
          <a
            href={routeUrl}
            aria-label="Abrir rota para o endereço da SOS Ótica"
          >
            <MapPin size={18} aria-hidden="true" />
            <span>
              R. Sadoc Correa, 154 - Central, Araguaína - TO, 77803-060
            </span>
          </a>
          <a href="tel:+5563992938550" aria-label="Ligar para a SOS Ótica">
            <Phone size={18} aria-hidden="true" />
            <span>(63) 99293-8550</span>
          </a>
          <div>
            <Clock size={18} aria-hidden="true" />
            <span>
              Segunda a sexta: 8h às 18h
              <br />
              Sábado: 8h às 12h
            </span>
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

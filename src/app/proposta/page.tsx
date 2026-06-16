import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  ExternalLink,
  Eye,
  FileText,
  Gem,
  Globe2,
  Instagram,
  MapPin,
  Megaphone,
  MessageCircle,
  Minus,
  MousePointer2,
  Navigation,
  QrCode,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  Target,
  WalletCards,
} from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { testimonials, testimonialsSummary } from "@/data/testimonials";

const PROPOSAL_WHATSAPP_PHONE = "5563991081785";

function buildProposalWhatsAppUrl(message: string) {
  return `https://api.whatsapp.com/send/?phone=${PROPOSAL_WHATSAPP_PHONE}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}

export const metadata: Metadata = {
  title: "Proposta Comercial | SOS Ótica",
  description:
    "Proposta de site, Instagram, Google Local e captação digital para a SOS Ótica.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  alternates: {
    canonical: "/proposta",
  },
};

const siteWhatsAppUrl = buildProposalWhatsAppUrl(
  "Olá, S.O.S Ótica! Quero seguir com o site premium de R$ 1.450.",
);
const instagramWhatsAppUrl = buildProposalWhatsAppUrl(
  "Olá, S.O.S Ótica! Quero seguir com o pacote Instagram Local de R$ 1.300/mês.",
);
const googleWhatsAppUrl = buildProposalWhatsAppUrl(
  "Olá, S.O.S Ótica! Quero seguir com o pacote Google Captação Local de R$ 1.450/mês.",
);
const completeWhatsAppUrl = buildProposalWhatsAppUrl(
  "Olá, S.O.S Ótica! Quero seguir com o pacote Crescimento Completo de R$ 2.200/mês.",
);
const recommendedWhatsAppUrl = buildProposalWhatsAppUrl(
  "Olá, S.O.S Ótica! Quero seguir com Site + Crescimento Completo por 3 meses.",
);
const finalWhatsAppUrl = buildProposalWhatsAppUrl(
  "Olá, S.O.S Ótica! Vi a proposta e quero avançar.",
);

const pillars = [
  {
    title: "Presença",
    text: "Conteúdo para manter a SOS lembrada.",
    icon: Instagram,
  },
  {
    title: "Reputação",
    text: "Google, avaliações e confiança local.",
    icon: BadgeCheck,
  },
  {
    title: "Captação",
    text: "Campanhas para WhatsApp, rota e visita.",
    icon: Target,
  },
];

const siteIncludes = [
  "Landing page premium",
  "Copy e estrutura de conversão",
  "Layout responsivo",
  "WhatsApp configurado",
  "Google Maps e rota",
  "Google Reviews",
  "Galeria de coleções",
  "SEO local básico",
  "Publicação",
  "Ajustes finais combinados",
];

const monthlyPackages = [
  {
    title: "Instagram Local",
    price: "R$ 1.300/mês",
    description:
      "Para manter a marca presente, gerar lembrança local e mostrar produtos, bastidores e atendimento.",
    includes: [
      "8 Reels por mês",
      "12 stories por mês",
      "4 posts/feed",
      "Roteiros curtos",
      "Edição dos vídeos",
      "Legendas com CTA",
      "Organização de temas do mês",
    ],
    cta: "Escolher Instagram Local",
    href: instagramWhatsAppUrl,
    icon: Instagram,
  },
  {
    title: "Google Captação Local",
    price: "R$ 1.450/mês + mídia",
    description:
      "Para aparecer quando alguém procura ótica, gerar rotas, WhatsApp e novas avaliações.",
    includes: [
      "Google Business",
      "Sistema de avaliações",
      "QR Code de avaliação",
      "4 posts no Google",
      "Google Ads local",
      "Campanha para WhatsApp",
      "Campanha para rota/Maps",
      "Palavras-chave locais",
      "Relatório mensal",
    ],
    note: "Verba de anúncios paga direto pelo cliente.",
    cta: "Escolher Google Captação",
    href: googleWhatsAppUrl,
    icon: Search,
  },
  {
    title: "Crescimento Completo",
    badge: "Mais recomendado",
    price: "R$ 2.200/mês + mídia",
    description:
      "O pacote mais completo: une Instagram, Google, avaliações e anúncios locais para fortalecer presença e captação.",
    includes: [
      "Tudo do Instagram Local",
      "Tudo do Google Captação Local",
      "Conteúdo mensal",
      "Google Business",
      "Avaliações",
      "Google Ads local",
      "Campanhas para WhatsApp e rota",
      "Relatório mensal",
    ],
    note: "Verba de anúncios paga direto pelo cliente.",
    cta: "Escolher Crescimento Completo",
    href: completeWhatsAppUrl,
    icon: Sparkles,
    featured: true,
  },
];

const comparisonRows = [
  {
    label: "Pagamento único",
    values: { site: true, instagram: false, google: false, complete: false },
  },
  {
    label: "Conteúdo Instagram",
    values: { site: false, instagram: true, google: false, complete: true },
  },
  {
    label: "Google Business",
    values: { site: false, instagram: false, google: true, complete: true },
  },
  {
    label: "Avaliações",
    values: { site: false, instagram: false, google: true, complete: true },
  },
  {
    label: "Google Ads",
    values: { site: false, instagram: false, google: true, complete: true },
  },
  {
    label: "Campanha WhatsApp",
    values: { site: false, instagram: false, google: true, complete: true },
  },
  {
    label: "Campanha rota",
    values: { site: false, instagram: false, google: true, complete: true },
  },
  {
    label: "Relatório mensal",
    values: { site: false, instagram: false, google: true, complete: true },
  },
];

const comparisonPlans = [
  { key: "site", label: "Site" },
  { key: "instagram", label: "Instagram" },
  { key: "google", label: "Google Captação" },
  { key: "complete", label: "Completo" },
] as const;

const combinations = [
  {
    option: "Opção A",
    title: "Site",
    price: "R$ 1.450 pagamento único",
    text: "Base premium para organizar a presença digital e converter visitantes em WhatsApp, rota e loja.",
  },
  {
    option: "Opção B",
    title: "Site + Google Captação por 3 meses",
    price: "R$ 5.800",
    text: "Ideal para transformar presença digital em busca, rota e WhatsApp.",
    detail: "Site R$ 1.450 + R$ 1.450 x 3",
  },
  {
    option: "Opção C",
    title: "Site + Crescimento Completo por 3 meses",
    price: "R$ 8.050",
    text: "Ideal para unir site, Instagram, Google, avaliações e anúncios locais.",
    detail: "Site R$ 1.450 + R$ 2.200 x 3",
    featured: true,
  },
];

const conditions = [
  "O site é pagamento único.",
  "As mensalidades são pagas antecipadamente.",
  "Os trabalhos mensais começam após confirmação do pagamento do ciclo.",
  "A verba de anúncios não está inclusa e é paga diretamente pelo cliente à plataforma.",
  "Mudanças fora do escopo aprovado podem ser orçadas separadamente.",
];

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

const compactTestimonials = testimonials.slice(0, 5);
const showcaseLoopImages = [...showcaseMainImages, ...showcaseMainImages];
const floatingLoopImages = [
  ...showcaseFloatingImages,
  ...showcaseFloatingImages,
];
const compactTestimonialsLoop = [
  ...compactTestimonials,
  ...compactTestimonials,
];

function ProposalShowcase() {
  return (
    <div
      id="proposta-showcase"
      className="proposal-showcase"
      aria-label="Vitrine de óculos da SOS Ótica"
    >
      <div className="proposal-showcase-main">
        <div className="proposal-showcase-track">
          {showcaseLoopImages.map((image, index) => (
            <div
              className={
                image.contain
                  ? "proposal-showcase-card is-contain"
                  : "proposal-showcase-card"
              }
              key={`${image.src}-${index}`}
              aria-hidden={index >= showcaseMainImages.length}
            >
              <Image
                src={image.src}
                alt={index < showcaseMainImages.length ? image.alt : ""}
                fill
                sizes="(min-width: 960px) 220px, 54vw"
                priority={index === 0}
                loading={index === 0 ? undefined : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="proposal-showcase-floating" aria-hidden="true">
        <div className="proposal-showcase-floating-track">
          {floatingLoopImages.map((image, index) => (
            <div
              className="proposal-showcase-mini-card"
              key={`${image.src}-mini-${index}`}
            >
              <Image src={image.src} alt="" fill sizes="132px" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProposalSocialProof() {
  return (
    <div
      id="proposta-social-proof"
      className="proposal-social-proof"
      aria-label="Prova social da SOS Ótica"
    >
      <div className="proposal-rating-card">
        <span className="proposal-rating-stars" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} size={15} fill="currentColor" />
          ))}
        </span>
        <strong>
          {testimonialsSummary.rating.toFixed(1).replace(".", ",")} no Google
        </strong>
        <span>{testimonialsSummary.total} avaliações de clientes</span>
      </div>

      <div
        className="proposal-testimonial-strip"
        aria-label="Depoimentos de clientes"
      >
        <ul className="sr-only">
          {compactTestimonials.map((testimonial) => (
            <li key={testimonial.name}>
              {testimonial.name}: {testimonial.text}
            </li>
          ))}
        </ul>
        <div className="proposal-testimonial-track" aria-hidden="true">
          {compactTestimonialsLoop.map((testimonial, index) => (
            <article
              className="proposal-mini-testimonial"
              key={`${testimonial.name}-${index}`}
            >
              <span className="proposal-mini-stars">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} size={10} fill="currentColor" />
                ))}
              </span>
              <p>{testimonial.text}</p>
              <strong>{testimonial.name}</strong>
            </article>
          ))}
        </div>
      </div>

      <div className="proposal-local-proof" aria-label="Informações locais">
        <span>
          <MapPin size={15} aria-hidden="true" />
          Centro de Araguaína
        </span>
        <span>Seg-Sex 8h às 18h · Sáb 8h às 12h</span>
      </div>
    </div>
  );
}

function ProposalCta({
  href,
  children,
  variant = "primary",
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
  ariaLabel: string;
}) {
  const content = (
    <>
      <span>{children}</span>
      {href.startsWith("http") ? (
        <MessageCircle size={18} aria-hidden="true" />
      ) : (
        <ArrowRight size={18} aria-hidden="true" />
      )}
    </>
  );

  if (href.startsWith("/")) {
    return (
      <Link
        href={href}
        className={`proposal-button proposal-button-${variant}`}
        aria-label={ariaLabel}
      >
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={`proposal-button proposal-button-${variant}`}
      aria-label={ariaLabel}
    >
      {content}
    </a>
  );
}

function CheckMark({ active }: { active: boolean }) {
  return (
    <span className={active ? "proposal-check is-active" : "proposal-check"}>
      {active ? (
        <Check size={17} aria-hidden="true" />
      ) : (
        <Minus size={17} aria-hidden="true" />
      )}
    </span>
  );
}

export default function ProposalPage() {
  return (
    <main className="proposal-page">
      <section className="proposal-hero" aria-labelledby="proposal-title">
        <div className="proposal-shell proposal-hero-grid">
          <AnimatedReveal className="proposal-hero-copy">
            <Link
              className="proposal-logo"
              href="/"
              aria-label="Voltar para o site da SOS Ótica"
            >
              <Image
                src="/imagens/logotipo icon preto.png"
                alt=""
                width={54}
                height={54}
                priority
                aria-hidden="true"
              />
              <span>SOS Ótica</span>
            </Link>

            <div className="proposal-kicker">
              <Store size={16} aria-hidden="true" />
              <span>
                Centro de Araguaína · Ótica local · Atendimento pelo WhatsApp
              </span>
            </div>

            <h1 id="proposal-title">
              Proposta de crescimento digital para a SOS Ótica
            </h1>
            <p>
              Mais do que presença online: uma estrutura para transformar
              Instagram, Google e site em WhatsApp, rota e visita na loja.
            </p>

            <div className="proposal-hero-actions">
              <ProposalCta
                href="#pacotes"
                ariaLabel="Ver pacotes da proposta comercial"
              >
                Ver pacotes
              </ProposalCta>
              <a
                className="proposal-inline-link"
                href="#recomendacao"
                aria-label="Ver a recomendação da proposta"
              >
                <Star size={17} aria-hidden="true" />
                Minha recomendação
              </a>
            </div>
          </AnimatedReveal>

          <AnimatedReveal className="proposal-hero-visual" delay={0.08}>
            <ProposalShowcase />
            <ProposalSocialProof />
          </AnimatedReveal>
        </div>
      </section>

      <section
        className="proposal-section proposal-context"
        aria-labelledby="context-title"
      >
        <div className="proposal-shell">
          <AnimatedReveal className="proposal-section-heading">
            <span className="proposal-eyebrow">Estratégia</span>
            <h2 id="context-title">O próximo passo depois do site</h2>
            <p>
              O site organiza a presença digital. Agora, o crescimento vem de
              manter a marca ativa no Instagram, fortalecer o Google, gerar
              avaliações e aparecer para quem procura uma ótica em Araguaína.
            </p>
          </AnimatedReveal>

          <div className="proposal-pillar-grid">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <AnimatedReveal
                  key={pillar.title}
                  className="proposal-pillar-card"
                  delay={index * 0.05}
                >
                  <span className="proposal-icon">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </AnimatedReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="proposal-section" aria-labelledby="site-title">
        <div className="proposal-shell">
          <AnimatedReveal className="proposal-site-card">
            <div className="proposal-site-copy">
              <span className="proposal-eyebrow">Projeto único</span>
              <h2 id="site-title">Site premium</h2>
              <div className="proposal-price-row">
                <strong>R$ 1.450</strong>
                <span>Pagamento único</span>
              </div>
              <p>
                Uma landing page construída para posicionar a SOS como ótica
                local de referência e conduzir o visitante para o WhatsApp,
                rota, avaliações e coleções.
              </p>
              <ProposalCta
                href={siteWhatsAppUrl}
                ariaLabel="Quero seguir com o site premium pelo WhatsApp"
              >
                Quero seguir com o site
              </ProposalCta>
            </div>

            <div
              className="proposal-site-includes"
              aria-label="Itens inclusos no site premium"
            >
              {siteIncludes.map((item) => (
                <span key={item}>
                  <Check size={16} aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>

            <p className="proposal-note">
              O site é entregue como projeto único. Gestão mensal, conteúdos e
              anúncios são serviços separados.
            </p>
          </AnimatedReveal>
        </div>
      </section>

      <section
        className="proposal-section proposal-monthly-section"
        id="pacotes"
        aria-labelledby="monthly-title"
      >
        <div className="proposal-shell">
          <AnimatedReveal className="proposal-section-heading proposal-heading-center">
            <span className="proposal-eyebrow">Pacotes mensais</span>
            <h2 id="monthly-title">
              Planos para manter a SOS aparecendo e captando
            </h2>
            <p>
              Os pacotes mensais são separados do site. A mensalidade é paga no
              início do ciclo e os trabalhos começam após confirmação do
              pagamento.
            </p>
          </AnimatedReveal>

          <div className="proposal-plan-grid">
            {monthlyPackages.map((plan, index) => {
              const Icon = plan.icon;

              return (
                <AnimatedReveal
                  key={plan.title}
                  className={
                    plan.featured
                      ? "proposal-plan-card is-featured"
                      : "proposal-plan-card"
                  }
                  delay={index * 0.05}
                >
                  {plan.badge ? (
                    <span className="proposal-plan-badge">{plan.badge}</span>
                  ) : null}
                  <span className="proposal-icon">
                    <Icon size={23} aria-hidden="true" />
                  </span>
                  <h3>{plan.title}</h3>
                  <strong className="proposal-plan-price">{plan.price}</strong>
                  <p>{plan.description}</p>

                  <ul>
                    {plan.includes.map((item) => (
                      <li key={item}>
                        <Check size={15} aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.note ? (
                    <p className="proposal-plan-note">{plan.note}</p>
                  ) : null}

                  <ProposalCta
                    href={plan.href}
                    ariaLabel={`${plan.cta} pelo WhatsApp`}
                    variant={plan.featured ? "primary" : "secondary"}
                  >
                    {plan.cta}
                  </ProposalCta>
                </AnimatedReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="proposal-section"
        id="comparativo"
        aria-labelledby="comparison-title"
      >
        <div className="proposal-shell">
          <AnimatedReveal className="proposal-section-heading">
            <span className="proposal-eyebrow">Comparativo rápido</span>
            <h2 id="comparison-title">O papel de cada frente</h2>
          </AnimatedReveal>

          <AnimatedReveal className="proposal-comparison-wrap" delay={0.08}>
            <div
              className="proposal-comparison-table"
              role="table"
              aria-label="Comparativo dos pacotes"
            >
              <div className="proposal-comparison-row is-head" role="row">
                <div role="columnheader">Entrega</div>
                {comparisonPlans.map((plan) => (
                  <div key={plan.key} role="columnheader">
                    {plan.label}
                  </div>
                ))}
              </div>
              {comparisonRows.map((row) => (
                <div
                  className="proposal-comparison-row"
                  role="row"
                  key={row.label}
                >
                  <div role="rowheader">{row.label}</div>
                  {comparisonPlans.map((plan) => (
                    <div role="cell" key={plan.key}>
                      <CheckMark active={row.values[plan.key]} />
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="proposal-comparison-mobile">
              {comparisonPlans.map((plan) => (
                <article
                  key={plan.key}
                  className="proposal-mobile-compare-card"
                >
                  <h3>{plan.label}</h3>
                  <div>
                    {comparisonRows.map((row) => (
                      <span key={row.label}>
                        <CheckMark active={row.values[plan.key]} />
                        {row.label}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <section
        className="proposal-section proposal-combinations"
        aria-labelledby="combos-title"
      >
        <div className="proposal-shell">
          <AnimatedReveal className="proposal-section-heading proposal-heading-center">
            <span className="proposal-eyebrow">Combinações para começar</span>
            <h2 id="combos-title">Três caminhos claros de aprovação</h2>
          </AnimatedReveal>

          <div className="proposal-combo-grid">
            {combinations.map((combo, index) => (
              <AnimatedReveal
                key={combo.title}
                className={
                  combo.featured
                    ? "proposal-combo-card is-featured"
                    : "proposal-combo-card"
                }
                delay={index * 0.05}
              >
                <span>{combo.option}</span>
                <h3>{combo.title}</h3>
                <strong>{combo.price}</strong>
                {combo.detail ? <small>{combo.detail}</small> : null}
                <p>{combo.text}</p>
              </AnimatedReveal>
            ))}
          </div>

          <AnimatedReveal className="proposal-media-note" delay={0.12}>
            <Megaphone size={18} aria-hidden="true" />
            <span>Verba de anúncios não inclusa.</span>
          </AnimatedReveal>
        </div>
      </section>

      <section
        className="proposal-section proposal-recommendation"
        id="recomendacao"
        aria-labelledby="recommendation-title"
      >
        <div className="proposal-shell">
          <AnimatedReveal className="proposal-recommendation-panel">
            <div>
              <span className="proposal-eyebrow">Minha recomendação</span>
              <h2 id="recommendation-title">
                Começar com força pelos primeiros 3 meses
              </h2>
              <p>
                Começar com o site e o pacote Crescimento Completo por 3 meses.
                Assim a SOS não fica apenas com uma página bonita: ela ganha
                presença, conteúdo, reputação no Google e campanhas locais para
                WhatsApp e rota.
              </p>
              <div className="proposal-best-choice">
                <Gem size={20} aria-hidden="true" />
                <strong>
                  Melhor escolha: Site + Crescimento Completo por 3 meses
                </strong>
              </div>
              <ProposalCta
                href={recommendedWhatsAppUrl}
                ariaLabel="Quero seguir com Site mais Crescimento Completo por 3 meses pelo WhatsApp"
              >
                Quero essa opção
              </ProposalCta>
            </div>

            <div className="proposal-recommendation-media" aria-hidden="true">
              <Image
                src="/assets/store/store-01.webp"
                alt=""
                fill
                sizes="(min-width: 960px) 38vw, 88vw"
                loading="eager"
              />
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <section className="proposal-section" aria-labelledby="conditions-title">
        <div className="proposal-shell">
          <AnimatedReveal className="proposal-conditions">
            <div>
              <span className="proposal-eyebrow">Condições comerciais</span>
              <h2 id="conditions-title">
                Condições simples para começar sem ruído
              </h2>
            </div>

            <ul>
              {conditions.map((condition) => (
                <li key={condition}>
                  <ShieldCheck size={18} aria-hidden="true" />
                  <span>{condition}</span>
                </li>
              ))}
            </ul>
          </AnimatedReveal>
        </div>
      </section>

      <section className="proposal-final" aria-labelledby="final-title">
        <div className="proposal-shell">
          <AnimatedReveal className="proposal-final-panel">
            <div className="proposal-final-icons" aria-hidden="true">
              <WalletCards size={24} />
              <FileText size={24} />
              <MousePointer2 size={24} />
              <QrCode size={24} />
              <BarChart3 size={24} />
              <Globe2 size={24} />
              <Navigation size={24} />
              <ClipboardCheck size={24} />
              <CircleDollarSign size={24} />
              <Eye size={24} />
              <MapPin size={24} />
              <ExternalLink size={24} />
            </div>
            <h2 id="final-title">
              Vamos transformar a presença digital da SOS em atendimento real?
            </h2>
            <div className="proposal-final-actions">
              <ProposalCta
                href={finalWhatsAppUrl}
                ariaLabel="Aprovar proposta pelo WhatsApp"
              >
                Aprovar proposta pelo WhatsApp
              </ProposalCta>
              <ProposalCta
                href="/"
                variant="light"
                ariaLabel="Voltar para o site da SOS Ótica"
              >
                Voltar para o site
              </ProposalCta>
            </div>
          </AnimatedReveal>
        </div>
      </section>
    </main>
  );
}

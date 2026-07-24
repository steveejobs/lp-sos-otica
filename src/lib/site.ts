export const WHATSAPP_PHONE = "5563992938550";
export const SITE_URL = "https://www.sosotica.com.br";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá, S.O.S Ótica! Vim pelo site e quero atendimento.";

export function buildWhatsAppUrl(message: string) {
  return `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}

export const site = {
  name: "SOS Ótica",
  legalName: "Ótica S.O.S",
  city: "Araguaína",
  region: "TO",
  streetAddress: "R. Sadoc Correa, 154 - Central",
  neighborhood: "Central",
  addressLocality: "Araguaína",
  addressRegion: "TO",
  postalCode: "77803-060",
  postalCountry: "BR",
  address: "R. Sadoc Correa, 154 - Central, Araguaína - TO",
  displayAddress: "R. Sadoc Correa, 154 — Central, Araguaína - TO, 77803-060",
  fullAddress:
    "R. Sadoc Correa, 154 - Central, Araguaína - TO, 77803-060, Brasil",
  phoneDisplay: "(63) 99293-8550",
  phoneE164: "+5563992938550",
  latitude: -7.1920373,
  longitude: -48.2087301,
  instagram: "@sosoticaoficial",
  instagramUrl: "https://www.instagram.com/sosoticaoficial/",
  whatsappUrl: buildWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE),
  mapUrl:
    "https://www.google.com/maps/place/%C3%93tica+S.O.S/@-7.1920141,-48.2088701,19.25z/data=!4m6!3m5!1s0x92d90daadbffe76f:0x498c96c9b5a15ebd!8m2!3d-7.1920373!4d-48.2087301!16s%2Fg%2F11t27r67sb?entry=ttu",
  mapsRouteUrl:
    "https://www.google.com/maps/dir/?api=1&destination=-7.1920373,-48.2087301&travelmode=driving",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=-7.1920373,-48.2087301&z=19&output=embed",
  rating: 4.9,
  reviewCount: 92,
  openingHours: {
    weekdays: "Segunda a sexta: 8h às 18h",
    saturday: "Sábado: 8h às 12h",
  },
  paymentSummary: "Até 12x no cartão",
  mainPromise: "Óculos pronto em até 30 minutos",
  promiseNote: "Conforme receita, lente e disponibilidade.",
  logoIcon: "/imagens/logotipo icon preto.png",
};

export const navItems = [
  { label: "Rapidez", href: "#rapidez" },
  { label: "Rotina", href: "#rotina" },
  { label: "Loja", href: "#por-dentro" },
  { label: "Coleções", href: "#colecoes" },
  { label: "Acessórios", href: "#acessorios" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
];

export const localBusinessJsonLd = {
  "@type": ["LocalBusiness", "Optician"],
  "@id": `${SITE_URL}/#optician`,
  name: site.name,
  alternateName: site.legalName,
  legalName: site.legalName,
  description:
    "Ótica em Araguaína-TO com óculos pronto em até 30 minutos, teste de visão no local, lentes, armações e acessórios.",
  url: SITE_URL,
  logo: `${SITE_URL}/icon-512.png`,
  image: [
    `${SITE_URL}/assets/store/store-01.webp`,
    `${SITE_URL}/assets/store/store-02.webp`,
    `${SITE_URL}/assets/store/store-03.webp`,
  ],
  telephone: site.phoneE164,
  sameAs: [site.instagramUrl],
  hasMap: site.mapUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.streetAddress,
    addressLocality: site.addressLocality,
    addressRegion: site.addressRegion,
    postalCode: site.postalCode,
    addressCountry: site.postalCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.latitude,
    longitude: site.longitude,
  },
  areaServed: {
    "@type": "City",
    name: site.city,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phoneE164,
    contactType: "customer service",
    areaServed: "BR",
    availableLanguage: "Portuguese",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Produtos e serviços da SOS Ótica em Araguaína",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Óculos de grau",
          category: "Óculos e armações",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Óculos solares com proteção UV",
          category: "Óculos solares",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Lentes oftálmicas e antirreflexo",
          category: "Lentes para óculos",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Teste de visão no local",
          areaServed: site.city,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Montagem e ajuste de óculos",
          areaServed: site.city,
        },
      },
    ],
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "12:00",
    },
  ],
  paymentAccepted: "Cash, Credit Card, Debit Card",
  currenciesAccepted: "BRL",
  priceRange: "$$",
};

export const websiteJsonLd = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: site.name,
  alternateName: site.legalName,
  inLanguage: "pt-BR",
  publisher: {
    "@id": `${SITE_URL}/#optician`,
  },
};

export const seoJsonLd = {
  "@context": "https://schema.org",
  "@graph": [localBusinessJsonLd, websiteJsonLd],
};

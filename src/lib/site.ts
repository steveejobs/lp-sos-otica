export const WHATSAPP_PHONE = "5563992938550";

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
  logoIconColor: "/imagens/logotipo icon.png",
  logoFull: "/imagens/logotipo completa preta.png",
};

export const navItems = [
  { label: "Rapidez", href: "#rapidez" },
  { label: "Rotina", href: "#rotina" },
  { label: "Laboratório", href: "#laboratorio" },
  { label: "Loja", href: "#por-dentro" },
  { label: "Relógios", href: "#relogios" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
];

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Optician"],
  name: site.name,
  legalName: site.legalName,
  image: site.logoIcon,
  telephone: site.phoneE164,
  url: "https://sosotica.com.br",
  sameAs: [site.instagramUrl],
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating,
    reviewCount: site.reviewCount,
  },
  paymentAccepted: "Cash, Credit Card, Debit Card",
  description:
    "Ótica em Araguaína-TO com óculos pronto em até 30 minutos, teste de visão no local, lentes, armações, relógios e acessórios.",
  priceRange: "$$",
};

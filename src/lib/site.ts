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
  fullAddress:
    "R. Sadoc Correa, 154 - Central, Araguaína - TO, 77803-060, Brasil",
  phoneDisplay: "(63) 99293-8550",
  phoneE164: "+5563992938550",
  instagram: "@sosoticaoficial",
  instagramUrl: "https://www.instagram.com/sosoticaoficial/",
  whatsappUrl:
    "https://api.whatsapp.com/send/?phone=5563992938550&text=Ol%C3%A1%2C+S.O.S+%C3%93tica%21&type=phone_number&app_absent=0",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=R.%20Sadoc%20Correa%2C%20154%20-%20Central%2C%20Aragua%C3%ADna%20-%20TO%2C%2077803-060%2C%20Brasil",
  mapsRouteUrl:
    "https://www.google.com/maps/dir/?api=1&destination=R.%20Sadoc%20Correa%2C%20154%20-%20Central%2C%20Aragua%C3%ADna%20-%20TO%2C%2077803-060%2C%20Brasil",
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
  { label: "Soluções", href: "#solucoes" },
  { label: "Relógios", href: "#relogios" },
  { label: "Lentes", href: "#lentes" },
  { label: "Loja", href: "#por-dentro" },
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
    address: site.fullAddress,
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

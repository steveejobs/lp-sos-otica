export const site = {
  name: "SOS Ótica",
  city: "Araguaína",
  region: "TO",
  streetAddress: "Rua Sadoc Corrêa, 154",
  neighborhood: "Centro",
  addressLocality: "Araguaína",
  addressRegion: "TO",
  postalCountry: "BR",
  address: "Rua Sadoc Corrêa, 154, Centro, Araguaína-TO",
  phoneDisplay: "(63) 99293-8550",
  phoneE164: "+5563992938550",
  instagram: "@sosoticaoficial",
  instagramUrl: "https://www.instagram.com/sosoticaoficial/",
  whatsappUrl:
    "https://wa.me/5563992938550?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20SOS%20%C3%93tica.%20Quero%20atendimento.",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Rua%20Sadoc%20Correia%20154%20Centro%20Aragua%C3%ADna%20TO",
  mapsRouteUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Rua%20Sadoc%20Corr%C3%AAa%2C%20154%2C%20Centro%2C%20Aragua%C3%ADna%20TO",
  logoIcon: "/imagens/logotipo icon preto.png",
  logoIconColor: "/imagens/logotipo icon.png",
  logoFull: "/imagens/logotipo completa preta.png",
};

export const navItems = [
  { label: "Rapidez", href: "#rapidez" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Relógios", href: "#relogios" },
  { label: "Lentes", href: "#lentes" },
  { label: "Laboratório", href: "#laboratorio" },
  { label: "Contato", href: "#contato" },
];

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Optician"],
  name: site.name,
  image: site.logoIcon,
  telephone: site.phoneE164,
  url: "https://sosotica.com.br",
  sameAs: [site.instagramUrl],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.streetAddress,
    addressLocality: site.addressLocality,
    addressRegion: site.addressRegion,
    addressCountry: site.postalCountry,
  },
  areaServed: {
    "@type": "City",
    name: "Araguaína",
  },
  description:
    "Ótica em Araguaína-TO com óculos pronto em até 30 minutos, teste de visão, lentes e armações.",
  priceRange: "$$",
};

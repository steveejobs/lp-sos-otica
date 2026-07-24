import type { Metadata } from "next";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { FocusGallery } from "@/components/FocusGallery";
import { Footer } from "@/components/Footer";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { ExameNewsSection } from "@/components/ExameNewsSection";
import { FeaturedCollectionsSection } from "@/components/FeaturedCollectionsSection";
import { Header } from "@/components/Header";
import { HeroProofBar } from "@/components/HeroProofBar";
import { LensHero } from "@/components/LensHero";
import { ProcessSection } from "@/components/ProcessSection";
import { RoutineLensSection } from "@/components/RoutineLensSection";
import { StorePhotosSection } from "@/components/StorePhotosSection";
import { AccessoriesSection } from "@/components/AccessoriesSection";
import { seoJsonLd } from "@/lib/site";

const title = "SOS Ótica em Araguaína | Óculos pronto em até 30 minutos";
const description =
  "SOS Ótica em Araguaína-TO: óculos pronto em até 30 minutos, teste de visão no local, lentes, armações e atendimento no Centro.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "SOS Ótica",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/imagens/logotipo icon preto.png",
        width: 1254,
        height: 1254,
        alt: "Logo da SOS Ótica em Araguaína",
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/imagens/logotipo icon preto.png"],
  },
};

export default function Home() {
  const jsonLd = JSON.stringify(seoJsonLd).replace(/</g, "\\u003c");

  return (
    <>
      <Header />
      <main id="top">
        <LensHero />
        <HeroProofBar />
        <RoutineLensSection />
        <FeaturedCollectionsSection />
        <ProcessSection />
        <StorePhotosSection />
        <AccessoriesSection />
        <ExameNewsSection />
        <GoogleReviewsSection />
        <FocusGallery />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
    </>
  );
}

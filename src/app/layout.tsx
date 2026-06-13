import type { Metadata, Viewport } from "next";
import { localBusinessJsonLd, site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sosotica.com.br"),
  title: "SOS Ótica em Araguaína | Óculos pronto em até 30 minutos",
  description:
    "SOS Ótica em Araguaína-TO: óculos pronto em até 30 minutos, teste de visão, lentes, armações e atendimento rápido no Centro.",
  keywords: [
    "SOS Ótica",
    "ótica em Araguaína",
    "óculos pronto em Araguaína",
    "teste de visão Araguaína",
    "lentes e armações",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-48.png", type: "image/png", sizes: "48x48" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "SOS Ótica | Óculos pronto em até 30 minutos",
    description:
      "Atendimento rápido, cuidado com a visão, lentes e armações no Centro de Araguaína-TO.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: site.logoIcon,
        width: 1200,
        height: 1200,
        alt: "Logo SOS Ótica",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#fbfaf6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </body>
    </html>
  );
}

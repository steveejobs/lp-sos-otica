import Image from "next/image";
import { Instagram } from "lucide-react";
import { navItems, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div>
          <a
            href="#top"
            className="footer-brand"
            aria-label="SOS Ótica, voltar ao início"
          >
            <Image
              src={site.logoIcon}
              width={72}
              height={72}
              alt=""
              aria-hidden="true"
            />
            <span>
              <strong>SOS Ótica</strong>
              <small>Ótica em Araguaína-TO</small>
            </span>
          </a>
          <p>
            Óculos pronto em até 30 minutos, teste de visão no local, lentes,
            armações, relógios e acessórios.
          </p>
        </div>

        <address>
          <strong>Endereço</strong>
          <span>{site.displayAddress}</span>
          <span>{site.openingHours.weekdays}</span>
          <span>{site.openingHours.saturday}</span>
          <span>WhatsApp: {site.phoneDisplay}</span>
          <a
            href={site.instagramUrl}
            className="footer-social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir Instagram da SOS Ótica: ${site.instagram}`}
          >
            <Instagram size={15} aria-hidden="true" />
            Instagram: {site.instagram}
          </a>
        </address>

        <nav aria-label="Links rápidos do rodapé">
          <strong>Navegação</strong>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      
      <div className="creator-credit">
        <a href={`https://wa.me/5563991081785?text=${encodeURIComponent("Olá Gabriel! Gostaria de saber mais sobre as criações de páginas. Vim pela página SOS Ótica (Principal).")}`} target="_blank" rel="noopener noreferrer">
          Criado por <strong>Gabriel Rabelo Bandeira</strong>
        </a>
      </div>
    </footer>
  );
}

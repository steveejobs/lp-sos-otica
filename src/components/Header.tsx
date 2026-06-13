"use client";

import Image from "next/image";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, site } from "@/lib/site";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="site-shell header-inner">
        <a href="#top" className="brand-mark" aria-label="SOS Ótica, voltar ao início">
          <Image src={site.logoIcon} width={82} height={82} alt="" priority aria-hidden="true" />
          <span>
            <strong>SOS Ótica</strong>
            <small>Centro de Araguaína</small>
          </span>
        </a>

        <nav className="header-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a href={site.whatsappUrl} className="button button-red header-cta">
          <MessageCircle size={17} aria-hidden="true" />
          WhatsApp
        </a>

        <button
          type="button"
          className="menu-button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {isOpen ? (
        <div className="mobile-menu">
          <nav className="site-shell" aria-label="Menu mobile">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href={site.whatsappUrl} className="button button-red" onClick={() => setIsOpen(false)}>
              <MessageCircle size={17} aria-hidden="true" />
              Chamar no WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

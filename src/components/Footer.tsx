import Image from "next/image";
import { Instagram } from "lucide-react";
import { navItems, site } from "@/lib/site";

const seoTopics = [
  { label: "ótica em Araguaína", href: "#top" },
  { label: "óticas em Araguaína", href: "#top" },
  { label: "SOS Ótica Araguaína", href: "#top" },
  { label: "ótica no Centro de Araguaína", href: "#contato" },
  { label: "loja de óculos em Araguaína", href: "#colecoes" },
  { label: "óculos de grau em Araguaína", href: "#colecoes" },
  { label: "armação de óculos em Araguaína", href: "#colecoes" },
  { label: "armações confortáveis", href: "#rotina" },
  { label: "lentes para óculos em Araguaína", href: "#rotina" },
  { label: "lentes antirreflexo em Araguaína", href: "#rotina" },
  { label: "lentes para celular e computador", href: "#rotina" },
  { label: "lentes para dirigir à noite", href: "#rotina" },
  { label: "óculos pronto em Araguaína", href: "#rapidez" },
  { label: "óculos pronto em até 30 minutos", href: "#rapidez" },
  { label: "ótica rápida em Araguaína", href: "#rapidez" },
  { label: "montagem de óculos em Araguaína", href: "#processo" },
  { label: "ajuste de óculos em Araguaína", href: "#processo" },
  { label: "teste de visão em Araguaína", href: "#contato" },
  { label: "teste de visão no Centro", href: "#contato" },
  { label: "óculos solares em Araguaína", href: "#colecoes" },
  { label: "óculos de sol com proteção UV", href: "#rotina" },
  { label: "acessórios para óculos", href: "#acessorios" },
  { label: "correntes e cordões para óculos", href: "#acessorios" },
  { label: "estojos para óculos", href: "#acessorios" },
  { label: "ótica aberta sábado em Araguaína", href: "#contato" },
  { label: "ótica com WhatsApp em Araguaína", href: "#contato" },
  { label: "parcelamento de óculos", href: "#contato" },
  { label: "óculos em até 12 vezes", href: "#contato" },
  { label: "avaliações de ótica em Araguaína", href: "#avaliacoes" },
  { label: "ótica perto do Centro de Araguaína", href: "#contato" },
] as const;

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
            armações e acessórios.
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
          Criado por <strong>Gabriel R.</strong>
        </a>
      </div>

      <details className="footer-local-details">
        <summary>SEO</summary>
        <div className="site-shell footer-local-content">
          <div className="footer-local-heading">
            <p className="eyebrow">Atendimento local</p>
            <h2>SOS Ótica: ótica no Centro de Araguaína</h2>
            <p>
              Para quem pesquisa por óticas em Araguaína-TO, a SOS reúne
              atendimento presencial no Centro, orientação para escolher lentes
              e armações, teste de visão no local e montagem de muitos óculos
              em até 30 minutos, conforme receita, lente e disponibilidade.
            </p>
          </div>

          <div className="footer-local-grid">
            <section>
              <h3>Óculos de grau em Araguaína</h3>
              <p>
                Escolha armações confortáveis para diferentes formatos de rosto
                e conheça opções de lentes para leitura, trabalho, celular,
                computador e direção. A equipe confere a receita, orienta a
                escolha e realiza o ajuste final do óculos.
              </p>
            </section>

            <section>
              <h3>Óculos pronto em até 30 minutos</h3>
              <p>
                Muitos óculos de grau podem ficar prontos em até 30 minutos na
                SOS Ótica. O prazo depende do grau indicado na receita, do tipo
                de lente escolhido e da disponibilidade no laboratório.
              </p>
            </section>

            <section>
              <h3>Lentes e antirreflexo</h3>
              <p>
                Há orientação para lentes oftálmicas, opções com antirreflexo e
                soluções voltadas ao conforto de quem usa telas ou dirige à
                noite. A indicação considera a receita e a rotina de cada
                pessoa.
              </p>
            </section>

            <section>
              <h3>Óculos solares com proteção UV</h3>
              <p>
                A loja também trabalha com óculos de sol e modelos com proteção
                UV, além de armações e acessórios para proteger, organizar e
                conservar seus óculos no dia a dia.
              </p>
            </section>

            <section>
              <h3>Teste de visão em Araguaína</h3>
              <p>
                A SOS Ótica realiza teste de visão no local. Para consultar
                horários, disponibilidade e entender como funciona o
                atendimento, fale diretamente com a equipe pelo WhatsApp.
              </p>
            </section>

            <section>
              <h3>Endereço e horário da SOS Ótica</h3>
              <p>
                A loja fica na {site.displayAddress}. O atendimento acontece de
                segunda a sexta, das 8h às 18h, e aos sábados, das 8h às 12h.
                Para quem procura uma ótica aberta no sábado em Araguaína, é
                possível confirmar o atendimento e consultar opções pelo
                WhatsApp {site.phoneDisplay}. As compras podem ser parceladas em
                até 12 vezes.
              </p>
            </section>
          </div>

          <section
            className="footer-seo-topics"
            aria-labelledby="footer-seo-topics-title"
          >
            <h3 id="footer-seo-topics-title">
              Produtos, serviços e buscas relacionadas
            </h3>
            <ul>
              {seoTopics.map((topic) => (
                <li key={topic.label}>
                  <a href={topic.href}>{topic.label}</a>
                </li>
              ))}
            </ul>
          </section>

          <nav className="footer-local-links" aria-label="Atalhos da SOS Ótica">
            <a href="#rotina">Lentes para sua rotina</a>
            <a href="#colecoes">Óculos e armações</a>
            <a href="#avaliacoes">Avaliações de clientes</a>
            <a href="#contato">Localização em Araguaína</a>
            <a
              href={site.mapsRouteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Traçar rota no Google Maps
            </a>
            <a href={site.whatsappUrl}>Atendimento pelo WhatsApp</a>
          </nav>
        </div>
      </details>
    </footer>
  );
}

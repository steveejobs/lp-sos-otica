import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { EXAME_NEWS_URL, getExameNews } from "@/lib/exame-news";

export async function ExameNewsSection() {
  const news = await getExameNews(3);

  return (
    <section
      id="visao-em-pauta"
      className="section exame-news-section"
      aria-labelledby="exame-news-title"
    >
      <div className="site-shell">
        <AnimatedReveal className="exame-news-header">
          <div className="section-heading compact exame-news-heading">
            <p className="eyebrow">Visão em pauta</p>
            <h2 id="exame-news-title">Visão em pauta</h2>
            <p>
              Tendências sobre óculos, tecnologia e estilo — atualizadas pela
              Exame.
            </p>
          </div>

          <a
            className="exame-news-more"
            href={EXAME_NEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver mais na Exame
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </AnimatedReveal>

        <div className="exame-news-list">
          {news.map((item, index) => (
            <AnimatedReveal
              className="exame-news-card"
              key={item.href}
              delay={index * 0.06}
            >
              <span
                className={`exame-news-thumb${
                  item.image ? " has-image" : " is-placeholder"
                }`}
                style={
                  item.image
                    ? ({
                        "--news-image": `url("${item.image}")`,
                      } as CSSProperties)
                    : undefined
                }
                aria-hidden="true"
              />

              <div>
                <div className="exame-news-meta">
                  <span>{item.category}</span>
                  <span>{item.source}</span>
                  <span>{item.meta}</span>
                </div>
                <h3>{item.title}</h3>
              </div>

              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="exame-news-link"
              >
                Ler na Exame
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

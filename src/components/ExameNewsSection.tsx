import { AnimatedReveal } from "@/components/AnimatedReveal";
import { ExameNewsCarousel } from "@/components/ExameNewsCarousel";
import { EXAME_NEWS_URL, getExameNews } from "@/lib/exame-news";

export async function ExameNewsSection() {
  const news = await getExameNews(8);

  return (
    <section
      id="tendencias-em-oculos"
      className="section exame-news-section"
      aria-labelledby="exame-news-title"
    >
      <div className="site-shell">
        <AnimatedReveal className="exame-news-header">
          <div className="section-heading compact exame-news-heading">
            <p className="eyebrow">Tendências em óculos</p>
            <h2 id="exame-news-title">Tendências em óculos</h2>
            <p>Moda, tecnologia e negócios do universo óptico.</p>
          </div>

          <a
            className="exame-news-more"
            href={EXAME_NEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver mais na Exame
          </a>
        </AnimatedReveal>

        <ExameNewsCarousel items={news} />
      </div>
    </section>
  );
}

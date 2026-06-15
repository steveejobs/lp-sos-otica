# Walkthrough

## Bio page Instagram v01

- Criada a rota principal `/instagram` como uma bio page mobile-first para uso no Instagram, com alias `/bio` redirecionando para a rota principal.
- Estrutura da pagina: hero com lockup vertical da marca, texto curto de proposta, composicao visual leve com imagem de colecao e oculos, pilha de CTAs principais, prova rapida compacta, mini vitrine, contato curto e CTA fixo mobile.
- Links configurados: WhatsApp geral com mensagem "Vim pelo Instagram e quero atendimento", rota Google Maps para `-7.1920373, -48.2087301`, colecoes pelo WhatsApp, agendamento de teste de visao, site completo `https://lp-sos-otica.vercel.app/` e mensagens especificas para grau, solar, colecoes e relogios/acessorios.
- Assets utilizados: `/imagens/logotipo icon preto.png`, `/assets/glasses/eyeglasses-hero.webp`, imagens estaticas leves da pasta `/galeria colecao` e `/imagens/TECHNOS-02.jpg`.
- Otimizacoes mobile: pagina estatica, sem videos, imagens abaixo da dobra com lazy loading, prioridade apenas para logo e composicao do topo, CSS escopado em classes `instagram-*`, animacoes sutis com suporte a `prefers-reduced-motion`, botoes com area de toque ampla, foco visivel e CTA fixo no rodape.
- Validacao executada: `npm run lint` passou com 1 warning preexistente em `src/app/proposta/page.tsx`; `npm run build` passou.
- Screenshots gerados em `.tmp/visual-audit/`: `instagram-bio-mobile-v01.png`, `instagram-bio-mobile-full-v01.png` e `instagram-bio-desktop-v01.png`.

## Limpeza de projeto

- Removidos componentes antigos sem uso na LP: `BrandPillars`, `LensGuidance`, `SocialProof`, `SolutionsSection` e `SolarGlassesSection`.
- Removida a dependencia direta `motion`; o unico uso foi trocado para `framer-motion`, que ja esta no projeto.
- Removidos assets publicos sem referencia: cena solar antiga, imagem de laboratorio, galeria antiga `galeria sos`, logo variantes nao usadas, duplicata de relogio, icone 48px solto e video generico pesado `video.mp4`.
- Mantidos os assets usados pela LP atual: logo preto, favicon/icons declarados, fotos da loja, relogios ativos, hero de oculos e midias das 6 colecoes.
- Removidos artefatos locais ignorados: `.next`, `debug.log` e pacote local `node_modules/motion`.

## Galeria compacta v41

- A secao `Colecoes em destaque` foi reduzida para uma vitrine premium compacta: padding desktop limitado, shell com `max-width: 1200px` e slide com altura maxima de 560px.
- A composicao desktop agora mostra no maximo 1 midia principal, 2 apoios e bloco de texto/CTA. O terceiro apoio visual foi removido do desktop para evitar mosaico pesado.
- O grid da galeria foi estabilizado com largura explicita no shell, carousel, viewport e track, evitando que o Embla expanda o slide alem do viewport.
- As imagens principais continuam com `quality={95}` e `sizes` realista: `(min-width: 1280px) 560px, (min-width: 768px) 50vw, 92vw`. Apoios usam `quality={85}` e largura menor.
- As Colecoes 5 e 6 continuam integradas na ordem visual 3, 4, 5, 1, 6, 2. A navegacao exibe 01 a 06 nessa ordem.
- Videos seguem com `muted`, `loop`, `playsInline`, `preload="metadata"` e poster da imagem principal da colecao quando disponivel. Videos so tocam quando o slide esta ativo e visivel.
- O autoplay da galeria foi reativado sem pausa no hover. Ele roda apenas quando a galeria esta em viewport, respeita `prefers-reduced-motion` e volta para o primeiro slide ao chegar no final.
- A Proof Bar compacta substitui os cards grandes de provas rapidas com quatro itens finos: prazo, teste de visao, endereco e Google.
- Processo SOS mantido com threshold 0.6, disparo uma vez, duracao de 5.6s e timeline vertical limpa no mobile.
- Escolha guiada mobile mantida com cards estaveis, resposta com `min-height` e CTA com altura fixa.
- Screenshots v41 gerados em `.tmp/visual-audit/`: `gallery-compact-desktop-v41.png`, `gallery-6-collections-v41.png`, `gallery-mobile-v41.png`, `proofbar-v41.png`, `process-trigger-v41.png`, `guided-choice-mobile-v41.png`, `fullpage-desktop-v41.png` e `fullpage-mobile-v41.png`.

## Polimento final SOS Otica v38/v39

- A ordem apos o hero ficou: provas rapidas, escolha guiada, colecoes em destaque, Processo SOS, loja real, relogios, noticias, depoimentos, contato, FAQ e CTA final.
- A galeria agora abre na Colecao 3 e segue a ordem visual 3, 4, 5, 1, 6, 2. A Colecao 3 foi mantida como abertura por ter a composicao mais editorial.
- As Colecoes 5 e 6 foram integradas como slides completos. Em ambas, a imagem principal fica como hero do slide e os videos entram como apoio para preservar nitidez e evitar destaque pesado quando a midia vertical/video nao sustenta um hero maior.
- A galeria desktop passou a usar composicao editorial com `object-fit: contain`, moldura clara, qualidade 95 nas imagens dominantes e 85 nos apoios, alem de `sizes` menores para nao pedir resolucao exagerada.
- O carrossel da galeria ficou sem autoplay e sem loop infinito. Isso reduz duplicacoes, evita avanco inesperado, preserva performance e deixa o primeiro slide sempre na Colecao 3.
- Os videos da galeria usam `muted`, `loop`, `playsInline` e `preload="metadata"`, so recebem `src` quando o tile esta ativo ou visivel e pausam fora do slide ativo.
- O Processo SOS dispara com `whileInView`/IntersectionObserver em `amount: 0.6`, roda uma vez e usa duracao total de 5.6s. A timeline acende etapas com calma e o ultimo passo tem micro pulse sutil.
- No mobile, a timeline do Processo SOS permanece vertical e compacta, com carregamento de cima para baixo e sem salto de layout.
- A escolha guiada no mobile ficou com cards de altura estavel, resposta com `min-height`, CTA com altura fixa e troca apenas por fade/translate leve.
- As frases decorativas do hero mantem direcoes opostas: a frase principal vai da direita para a esquerda e a secundaria faz o sentido inverso. O H1 real permanece acessivel.
- Os loops de depoimentos mantem apenas uma lista real acessivel; duplicacoes visuais ficam com `aria-hidden="true"` e animam por CSS transform.
- Validacao executada: `npm run lint` e `npm run build` passaram.
- Screenshots gerados em `.tmp/visual-audit/`: `final-home-v38.png`, `gallery-desktop-quality-v38.png`, `gallery-mobile-v38.png`, `process-trigger-v38.png`, `process-mobile-v38.png`, `guided-choice-mobile-stable-v38.png`, `testimonials-mobile-v38.png`, `fullpage-desktop-v38.png`, `fullpage-mobile-v38.png`, `gallery-start-collection-3-v39.png`, `gallery-collection-5-v39.png`, `gallery-collection-6-v39.png`, `gallery-desktop-quality-v39.png` e `gallery-mobile-v39.png`.

## Proof Bar v40

- Removidos os tres cards grandes de provas rapidas abaixo do hero.
- Criada a `HeroProofBar`, uma barra editorial compacta com tempo de entrega, teste de visao, endereco central e nota no Google.
- A prova social do Google foi reduzida para texto discreto, sem novo card, estrela grande ou competicao visual com o CTA e o chip de reviews do hero.
- O espacamento logo apos o hero ficou mais curto para a barra parecer uma continuacao natural da primeira dobra.

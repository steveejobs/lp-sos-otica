# Walkthrough

## Proposta comercial v01

- Criada a rota `/proposta` como pagina comercial independente, sem entrada no menu publico principal.
- A pagina usa metadata propria com `title` "Proposta Comercial | SOS Otica", description da proposta e `robots: noindex/nofollow` para evitar indexacao no Google.
- Valores configurados: site premium por R$ 1.450 pagamento unico; Instagram Local por R$ 1.300/mes; Google Captacao Local por R$ 1.450/mes + midia; Crescimento Completo por R$ 2.200/mes + midia.
- CTAs de WhatsApp configurados com mensagens especificas para site premium, Instagram Local, Google Captacao Local, Crescimento Completo, recomendacao de 3 meses e aprovacao final da proposta.
- Pacote recomendado: "Site + Crescimento Completo por 3 meses", destacado como melhor escolha com calculo de R$ 8.050 e reforco estrategico de presenca, conteudo, reputacao, Google, WhatsApp e rota.
- Condicoes comerciais destacadas: site como pagamento unico, mensalidades antecipadas, trabalhos iniciando apos confirmacao do pagamento do ciclo, verba de anuncios fora do escopo e paga direto pelo cliente, mudancas extras orcadas separadamente.
- Comportamento mobile: hero empilhado, CTAs em largura total, cards mensais em coluna, comparativo convertido em cards por plano e imagens carregadas de forma leve sem videos.
- Validacao executada: `npm run lint` e `npm run build` passaram.
- Screenshots gerados em `.tmp/visual-audit/`: `proposta-mobile-v01.png`, `proposta-desktop-v01.png`, `proposta-planos-v01.png` e `proposta-comparativo-v01.png`.

## Proposta showcase e social proof v02/v03

- Refinada a hero visual da rota `/proposta`: a composicao estatica foi substituida por uma vitrine animada com duas faixas de imagens reais do projeto, movimento horizontal continuo, fade lateral, card flutuante secundario em sentido oposto e pausa em hover/press.
- A vitrine usa apenas imagens locais de oculos e colecoes, sem videos, com animacao CSS por `transform: translate3d`, duplicacao de listas para loop continuo e fallback em `prefers-reduced-motion`.
- Criado o bloco compacto de prova social na `/proposta`: card com 5 estrelas amarelas, nota `4,9 no Google`, `92 avaliacoes de clientes`, mini depoimentos reais reaproveitados de `src/data/testimonials.ts` e faixa local discreta com Centro de Araguaina e horarios.
- Validacao executada: `npm run lint` e `npm run build` passaram.
- Screenshots gerados em `.tmp/visual-audit/`: `proposta-showcase-mobile-v02.png`, `proposta-showcase-desktop-v02.png`, `proposta-showcase-detail-v02.png`, `proposta-socialproof-mobile-v03.png`, `proposta-socialproof-desktop-v03.png` e `proposta-testimonials-compact-v03.png`.
- Sequencia de movimento gerada em `.tmp/visual-audit/proposta-showcase-motion-v02/`: `frame-01.png`, `frame-02.png` e `frame-03.png`.

## Bio page Instagram v01

- Criada a rota principal `/instagram` como uma bio page mobile-first para uso no Instagram, com alias `/bio` redirecionando para a rota principal.
- Estrutura da pagina: hero com lockup vertical da marca, texto curto de proposta, composicao visual leve com imagem de colecao e oculos, pilha de CTAs principais, prova rapida compacta, mini vitrine, contato curto e CTA fixo mobile.
- Links configurados: WhatsApp geral com mensagem "Vim pelo Instagram e quero atendimento", rota Google Maps para `-7.1920373, -48.2087301`, colecoes pelo WhatsApp, agendamento de teste de visao, site completo `https://lp-sos-otica.vercel.app/` e mensagens especificas para grau, solar, colecoes e relogios/acessorios.
- Assets utilizados: `/imagens/logotipo icon preto.png`, `/assets/glasses/eyeglasses-hero.webp`, imagens estaticas leves da pasta `/galeria colecao` e `/imagens/TECHNOS-02.jpg`.
- Otimizacoes mobile: pagina estatica, sem videos, imagens abaixo da dobra com lazy loading, prioridade apenas para logo e composicao do topo, CSS escopado em classes `instagram-*`, animacoes sutis com suporte a `prefers-reduced-motion`, botoes com area de toque ampla, foco visivel e CTA fixo no rodape.
- Validacao executada: `npm run lint` e `npm run build` passaram.
- Screenshots gerados em `.tmp/visual-audit/`: `instagram-bio-mobile-v01.png`, `instagram-bio-mobile-full-v01.png` e `instagram-bio-desktop-v01.png`.

## Bio page Instagram premium v04

- A rota `/instagram` foi separada visualmente da `/proposta`: a proposta continua como apresentacao comercial de pacotes, enquanto `/instagram` agora funciona como bio page premium para atendimento da loja, rota, colecoes, teste de visao e site completo.
- O hero da `/instagram` mantem logo, nome "SOS Otica", subtitulo "Centro de Araguaina" e texto curto sobre oculos pronto em ate 30 minutos, teste de visao no local e WhatsApp.
- Aplicado showcase animado na `/instagram` com imagens reais do projeto, duas faixas em sentidos opostos, fade lateral, card flutuante, fundo off-white, sombras leves, `transform: translate3d`, imagens lazy abaixo do primeiro item e fallback para `prefers-reduced-motion`.
- Reaproveitado o componente mobile de depoimentos da home (`TestimonialsMobileMarquee`), preservando duas linhas horizontais, sentidos opostos, cards compactos, depoimentos reais de `src/data/testimonials.ts` e duplicacoes visuais com `aria-hidden="true"`.
- A prova social principal da `/instagram` foi trocada pelo bloco compacto com estrelas amarelas, "4,9 no Google" e "92 avaliacoes de clientes"; o grid seco anterior deixou de ser a prova social principal.
- CTAs principais configurados na ordem: Chamar no WhatsApp, Tracar rota, Ver colecoes, Agendar teste de visao e Ver site completo. As mensagens de WhatsApp da bio page usam "Vim pelo Instagram" e a rota usa o link Google Maps com destino `-7.1920373,-48.2087301`.
- Adicionadas informacoes locais discretas apos depoimentos/mini vitrine: Centro de Araguaina, R. Sadoc Correa, 154, Seg-Sex 8h as 18h e Sab 8h as 12h.
- Mantido CTA fixo mobile "Falar no WhatsApp", com safe area, vermelho da marca e espacamento para nao cobrir os botoes principais na primeira dobra mobile.
- Validacao executada: `npm run lint` e `npm run build` passaram.
- Validacao visual gerada em `.tmp/visual-audit/`: `instagram-mobile-v04.png`, `instagram-mobile-full-v04.png`, `instagram-showcase-v04.png`, `instagram-testimonials-v04.png`, `instagram-desktop-v04.png` e `proposta-still-ok-v04.png`.

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

## Hero mobile lentes v42

- O hero mobile ganhou um loop cinematografico de 15s com cinco estados: visao completa do oculos, zoom na lente esquerda, retorno ao centro, zoom na lente direita e novo retorno ao centro.
- A animacao e mobile-only e fica concentrada no wrapper `hero-cinema-camera`, usando apenas `transform` para escalar e deslocar a composicao inteira. No desktop, o comportamento visual anterior foi mantido.
- No mobile, a frase inferior/secundaria foi removida com CSS e a faixa principal ficou levemente maior, mantendo uma unica linha de movimento para dar mais legibilidade dentro das lentes.
- A mascara foi preservada no mesmo sistema de coordenadas do oculos: a imagem, o texto desfocado de fundo e o texto recortado das lentes escalam juntos, enquanto os paineis `lens-bound-*` continuam presos aos percentuais calibrados das lentes.
- O texto dentro das lentes recebeu contraste e camada limpa propria; fora das lentes, a faixa permanece mais suave e desfocada para evitar vazamento visual dentro da area revelada.
- `prefers-reduced-motion` desativa o loop de camera mobile, reduz o scale para uma composicao estatica e pausa a faixa em uma posicao legivel.
- Validacao executada: `npm run lint` e `npm run build` passaram.
- Screenshots v42 gerados em `.tmp/visual-audit/`: `hero-mobile-full-v42.png`, `hero-mobile-left-lens-v42.png`, `hero-mobile-right-lens-v42.png` e `hero-mobile-center-return-v42.png`.
- Sequencia v42 gerada em `.tmp/visual-audit/hero-mobile-loop-v42/` cobrindo 360x800, 375x812, 390x844 e 430x932.

## Hero desktop v43 e reflexos mobile v44

- O marquee do hero desktop foi estabilizado com variaveis CSS compartilhadas em `LensHero`, garantindo a mesma duracao, posicao inicial, eixo vertical, escala tipografica e espacamento no texto desfocado de fundo e no texto recortado pelas lentes.
- A camada desktop das lentes passou a usar um `clipPath` unico para o par de lentes, evitando desalinhamento entre lente esquerda e direita durante o loop horizontal.
- No mobile, a composicao manteve os paineis individuais das lentes e ganhou reflexos leves animados com pseudo-elementos, sincronizados com os estados de zoom da camera.
- A versao com reducao de movimento pausa os reflexos e preserva a composicao estatica sem depender de animacoes.
- O Instagram foi incluido como ponto de contato no header, menu mobile, secao de localizacao e footer, usando `site.instagramUrl` e icone `Instagram` de `lucide-react`.
- Validacao executada novamente: `npm run lint` e `npm run build` passaram.
- Validacao visual gerada em `.tmp/visual-audit/`: `hero-desktop-alignment-v43-initial.png`, `hero-desktop-alignment-v43-mid.png`, `hero-desktop-alignment-v43-loop.png`, `hero-desktop-alignment-v43-metrics.json`, `hero-mobile-left-lens-reflection-v44.png`, `hero-mobile-right-lens-reflection-v44.png`, `hero-mobile-center-v44.png`, `instagram-mobile-v04.png`, `instagram-mobile-full-v04.png`, `instagram-desktop-v04.png` e `proposta-still-ok-v04.png`.

## Hero mobile reflexo de lentes v45

- O reflexo mobile foi separado da camada de texto revelado: `LensReflectionLayer` renderiza apenas o brilho das lentes, enquanto `LensBoundCopy` continua responsavel pelo texto nitido dentro da lente.
- A armação foi preservada removendo o sweep antigo dos paineis de texto e mantendo a imagem do oculos como referencia intacta; o novo reflexo usa paineis proprios com `clip-path` da lente e um `inset` interno para nao encostar na borda preta.
- O sweep agora desce de cima para baixo durante os estados de zoom: primeiro na lente esquerda e depois na direita, com trajetorias levemente diferentes, baixa opacidade, blur curto e centro branco com bordas cinza-quentes discretas.
- O efeito continua mobile-only dentro de `@media (max-width: 680px)`. No `prefers-reduced-motion`, a animacao do reflexo e removida junto do loop simplificado.
- O texto revelado permanece legivel durante o brilho, e o texto fora das lentes segue desfocado.
- Validacao executada: `npm run lint` e `npm run build` passaram.
- Validacao visual gerada em `.tmp/visual-audit/`: `hero-mobile-left-reflection-v45.png`, `hero-mobile-right-reflection-v45.png`, `hero-mobile-reflection-detail-v45.png` e sequencia `hero-mobile-reflection-sweep-v45/` cobrindo 360x800, 375x812, 390x844 e 430x932.

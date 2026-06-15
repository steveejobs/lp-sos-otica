# Walkthrough

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

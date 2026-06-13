# Walkthrough

## Hero

O hero usa somente o estado de óculos de grau. A alternância Grau/Solar e os controles de pular/pausar animação foram removidos para manter o primeiro viewport focado no conceito das lentes.

O texto de fundo existe em uma camada borrada e de menor contraste. A mesma sequência textual aparece dentro das lentes por meio de dois painéis recortados, mantendo a leitura nítida apenas nas áreas das lentes.

Na rodada v10, o bug de sincronia foi corrigido removendo as animações CSS independentes da linha superior e da linha inferior. O componente `LensHero` agora usa um único `requestAnimationFrame` para atualizar a variável CSS `--hero-copy-progress` na raiz `.cinematic-hero`. Todas as camadas do texto, incluindo o fundo borrado e os recortes dentro das lentes, leem essa mesma variável.

O loop ficou mais robusto porque cada linha usa dois segmentos textuais idênticos e se desloca de `0%` a `-50%`. Quando o progresso reinicia, o segundo segmento ocupa a mesma posição visual do primeiro, evitando salto perceptível.

A visibilidade do texto de fundo foi melhorada reduzindo o blur, aumentando a opacidade e elevando levemente o contraste. Fora da lente, as palavras continuam difíceis de ler com precisão; dentro da lente, a mesma posição de animação aparece nítida e sincronizada.

## Ajuste Fino Das Lentes

As máscaras do hero ficam em `src/app/globals.css`, no seletor `.cinematic-hero` e nas classes:

- `eyeglasses-left-lens`
- `eyeglasses-right-lens`

Para calibrar a posição e o tamanho do reveal, ajuste estas variáveis em porcentagem dentro de `.cinematic-hero`:

- `--lens-left-x`
- `--lens-left-y`
- `--lens-left-w`
- `--lens-left-h`
- `--lens-right-x`
- `--lens-right-y`
- `--lens-right-w`
- `--lens-right-h`

Regra de ajuste: primeiro mova `x/y` até o reveal ficar dentro da lente real, depois reduza `w/h` para não invadir ponte, armação ou área externa. Só altere o `clip-path` quando o contorno da lente precisar mudar; para deslocamento e escala, as variáveis acima costumam ser suficientes.

## Relógios

A seção de relógios foi compactada em um grid único: coluna esquerda estreita com eyebrow, título menor, texto curto e CTA; coluna direita com um card principal de coleção e uma pilha densa com as demais imagens. O CTA agora pertence à coluna de texto, então não fica solto no topo da seção.

A imagem composta com quatro fotos (`TECHNOS-02.jpg`) foi usada como card principal de coleção. As outras imagens formam o mosaico menor ao lado, sem célula vazia e sem área morta. A seção também reduziu padding vertical, escala de texto e espaçamento entre cards.

## CTA De Rota No Header

O header tem dois CTAs no desktop:

- "Traçar rota", secundário, com ícone `Navigation`;
- "WhatsApp", principal, em vermelho.

O link de rota usado é:

`https://www.google.com/maps/dir/?api=1&destination=Rua%20Sadoc%20Corr%C3%AAa%2C%20154%2C%20Centro%2C%20Aragua%C3%ADna%20TO`

O CTA abre em nova aba com `target="_blank"` e `rel="noopener noreferrer"`, usando o aria-label `Traçar rota até a SOS Ótica no Google Maps`. Em telas menores, a navegação principal e os CTAs saem do topo para não poluir o header; "Traçar rota" aparece no menu mobile como ação secundária.

## Localização

A foto grande de Araguaína foi removida da faixa de localização porque estava perdendo qualidade e ficando muito cortada. A seção agora usa um bloco claro com endereço, CTAs e um mapa abstrato minimalista, evitando que uma imagem de baixa resolução vire protagonista.

Para trocar por uma foto melhor no futuro, prefira uma imagem horizontal em alta resolução dentro de `public/imagens/`. Use-a como elemento secundário e sem crop agressivo:

- `object-fit: contain` quando a foto inteira precisar aparecer;
- `object-position: center center` como ponto inicial;
- overlay branco/off-white leve se a imagem competir com o texto;
- nunca ampliar acima de 100% se a imagem já estiver no limite de qualidade.

## Notícias

"Visão em pauta" é uma curadoria editorial pequena, não um portal. A seção mostra no máximo 3 matérias da Exame com:

- thumbnail quando a listagem fornece imagem;
- categoria;
- fonte "Exame";
- tempo/data relativa quando disponível;
- título;
- link para a matéria original.

Os links externos usam `target="_blank"` e `rel="noopener noreferrer"`. Se a busca falhar, a Exame responder com erro, o HTML mudar ou uma imagem não puder ser extraída, o site mantém fallback sem quebrar a home.

Na v10, a thumbnail tem uma camada editorial base com rótulo "Visão" e linhas de matéria. Isso cobre tanto itens sem imagem quanto imagens externas que existam no HTML, mas não carreguem no navegador durante a renderização. Assim não aparece buraco visual.

## Cache

A busca usa `revalidate = 3600`, ou seja, o conteúdo pode ser reutilizado por até 1 hora antes de uma nova tentativa de atualização.

## Fallback

Se a busca falhar a ponto de impedir a extração de 3 itens, o site exibe estes 3 fallback estáticos:

- "Óculos sem aro voltam à moda entre celebridades e Geração Z"
- "A dona da Ray-Ban não vende mais só óculos - agora é medtech"
- "Google e Magic Leap revelam novo óculos com IA e realidade aumentada"

Cada fallback aponta para a matéria original na Exame. Quando não houver thumbnail confiável, o card usa um placeholder visual limpo.

## Favicon

O navegador controla o tamanho visual final do favicon na aba. O site não consegue forçar que ele ocupe mais pixels do que a UI do navegador permite.

O que foi ajustado foi a qualidade do asset: fundo branco, borda preta e símbolo preto em alto contraste. Os arquivos preparados são:

- `public/favicon.ico`
- `public/icon-32.png`
- `public/icon-48.png`
- `public/icon-192.png`
- `public/icon-512.png`
- `public/apple-touch-icon.png`
- `public/site.webmanifest`

`src/app/layout.tsx` aponta `metadata.icons` para o conjunto completo e usa `manifest: "/site.webmanifest"`. O arquivo antigo `manifest.webmanifest` foi mantido compatível.

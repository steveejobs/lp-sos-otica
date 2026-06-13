# Implementation Plan

## Entrega

1. Criar biblioteca de notícias da Exame em `src/lib/exame-news.ts`.
2. Criar rota API em `src/app/api/exame-news/route.ts`.
3. Criar seção visual em `src/components/ExameNewsSection.tsx`.
4. Inserir a seção antes das avaliações/depoimentos na home.
5. Estilizar a seção como lista editorial premium, sem imagens e sem carrossel.
6. Documentar cache, fallback e limites de conteúdo.
7. Validar com lint, build e screenshots desktop/mobile.

## Decisões

- O componente da home chama a mesma biblioteca usada pela rota API para evitar uma chamada HTTP interna durante SSR.
- O parser extrai apenas título, categoria, href, metadado e fonte.
- O fallback mantém links para matérias originais da Exame, sem copiar conteúdo de corpo.
- A animação usa `AnimatedReveal`, que já respeita `prefers-reduced-motion` via `framer-motion`.

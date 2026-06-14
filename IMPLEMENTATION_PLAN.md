# Implementation Plan

## Entrega v17

1. Reorganizar a jornada da home para uma narrativa mais premium e enxuta.
2. Reduzir as provas rápidas para três sinais comerciais fortes.
3. Criar `src/components/RoutineLensSection.tsx` com escolha guiada por rotina.
4. Usar fotos reais da pasta `public/galeria sos/` em `public/assets/store/`.
5. Refinar "Por dentro da SOS Ótica" com composição editorial e CTAs.
6. Trocar o mapa abstrato por iframe real do Google Maps.
7. Manter hero, WhatsApp, rota, schema, relógios, notícias e depoimentos reais.
8. Ajustar copy para tom mais editorial, sem textos longos.
9. Validar com lint, build e screenshots v17.

## Decisões

- A seção de rotina usa React client-side apenas para controlar o card ativo; não há carrossel.
- Foram escolhidas 4 imagens reais, mas a seção exibe 3 para preservar respiro visual.
- A foto infantil da pasta de galeria não foi usada nesta rodada.
- O mapa usa `output=embed` com o endereço oficial, porque o link compartilhado não é uma URL de embed direta.
- A home removeu blocos redundantes de catálogo para não ficar longa nem repetitiva.

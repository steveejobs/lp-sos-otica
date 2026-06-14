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

## Entrega v23

1. Criar `src/components/ProcessSection.tsx` com 5 abas: Receita, Lente, Montagem, Ajuste e Pronto.
2. Inserir a seção logo depois de `RoutineLensSection`, substituindo o bloco antigo de laboratório/agilidade.
3. Usar apenas CSS, SVG/HTML leve, lucide-react e framer-motion curto para a troca de conteúdo.
4. Criar linha de progresso conectando as 5 etapas e composição visual reutilizável de óculos/lente.
5. Garantir tabs reais com `role="tablist"`, `role="tab"`, `role="tabpanel"` e `aria-selected`.
6. Ajustar mobile com tabs horizontais roláveis, CTA grande e visual simplificado.
7. Respeitar `prefers-reduced-motion` com redução de transições/animações.
8. Validar com lint, build e screenshots v23.

## Decisões v23

- A seção não usa imagem, vídeo, Three.js, carrossel ou galeria; o visual é desenhado com CSS.
- O estado ativo muda por clique em `button`, com suporte a setas, Home e End para navegação por teclado.
- A promessa de até 30 minutos aparece apenas na etapa "Pronto" com a ressalva de receita, lente e disponibilidade.
- A altura foi limitada por card único centralizado para não competir com o hero.

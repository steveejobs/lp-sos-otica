# Walkthrough

## Dados Comerciais

Os dados oficiais ficam em `src/lib/site.ts`: nome, endereço, telefone, WhatsApp, rota, mapa embed, horário, parcelamento, promessa principal e schema LocalBusiness/Optician.

A promessa permanece padronizada como "Óculos pronto em até 30 minutos". A nota "Conforme receita, lente e disponibilidade." aparece de forma discreta.

## Qual Lente Combina Com Sua Rotina

A seção `src/components/RoutineLensSection.tsx` apresenta seis situações reais: telas, direção noturna, sol forte, urgência, conforto de armação e teste de visão.

Ao clicar em um card, a resposta lateral muda e o CTA "Falar com a SOS Ótica" usa o WhatsApp oficial. Não há carrossel; no mobile os cards ficam empilhados para toque confortável.

## Hero E Carregamento

O hero usa `src/components/LensHero.tsx` com a imagem `/assets/glasses/eyeglasses-hero.webp` em `next/image` com `priority` e `fetchPriority="high"`.

As letras animadas ficam invisíveis até o óculos disparar `onLoad`. Depois disso, a seção recebe `is-hero-ready` e o movimento do texto começa. Se o asset falhar, `onError` também libera o estado para evitar hero travado. O `prefers-reduced-motion` mantém o texto em posição estável.

Os textos repetidos do hero são decorativos e ficam dentro de camadas com `aria-hidden="true"`, mantendo o H1 real em `.sr-only`.

## Processo SOS

A seção `src/components/ProcessSection.tsx` foi inserida depois de `RoutineLensSection`, substituindo o bloco antigo de laboratório/agilidade. Ela explica a jornada do atendimento até a entrega em 5 abas: Receita, Lente, Montagem, Ajuste e Pronto.

As abas são `button` reais com `role="tablist"`, `role="tab"`, `role="tabpanel"` e `aria-selected`. Além do clique, a navegação por teclado aceita setas, Home e End. Ao trocar a etapa, a linha de progresso avança, o ícone ativo ganha destaque e o texto entra com fade/slide curto via `framer-motion`.

A composição visual é única e reutilizável: uma armação/lente desenhada em CSS, scan lines leves e marcadores de etapa com ícones `lucide-react`. Não foram usadas imagens pesadas, vídeo, Three.js ou galeria, porque a seção precisa ser compacta e rápida.

No mobile, as tabs viram uma faixa horizontal rolável com scroll suave, o visual reduz altura e o CTA ocupa a largura disponível. O `prefers-reduced-motion` é respeitado pelo CSS global e pelo `useReducedMotion`, removendo animações longas para quem prefere menos movimento.

## Mobile E Animações

Os espaços mobile foram reduzidos em `src/app/globals.css`: padding padrão das seções caiu para 48px, o hero mobile deixou de usar altura cheia desnecessária, a seção de processo ficou mais compacta e os gaps dos blocos críticos foram reduzidos.

`src/components/AnimatedReveal.tsx` revela imediatamente em mobile e em `prefers-reduced-motion`, evitando áreas vazias quando o IntersectionObserver demora ou quando o usuário rola rápido.

Os depoimentos em `src/components/ui/testimonials-columns-1.tsx` usam animação CSS linear com `translate3d`, sem loop pesado via JS. O primeiro conjunto de cards permanece real e focável; a duplicata usada apenas para continuidade visual tem `aria-hidden="true"`. No mobile e em reduced motion, a animação é desligada e a duplicata decorativa não é exibida.

## Fotos Reais Da Loja

As imagens vieram de `public/galeria sos/` e foram normalizadas para:

- `public/assets/store/store-01.webp`
- `public/assets/store/store-02.webp`
- `public/assets/store/store-03.webp`
- `public/assets/store/store-04.webp`

Foram usadas imagens de atendimento e loja real. A foto infantil da pasta não foi usada. A seção continua editorial, com 1 imagem grande e 2 imagens menores, porque uma galeria comum deixaria a LP mais pesada e menos focada em conversão.

## Mapa Real

A localização agora usa iframe real do Google Maps com:

`https://www.google.com/maps?q=-7.1920373,-48.2087301&z=19&output=embed`

O iframe tem `loading="lazy"`, `referrerPolicy="no-referrer-when-downgrade"` e título acessível. O botão "Traçar rota" usa coordenadas exatas:

`https://www.google.com/maps/dir/?api=1&destination=-7.1920373,-48.2087301&travelmode=driving`

## Ordem Da Página

A home foi reorganizada para:

1. Hero
2. Provas rápidas
3. Rotina/lentes
4. Processo SOS em 5 abas
5. Fotos reais da loja
6. Relógios e acessórios
7. Tendências em óculos
8. Depoimentos reais
9. Localização com mapa
10. FAQ
11. CTA final

## Cuidados Contra Poluição

Foram removidos blocos redundantes de catálogo da home. As provas comerciais aparecem distribuídas: prazo e teste no início, fotos reais no meio, reviews antes da localização, horário/pagamento/endereço no contato.

Os depoimentos continuam usando dados manuais fornecidos pelo cliente. A API do Google ainda não alimenta a seção pública. Não usamos fotos falsas nos depoimentos; os avatares são iniciais.

## Validação Final

Validação técnica final:

- `npm run lint`: aprovado.
- `npm run build`: aprovado.
- Rotas validadas por DOM usando coordenadas exatas.
- Iframe do mapa validado com coordenadas, zoom 19, `loading="lazy"` e `referrerPolicy`.
- WhatsApp validado com link oficial.
- 5 abas do processo clicadas em desktop, mobile e reduced motion.
- Viewports mobile testados sem overflow horizontal: 390x844, 375x812, 430x932 e 360x800.

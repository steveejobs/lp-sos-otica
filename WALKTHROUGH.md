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

## Nota Google Reviews

A nota Google foi reforçada em três pontos usando `src/components/GoogleRatingBadge.tsx`: chip compacto no hero, card lateral na seção `Clientes que já confiaram na SOS` e linha curta antes do CTA final.

Os dados usados são fixos e consistentes: nota `4,9`, `92 avaliações` e fonte `Google Reviews`. O card de depoimentos mostra label pequeno, estrelas amarelas, nota grande, contagem de avaliações e microtexto "Avaliação média no Google".

As estrelas são visuais. O componente marca as estrelas e o conteúdo decorativo com `aria-hidden="true"` e expõe o texto acessível por `aria-label="Avaliação 4,9 de 5 no Google, com 92 avaliações"`, evitando que leitores de tela anunciem estrela por estrela.

No mobile, o chip do hero quebra para uma segunda linha dentro do painel do CTA, o card dos depoimentos fica abaixo do título da seção quando a grade passa para uma coluna e a frase do CTA final usa a variante inline para não repetir um bloco grande.

## Processo SOS

A versão antiga de 5 abas com card grande, ilustração interna de óculos e visual de dashboard foi removida. `src/components/ProcessSection.tsx` agora une processo e laboratório/agilidade em uma timeline editorial compacta com o título "Como a SOS resolve seu óculos".

As 5 etapas continuam clicáveis: Receita, Lente, Montagem, Ajuste e Pronto. Cada etapa é um `button` real com `role="tab"`, `aria-selected` e suporte a setas, Home e End. O painel de resumo abaixo usa `role="tabpanel"` e atualiza texto curto com microanimação apenas em opacity/transform.

A composição visual é apenas linha fina, bolinhas/ícones `lucide-react`, vermelho da marca no passo ativo e amarelo como detalhe sutil. Não há imagem grande, ilustração pesada, vídeo, Three.js, carrossel ou card gigante.

No desktop, a timeline é horizontal. No mobile, ela vira uma timeline vertical compacta sem overflow horizontal; o CTA ocupa a largura disponível. O `prefers-reduced-motion` é respeitado pelo CSS global e pelo `useReducedMotion`.

## Mobile E Animações

Os espaços mobile foram reduzidos em `src/app/globals.css`: padding padrão das seções caiu para 48px, o hero mobile deixou de usar altura cheia desnecessária, a seção de processo virou timeline vertical compacta e os gaps dos blocos críticos foram reduzidos.

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

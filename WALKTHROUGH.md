# Walkthrough

## Dados Comerciais

Os dados oficiais ficam em `src/lib/site.ts`: nome, endereço, telefone, WhatsApp, rota, mapa embed, horário, parcelamento, promessa principal e schema LocalBusiness/Optician.

Os links de WhatsApp são gerados por `buildWhatsAppUrl(message)`, usando o telefone `5563992938550` e `encodeURIComponent(message)`. A mensagem padrão dos CTAs genéricos é: "Olá, S.O.S Ótica! Vim pelo site e quero atendimento."

A promessa permanece padronizada como "Óculos pronto em até 30 minutos". A nota "Conforme receita, lente e disponibilidade." aparece de forma discreta.

## Qual Lente Combina Com Sua Rotina

A seção `src/components/RoutineLensSection.tsx` apresenta seis situações reais: telas, direção noturna, sol forte, urgência, conforto de armação e teste de visão.

Ao clicar em um card, a resposta lateral muda e o CTA usa o WhatsApp oficial com mensagem personalizada para a escolha ativa. Não há carrossel; no mobile os cards ficam empilhados para toque confortável.

Mensagens personalizadas da escolha guiada:

- Uso muito celular e computador: "Olá, S.O.S Ótica! Vim pelo site e escolhi a opção: uso muito celular e computador. Quero orientação para lentes de tela."
- Dirijo à noite: "Olá, S.O.S Ótica! Vim pelo site e escolhi a opção: dirijo à noite. Quero saber sobre lentes que ajudem no conforto contra faróis e reflexos."
- Sinto incômodo com sol forte: "Olá, S.O.S Ótica! Vim pelo site e escolhi a opção: sinto incômodo com sol forte. Quero saber sobre óculos solares com proteção UV."
- Preciso resolver rápido: "Olá, S.O.S Ótica! Vim pelo site e escolhi a opção: preciso resolver rápido. Quero saber se meu óculos pode ficar pronto em até 30 minutos."
- Quero conforto no rosto: "Olá, S.O.S Ótica! Vim pelo site e escolhi a opção: quero conforto no rosto. Quero ajuda para escolher uma armação confortável."
- Quero fazer teste de visão: "Olá, S.O.S Ótica! Vim pelo site e escolhi a opção: quero fazer teste de visão. Quero saber como funciona o teste no local."

## Hero E Carregamento

O hero usa `src/components/LensHero.tsx` com a imagem `/assets/glasses/eyeglasses-hero.webp` em `next/image` com `priority` e `fetchPriority="high"`.

As letras animadas decorativas só são montadas depois que o óculos dispara `onLoad`. Depois disso, a seção recebe `is-hero-ready` e o movimento CSS do texto começa. O `prefers-reduced-motion` mantém o texto em posição estável.

Os textos repetidos do hero são decorativos e ficam dentro de camadas com `aria-hidden="true"`, mantendo apenas o H1 real acessível em `.sr-only`. A animação das letras não usa mais `requestAnimationFrame`; ela é CSS linear e fica pausada até `heroImageLoaded=true`.

## Nota Google Reviews

A nota Google foi reforçada em três pontos usando `src/components/GoogleRatingBadge.tsx`: chip compacto no hero, card lateral na seção `Clientes que já confiaram na SOS` e linha curta antes do CTA final.

Os dados usados são fixos e consistentes: nota `4,9`, `92 avaliações` e fonte `Google Reviews`. O card de depoimentos mostra label pequeno, estrelas amarelas, nota grande, contagem de avaliações e microtexto "Avaliação média no Google".

As estrelas são visuais. O componente marca as estrelas e o conteúdo decorativo com `aria-hidden="true"` e expõe o texto acessível por `aria-label="Avaliação 4,9 de 5 no Google, com 92 avaliações"`, evitando que leitores de tela anunciem estrela por estrela.

No mobile, o chip do hero quebra para uma segunda linha dentro do painel do CTA, o card dos depoimentos fica abaixo do título da seção quando a grade passa para uma coluna e a frase do CTA final usa a variante inline para não repetir um bloco grande.

## Processo SOS

A versão antiga de 5 abas com card grande, ilustração interna de óculos e visual de dashboard foi removida. `src/components/ProcessSection.tsx` agora une processo e laboratório/agilidade em uma timeline editorial compacta com o título "Como a SOS resolve seu óculos".

As 5 etapas aparecem como uma lista editorial estática: Receita, Lente, Montagem, Ajuste e Pronto. A seção usa `role="list"`/`role="listitem"` e textos curtos para reduzir altura, evitar estado duplicado e manter a leitura direta.

A composição visual foi refinada para parecer mais editorial: linha fina, ícones `lucide-react` menores, textos curtos, menos bordas, sem sombra pesada e sem painel com aparência de dashboard. O vermelho da marca fica como estado ativo discreto e o amarelo aparece apenas como detalhe sutil. Não há imagem grande, ilustração pesada, vídeo, Three.js, carrossel ou card gigante.

No desktop, a timeline é horizontal. No mobile, ela vira uma timeline vertical compacta sem overflow horizontal e com menos altura entre etapas. O `prefers-reduced-motion` é respeitado pelo CSS global.

## Mobile E Animações

Os espaços mobile foram reduzidos em `src/app/globals.css`: padding padrão das seções caiu para 44px e, em telas até 430px, para 40px. O hero mobile continua contido no primeiro viewport, a seção de processo virou timeline vertical compacta e os gaps dos blocos críticos foram reduzidos.

`src/components/AnimatedReveal.tsx` revela imediatamente em mobile e em `prefers-reduced-motion`, evitando áreas vazias quando o IntersectionObserver demora ou quando o usuário rola rápido.

Os depoimentos em `src/components/ui/testimonials-columns-1.tsx` usam animação CSS linear com `translate3d`, sem loop frame a frame em JS. O primeiro conjunto de cards permanece real e focável; a duplicata usada apenas para continuidade visual tem `aria-hidden="true"`. As sombras dos cards foram reduzidas. No mobile e em reduced motion, a animação é desligada, `will-change` volta para `auto`, a duplicata decorativa não é exibida e a leitura fica por scroll manual da página.

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
4. Processo SOS em 5 etapas
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
- Capturas v32 geradas: `.tmp/visual-audit/whatsapp-hero-v32.png`, `.tmp/visual-audit/whatsapp-guided-choice-v32.png` e `.tmp/visual-audit/whatsapp-mobile-v32.png`.
- WhatsApp v32 validado no hero, CTA final, localização e nas 6 opções da escolha guiada em desktop e mobile, com telefone `+55 63 99293-8550`, acentos preservados via `encodeURIComponent` e sem a mensagem antiga.
- Capturas v29 geradas: `.tmp/visual-audit/final-desktop-v29.png`, `.tmp/visual-audit/final-mobile-v29.png`, `.tmp/visual-audit/hero-load-v29.png`, `.tmp/visual-audit/testimonials-motion-v29.png` e `.tmp/visual-audit/processo-polido-v29.png`.
- Hero validado com um único H1 real, camadas decorativas `aria-hidden="true"`, imagem com `fetchpriority="high"` e letras liberadas apenas após `is-hero-ready`.
- Depoimentos validados com `testimonialsMarquee` linear no desktop, duplicata `aria-hidden="true"` e marquee desativado no mobile.
- Rotas validadas por DOM usando coordenadas exatas.
- Iframe do mapa validado com coordenadas, zoom 19, `loading="lazy"` e `referrerPolicy`.
- WhatsApp validado com link oficial.
- Timeline de 5 etapas do processo verificada em desktop, mobile e reduced motion.
- Viewports mobile testados sem overflow horizontal: 390x844, 375x812, 430x932 e 360x800.

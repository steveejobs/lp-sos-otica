# Walkthrough

## Dados Comerciais

Os dados oficiais ficam em `src/lib/site.ts`: nome, endereço, telefone, WhatsApp, rota, mapa embed, horário, parcelamento, promessa principal e schema LocalBusiness/Optician.

A promessa permanece padronizada como "Óculos pronto em até 30 minutos". A nota "Conforme receita, lente e disponibilidade." aparece de forma discreta.

## Qual Lente Combina Com Sua Rotina

A seção `src/components/RoutineLensSection.tsx` apresenta seis situações reais: telas, direção noturna, sol forte, urgência, conforto de armação e teste de visão.

Ao clicar em um card, a resposta lateral muda e o CTA "Falar com a SOS Ótica" usa o WhatsApp oficial. Não há carrossel; no mobile os cards ficam empilhados para toque confortável.

## Processo SOS

A seção `src/components/ProcessSection.tsx` foi inserida depois de `RoutineLensSection` e antes do bloco de laboratório. Ela explica a jornada do atendimento até a entrega em 5 abas: Receita, Lente, Montagem, Ajuste e Pronto.

As abas são `button` reais com `role="tablist"`, `role="tab"`, `role="tabpanel"` e `aria-selected`. Além do clique, a navegação por teclado aceita setas, Home e End. Ao trocar a etapa, a linha de progresso avança, o ícone ativo ganha destaque e o texto entra com fade/slide curto via `framer-motion`.

A composição visual é única e reutilizável: uma armação/lente desenhada em CSS, scan lines leves e marcadores de etapa com ícones `lucide-react`. Não foram usadas imagens pesadas, vídeo, Three.js ou galeria, porque a seção precisa ser compacta e rápida.

No mobile, as tabs viram uma faixa horizontal rolável com scroll suave, o visual reduz altura e o CTA ocupa a largura disponível. O `prefers-reduced-motion` é respeitado pelo CSS global e pelo `useReducedMotion`, removendo animações longas para quem prefere menos movimento.

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
5. Laboratório de precisão
6. Fotos reais da loja
7. Relógios e acessórios
8. Tendências em óculos
9. Depoimentos reais
10. Localização com mapa
11. FAQ
12. CTA final

## Cuidados Contra Poluição

Foram removidos blocos redundantes de catálogo da home. As provas comerciais aparecem distribuídas: prazo e teste no início, fotos reais no meio, reviews antes da localização, horário/pagamento/endereço no contato.

Os depoimentos continuam usando dados manuais fornecidos pelo cliente. A API do Google ainda não alimenta a seção pública. Não usamos fotos falsas nos depoimentos; os avatares são iniciais.

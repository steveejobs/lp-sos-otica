# Walkthrough

## Dados Comerciais

Os dados oficiais ficam em `src/lib/site.ts`: nome, endereço, telefone, WhatsApp, rota, mapa embed, horário, parcelamento, promessa principal e schema LocalBusiness/Optician.

A promessa permanece padronizada como "Óculos pronto em até 30 minutos". A nota "Conforme receita, lente e disponibilidade." aparece de forma discreta.

## Qual Lente Combina Com Sua Rotina

A seção `src/components/RoutineLensSection.tsx` apresenta seis situações reais: telas, direção noturna, sol forte, urgência, conforto de armação e teste de visão.

Ao clicar em um card, a resposta lateral muda e o CTA "Falar com a SOS Ótica" usa o WhatsApp oficial. Não há carrossel; no mobile os cards ficam empilhados para toque confortável.

## Fotos Reais Da Loja

As imagens vieram de `public/galeria sos/` e foram normalizadas para:

- `public/assets/store/store-01.webp`
- `public/assets/store/store-02.webp`
- `public/assets/store/store-03.webp`
- `public/assets/store/store-04.webp`

Foram usadas imagens de atendimento e loja real. A foto infantil da pasta não foi usada. A seção continua editorial, com 1 imagem grande e 2 imagens menores, porque uma galeria comum deixaria a LP mais pesada e menos focada em conversão.

## Mapa Real

A localização agora usa iframe real do Google Maps com:

`https://maps.google.com/maps?&q=R.%20Sadoc%20Correa%2C%20154%20-%20Central%2C%20Aragua%C3%ADna%20-%20TO%2C%2077803-060%2C%20Brasil&z=17&output=embed`

O iframe tem `loading="lazy"`, `referrerPolicy="no-referrer-when-downgrade"` e título acessível. O botão "Traçar rota" continua usando a URL oficial de rota.

## Ordem Da Página

A home foi reorganizada para:

1. Hero
2. Provas rápidas
3. Rotina/lentes
4. Laboratório de precisão
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

# Walkthrough

## Dados Comerciais

Os dados oficiais ficam em `src/lib/site.ts`: nome, endereço, telefone, WhatsApp, rota, horário, parcelamento, promessa principal e schema LocalBusiness/Optician.

A promessa foi padronizada para "Óculos pronto em até 30 minutos". A nota "Conforme receita, lente e disponibilidade." aparece de forma discreta, sem ser repetida em todos os blocos.

## CTAs

Os CTAs usam o link oficial:

`https://api.whatsapp.com/send/?phone=5563992938550&text=Ol%C3%A1%2C+S.O.S+%C3%93tica%21&type=phone_number&app_absent=0`

O CTA de rota usa:

`https://www.google.com/maps/dir/?api=1&destination=R.%20Sadoc%20Correa%2C%20154%20-%20Central%2C%20Aragua%C3%ADna%20-%20TO%2C%2077803-060%2C%20Brasil`

## Depoimentos

A seção "Clientes que já confiaram na SOS" usa reviews manuais fornecidos pelo cliente em `src/data/testimonials.ts`.

A API do Google ainda não foi conectada para alimentar essa seção. A rota antiga continua existindo como infraestrutura, mas a prova social da home usa os dados revisados manualmente.

Não usamos fotos falsas, randomuser.me ou Unsplash nos depoimentos. Os avatares são iniciais dos clientes, com visual neutro e compatível com a marca.

O componente de colunas fica em `src/components/ui/testimonials-columns-1.tsx`, usa `motion/react`, anima verticalmente em loop, pausa em hover/focus e respeita `prefers-reduced-motion`.

## Fotos Da Loja

A seção "Por dentro da SOS Ótica" foi criada para receber fotos reais da loja em formato editorial, não como galeria comum.

Paths esperados:

- `public/assets/store/store-01.webp`
- `public/assets/store/store-02.webp`
- `public/assets/store/store-03.webp`
- `public/assets/store/store-04.webp`

Enquanto as fotos não existem, a seção mostra placeholders premium com textos como "Foto da loja", "Atendimento" e "Vitrine". Nenhuma imagem externa é usada.

## Localização

A seção de contato mostra "Estamos no Centro de Araguaína", endereço curto, horário, WhatsApp, até 12x no cartão e teste de visão no local. O objetivo é ser confiável e escaneável, sem virar bloco pesado.

## FAQ

O FAQ foi reduzido para perguntas reais e curtas sobre prazo, teste de visão, endereço, parcelamento e horário.

## Notas Técnicas

O projeto usa Next + TypeScript e CSS global. Ele não tem Tailwind nem shadcn configurados. A pasta `src/components/ui` foi criada para manter o componente solicitado isolado e facilitar uma futura adoção de shadcn se necessário.

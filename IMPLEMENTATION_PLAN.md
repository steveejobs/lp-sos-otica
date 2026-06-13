# Implementation Plan

## Entrega v16

1. Centralizar dados comerciais reais em `src/lib/site.ts`.
2. Padronizar toda a promessa para "Óculos pronto em até 30 minutos".
3. Atualizar CTAs de WhatsApp e rota com URLs oficiais.
4. Atualizar FAQ e schema LocalBusiness/Optician.
5. Criar `src/data/testimonials.ts` com reviews manuais fornecidos pelo cliente.
6. Criar `src/components/ui/testimonials-columns-1.tsx` usando `motion/react`.
7. Substituir a seção antiga de reviews por colunas verticais animadas.
8. Criar `src/components/StorePhotosSection.tsx` com composição editorial e placeholders.
9. Refinar localização com cards compactos para horário, WhatsApp, 12x e teste de visão.
10. Validar com lint, build e screenshots v16.

## Decisões

- O projeto é Next + TypeScript, mas não usa Tailwind nem shadcn. Foi criada a pasta `src/components/ui` para isolar o componente solicitado e manter compatibilidade futura com a estrutura shadcn.
- Como Tailwind não está configurado, o visual do componente foi aplicado em `src/app/globals.css`.
- Não foram usadas fotos falsas, randomuser ou Unsplash nos depoimentos.
- Os avatares dos reviews são iniciais dos clientes.
- A API do Google permanece preparada no código, mas a seção pública usa dados manuais.

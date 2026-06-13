# SOS Ótica Landing Page Spec

## Visão em pauta

A home inclui uma seção editorial minimalista chamada "Visão em pauta", posicionada perto do fim da página e antes da área de avaliações/depoimentos.

Objetivo:

- adicionar autoridade editorial ao tema óculos;
- manter o foco principal em WhatsApp, localização, confiança e conversão;
- exibir no máximo 3 notícias;
- não reproduzir imagens, corpo das matérias ou conteúdo completo da Exame.

Fonte:

- https://exame.com/noticias-sobre/oculos/

Cada item exibido contém:

- categoria;
- título;
- metadado de tempo/data quando disponível;
- fonte fixa "Exame";
- link externo para a matéria original;
- CTA "Ler na Exame".

A seção também inclui o CTA final "Ver mais na Exame" apontando para a página de origem.

## Regras Técnicas

- A busca dos dados fica em `src/lib/exame-news.ts`.
- A rota server-side fica em `src/app/api/exame-news/route.ts`.
- A rota e o render usam cache com revalidação de 1 hora.
- Se a busca falhar ou o HTML da Exame mudar, o site usa 3 itens estáticos de fallback.
- Links externos usam `target="_blank"` e `rel="noopener noreferrer"`.

# Walkthrough

## Hero

O hero usa somente o estado de óculos de grau. A alternância Grau/Solar e os controles de pular/pausar animação foram removidos para manter o primeiro viewport focado no conceito das lentes.

O texto de fundo existe em uma camada borrada e de menor contraste. A mesma sequência textual aparece dentro das lentes por meio de dois painéis recortados, mantendo a leitura nítida apenas nas áreas das lentes.

## Ajuste Fino Das Lentes

As máscaras do hero ficam em `src/app/globals.css`, no seletor `.cinematic-hero` e nas classes:

- `eyeglasses-left-lens`
- `eyeglasses-right-lens`

Para calibrar a posição e o tamanho do reveal, ajuste estas variáveis em porcentagem dentro de `.cinematic-hero`:

- `--lens-left-x`
- `--lens-left-y`
- `--lens-left-w`
- `--lens-left-h`
- `--lens-right-x`
- `--lens-right-y`
- `--lens-right-w`
- `--lens-right-h`

Regra de ajuste: primeiro mova `x/y` até o reveal ficar dentro da lente real, depois reduza `w/h` para não invadir ponte, armação ou área externa. Só altere o `clip-path` quando o contorno da lente precisar mudar; para deslocamento e escala, as variáveis acima costumam ser suficientes.

## Notícias

"Visão em pauta" é uma curadoria editorial pequena, não um portal. A seção mostra no máximo 3 matérias da Exame com:

- thumbnail quando a listagem fornece imagem;
- categoria;
- fonte "Exame";
- tempo/data relativa quando disponível;
- título;
- link para a matéria original.

Os links externos usam `target="_blank"` e `rel="noopener noreferrer"`. Se a busca falhar, a Exame responder com erro, o HTML mudar ou uma imagem não puder ser extraída, o site mantém fallback sem quebrar a home.

## Cache

A busca usa `revalidate = 3600`, ou seja, o conteúdo pode ser reutilizado por até 1 hora antes de uma nova tentativa de atualização.

## Fallback

Se a busca falhar a ponto de impedir a extração de 3 itens, o site exibe estes 3 fallback estáticos:

- "Óculos sem aro voltam à moda entre celebridades e Geração Z"
- "A dona da Ray-Ban não vende mais só óculos - agora é medtech"
- "Google e Magic Leap revelam novo óculos com IA e realidade aumentada"

Cada fallback aponta para a matéria original na Exame. Quando não houver thumbnail confiável, o card usa um placeholder visual limpo.

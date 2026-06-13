# Walkthrough

## Seção Minimalista

"Visão em pauta" foi desenhada como uma curadoria editorial pequena, não como um portal de notícias. A seção usa fundo claro, tipografia menor, lista de 3 cards horizontais e CTAs discretos para não competir com WhatsApp, localização, avaliações e demais pontos comerciais do site.

## Conteúdo Exibido

O site exibe apenas metadados básicos das matérias da Exame:

- categoria;
- título;
- tempo/data relativa quando disponível;
- fonte "Exame";
- link para a matéria original.

O corpo completo das matérias, imagens e qualquer conteúdo integral continuam exclusivamente na Exame. O botão "Ler na Exame" abre a matéria original em nova aba, e "Ver mais na Exame" abre a listagem fonte.

## Cache

A busca usa `revalidate = 3600`, ou seja, o conteúdo pode ser reutilizado por até 1 hora antes de uma nova tentativa de atualização. Isso evita fetch em toda visita e reduz dependência direta da página externa em cada acesso.

## Fallback

Se a busca falhar, a Exame responder com erro ou o HTML mudar a ponto de impedir a extração de 3 itens, o site exibe estes 3 fallback estáticos:

- "Óculos sem aro voltam à moda entre celebridades e Geração Z"
- "A dona da Ray-Ban não vende mais só óculos - agora é medtech"
- "Google e Magic Leap revelam novo óculos com IA e realidade aumentada"

Cada fallback também aponta para a matéria original na Exame.

## Ajuste Fino Das Lentes

As máscaras do hero v7 ficam em `src/app/globals.css`, dentro dos seletores `.cinematic-hero` e `.cinematic-glasses-solar`.

Para calibrar Grau e Solar, ajuste estas variáveis em porcentagem:

- `--lens-left-x`
- `--lens-left-y`
- `--lens-left-w`
- `--lens-left-h`
- `--lens-right-x`
- `--lens-right-y`
- `--lens-right-w`
- `--lens-right-h`

As classes de formato são:

- `eyeglasses-left-lens`
- `eyeglasses-right-lens`
- `sunglasses-left-lens`
- `sunglasses-right-lens`

Regra de ajuste: primeiro mova `x/y` até o reveal ficar dentro da lente real, depois reduza `w/h` para não invadir ponte, armação ou hastes. Só altere o `clip-path` quando a proporção da lente mudar; para deslocamento e escala, as variáveis acima são suficientes.

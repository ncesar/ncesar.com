---
title: Como o render do React funciona e o que é o useMemo?
description: Entenda como funciona o render e por que utilizar o Memo do React
date: '2020-06-22 09:24:59'
thumbnail: assets/img/maxresdefault.jpg
category: React
background: '#3154D8'
---
Com o React Hooks, um novo hook veio à tona, ele foi o `useMemo.` A pergunta é, o que é esse memo e pra que ele serve?

Antes de falar do memo a gente precisa entender como o `render` do React funciona.

De uma forma bem resumida, a renderização do React é feita da seguinte forma:

1. O React armazena em sua memória o DOM(os elementos) atual.\
2. Após acontecer algum reload ou nova modificação no DOM, o React age da seguinte forma:\
   O meu `primeiroDOM` é igual ao meu `atualDOM`?\
   Sendo o `primeiroDOM` a página anterior do React com seus componentes e o `atualDOM` a mesma página mas com componentes possivelmente diferentes. \
3. Se o `primeiroDOM` for diferente do `atualDOM`, ele efetua um re-render(renderização da página), se não, o DOM não muda e a página continua a mesma.

De uma forma mais prática, se eu crio um elemento com o título *Eu gosto da minha família* e depois altero o título desse elemento para: *Eu gosto **muito** da minha família*, o re-render vai acontecer por que o conteúdo se alterou.

Agora voltando para o React.memo, precisamos entender mais uma coisa, o que é o Memoization ou Memorização?

Memorização, de uma forma mais fácil de se pronunciar, é uma técnica de otimização que passa ou recebe uma função complexa para ser memorizada. Quando a memorização acontece, o resultado dela é salvo na memória. Então se a gente passar a mesma função que já foi memorizada e o resultado for o mesmo do anterior, o resto da função não é executada, para obter performance.

Outro exemplo prático de memorização é se a gente tem uma função que soma 1 + 1 e o resultado é 2, se essa função for chamada novamente utilizando o Memo, ela não vai somar 1 + 1 novamente, por que ela vai perceber que nada mudou e que o resultado continua sendo 2.

Um exemplo em ReactJS:

`const memoizedValue = useMemo(() => sum(a, b));`

No exemplo acima estando memorizando o valor da função sum, que vai somar 2 valores e é exatamente como eu citei no nosso exemplo.

Obviamente aqui, não precisamos necessariamente usar o useMemo, se tudo o que estamos fazendo é memorizar uma simples soma. Mas se houvesse uma função mais complexa para calcular essa soma, useMemo seria útil!

Evitando o render desnecessário de childs:

\`\``JSX\
function Parent(a, b) {   

// Vai pular o re-render se o argumento A não mudar

const childA = React.useMemo(() => <ChildA item={a} />, \[a]);   

// Vai pular o re-render se o B não mudar.

const childB = React.useMemo(() => <ChildB item={b} />, \[b]);

  return (     

<>       {childA}       {childB}\
</>   ) }

\`\``

Quando não utilizar o `useMemo`?

Antes de utilizar o `useMemo` precisamos perguntar a nós mesmos: Essa função ou componente pode realmente impactar no meu desempenho? Por que se a função é uma soma simples como foi exemplificado aqui, não vale a pena. Não confunda as coisas, não podemos sair colocando `useMemo` em tudo que a gente achar que isso pode acabar piorando a performance, por que ainda sim ele vai precisar fazer a verificação caso os valores tenham sido alterados. 

Não comece o seu código já colocando o useMemo, escreva todas as funções e lógicas e só depois, faça outra visita ao seu código e reveja a necessidade de utilizar useMemo.

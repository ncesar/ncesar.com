---
title: O que é Hoisting no Javascript
description: >-
  É o comportamento padrão do Javascript de mover as declarações sempre pro topo
  da "call stack"
date: '2020-02-18 10:35:23'
thumbnail: assets/img/Sem título.png
category: JS
background: '#e2b40b'
---
<!--StartFragment-->

Você sabe o que é o Hoisting no Javascript?

É o comportamento padrão do Javascript de mover as declarações sempre pro topo da "call stack"(lugar da engine do Javascript que mantêm guardado e organizado o código que está sendo executado).



E falando de Hoisting, tem uma pergunta que cai em bastante entrevistas de emprego... Ela é a seguinte:

O que iria acontecer no código à esquerda da imagem abaixo? No início, eu pensava que ele simplesmente iria imprimir que minha comida favorita era maçã e a nova comida favorita seria sushi. Normal, é a "lógica", certo?

![JS Image](assets/img/Sem título.png "Hoisting image")

Errado! O Javascript pode ter inicializado o primeiro var comida = 'maçã'; , mas quando chega no novo var comida = 'sushi'; ele primeiro inicia a var com o valor de undefined, e só depois, pula para a próxima linha para definir o seu valor.



Pensando de um modo mais abstrato, o Javascript acha uma declaração de uma var durante a sua compilação com valor undefined, depois ele adiciona isso na memória e só mais tarde durante a execução, não DECLARAÇÃO do código, ele vai definir o seu real valor.

Então em termos de código seira:

memoriaDoJavascript = {

comida: undefined

}

..depois quando a engine chegar na linha de execução

memoriaDoJavascript = {

comida: 'sushi';

}

<!--StartFragment-->

É diferente utilizando let, const, classes e funções? Sim, o motivo é que apesar deles entrarem no contexto de serem "Hoisted", eles não são inicializados(nem com undefined), como é o exemplo do var. 

Ou seja, o javascript sabe que tem um let, uma const ou uma classe guardada na memória, ele só não inicializa ela como um var. Elas só serão executadas quando receberem um valor, seja ele undefined ou qualquer outro. Isso é chamado de "Zona Temporal Morta", que é o tempo entre a criação da variável e a sua inicialização. 

Por isso que se você tentar aplicar o código do exemplo com let, você vai receber um erro de variável não inicializada.

<!--EndFragment-->

<!--EndFragment-->

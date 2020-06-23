---
title: Recebendo diversos parâmetros em uma função Javascript
description: Crie uma função que recebe quantos parâmetros você quiser!
date: '2020-06-22 11:14:22'
thumbnail: assets/img/1_h71GYjHl_uS-W5V5G1Fx6A.png
category: JS
background: '#e2b40b'
---
Você sabia que é possível receber quantos parâmetros você quiser em uma função javascript, sem definir eles?

Exemplo:

Invés de ter uma \`function(parametro1, param2, param3, param4)\`

Podemos utilizar a keyword \`arguments\`, dessa forma:

\`function(arguments)\` e continuamos a função…\
E o que o arguments faz? Em resumo, ele vai pegar todos os parâmetros que foram passados na execução da função, armazenar na sua memória(do javascript) e se você retornar, ele vai ser um objeto a princípio.

Então se você quisesse criar uma função que retorna o primeiro argumento de uma função, ela seria dessa forma:



function argumentos(arguments) {

return arguments;

}



Executando a função: argumentos(1, 2, 3, 4);



Nós passamos 4 entradas(não importa o tipo). E o retorno seria 1. Por quê? Por que o número 1 foi o primeiro argumento recebido. Precisamos lembrar que o arguments por padrão é um objeto..



Caso você queira retornar o objeto de número dois, é só dar um return arguments\[1], como se fosse um array, por que esse objeto tem um corpo de um array.



E se eu quisesse transformar esse objeto em um array para criar uma função que conta quantos argumentos foram recebidos?

Você poderia fazer de 1 forma:



1. function argumentos(...args){

return args.length;

}



Na função acima, o spread operator transforma o args(Argumento, que podemos chamar de qualquer jeito) em um array e isso vai devolver a quantidade de args passada. As possibilidades são infinitas, é só usar a criatividade :)

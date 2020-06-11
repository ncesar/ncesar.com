---
title: Precisamos ter cuidado ao tentar utilizar features novas
description: Nem sempre o que é novo é o melhor a se utilizar
date: '2020-06-11 12:15:46'
thumbnail: assets/img/Sem título.png
category: Dicas
background: '#80BF5A'
---
Hoje no trabalho me aconteceu uma coisa engraçada. Eu sigo a ideia de um livro(programador pragmático) e em uma das suas falas ele diz que devemos sempre desenvolver o nosso melhor código e deixar um ambiente melhor do que era antes de chegarmos.

Mas deixando esses papos motivacionais de lado e voltando para a realidade, eu precisava fazer uma função que recebe dois parâmetros e fizesse uma validação. A diferença é que o param2 iria ser outra função já existente.

O motivo de precisar disso? É por que eu já tinha duas funções que efetuavam esse comportamento que eu preciso mas recebiam parâmetros diferentes, ou seja, duas funções idênticas e que poderiam ser refeitas como uma só.

Ficaria mais ou menos desse jeito(a função está de forma simplificada):\
`const funcaoNormal = (param1, param2) => return param2(param1);`

E agora chamando essa função seria:\
`funcaoNormal(param1, param2);`

Tudo normal, mas eu tinha a opção de utilizar o Currying, nova função do ES6, ou seja, é novidade e é sempre bom usar as coisas novas, certo? Depende..

Com o currying não iria mudar muito, iria ficar mais ou menos assim:\
`const funcaoCurrying = param1 => param2 => return param2(param1);`

E chamando ela seria um pouco diferente:\
`funcaoCurrying(param1)(param2);`

Eu pensei pô, vou usar a feature nova do ES6, o código vai parecer mais bonito e vai demonstrar que eu sei. Mas ao mesmo tempo eu me perguntei, se as 2 funções fazem EXATAMENTE a mesma coisa, qual a diferença? Meu primeiro pensamento foi: Performance!

Entrei no JSBench.me e no JSBen.ch e testei 2 casos desses códigos e acabei descobrindo que seguindo a ideia de uma função normal tinha um desempenho muito melhor, além de ser algo que é entendido pela maior parte dos programadores.

No final, os resultados foram que eu pude revisar melhor o conceito de Currying e consegui entregar um código melhor.

Caso tenha ficado alguma dúvida, a imagem da publicação é mais explicativa.

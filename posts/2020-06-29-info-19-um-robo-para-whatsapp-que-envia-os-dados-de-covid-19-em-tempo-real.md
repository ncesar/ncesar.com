---
title: INFO-19 - Um robô para WhatsApp que envia os dados de COVID-19 em tempo real
description: 'Como eu criei um bot para o WhatsApp usando NodeJS '
date: '2020-06-29 12:36:59'
thumbnail: assets/img/1.png
category: JS
background: '#e2b40b'
---
![info-19](assets/img/info.png)

Esse é o INFO-19, um bot em WhatsApp feito em NodeJS de uma forma rápida e fácil.

Como criar um bot em NodeJS, você deve se perguntar? A resposta é simples, se aproveitando do poder do mundo open-source, utilizando esta ótima biblioteca: <https://github.com/pedroslopez/whatsapp-web.js/>

O pacote tem uma ótima documentação e foi fácil conseguir fazer o bot.

Eu só precisava de algumas coisas, eram elas:

1. Comprar um novo chip para ser o número do WhatsApp
2. Um local para hospedar o servidor, que roda com a extensão Puppeteer
3. Conhecimento em Javascript
4. API dos casos de Covid-19([brasil.io](brasil.io))

Com essas ferramentas eu consegui criar uma ferramenta que já ajudou mais de 150 pessoas, fornecendo dados de COVID-19 de qualquer cidade, estado do Brasil ou até países de fora.

Você pode encontrar o código fonte no meu <https://github.com/ncesar>

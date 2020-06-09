---
title: Acessando Cookies do Front end com Laravel
date: "2019-06-15T02:02:32.169Z"
description: É possível em nossa aplicação, nós incluirmos cookies no lado do Javascript, mas nós queremos utilizar esses mesmos cookies também do lado do Back-End.
image: /acessando-cookies-do-front-end-com-laravel/facebook-share.png
tags:
    - development
---

É possível em nossa aplicação, nós incluirmos cookies no lado do Javascript, mas nós queremos utilizar esses mesmos cookies também do lado do Back-End. Nós poderíamos usar a global `$_COOKIE` do PHP, mas se nós usamos Laravel, temos outras possibilidades mais interessantes. Vamos ver como isso funciona.

## Inserindo cookies no Front-End

Nesse post, nós focaremos em lidar com cookies no Back-End. Se você estiver interessado em saber como trabalhar com cookies no javascript, leia esse artigo.
Agora, nós temos um cookie existente com a chave “is-collapsed”. Nós queremos pegar o valor desse cookie no Back-End, para conseguir
aplicar algum tratamento.

Agora, nós temos um cookie existente com a chave “is-collapsed”. Nós queremos pegar o valor desse cookie no Back-End, para conseguir
aplicar algum tratamento.

## Laravel e Cookies

Nós podemos acessar nossos cookies pelo método `request()->cookie()` ou utilizando a Facade Cookie.

O problema é, se nós queremos pegar nosso cookie que foi inserido no Front-End (javascript), o método nos retorna o valor `null`. Mas se nós utilizamos a variável `$_COOKIE`, nós conseguimos acessar. Então, se esse cookie existe, qual é o problema ?

Por padrão, o framework traz um middleware para encriptar cookies. Se nós criamos um cookie a partir do backend, ele é automaticament eencriptado e o
Laravel consegue ler. Já quando criamos um cookie a partir do FrontEnd (Javascript), ele não é encriptado e por isso que o Laravel não consegue acessar o seu valor.

## Como resolver isso ?

No arquivo `app/Http/Kernel.php`, no grupo de middlewares web, nós podemos encontrar uma referência à classe `EncryptCookies::class` em uma linha. Comentando esse linha, nós iremos desligar a encriptação automatica de cookies, mas essa abordagem não é a solução que nós queremos.

O caminho sugerido é utilizar o middleware e adicionar algumas exceções que não precisam ser encriptadas, e o Laravel irá conseguir
ler essas exceções. Nós podemos inserir essas exceções dentro do middleware `app/Http/Middleware/EncriptCookies.php`.

Ao adicionar o nome do nosso cookie ao array $except, nós poderemos ler o cookie com a Facade Cookie, ou com o método request()->cookie().

Se você quiser mais informações, dê uma olhada na documentação, ou mais especificamente na sessão de Cookies e Encriptação.

### Créditos:
- 🙏 https://pineco.de/accessing-front-end-cookies-laravel/

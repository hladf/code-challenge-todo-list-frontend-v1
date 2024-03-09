# 💻 Code Challenge - Front End!

## 📝Descrição

Nesse code challenge simples, você só precisa desenvolver uma 'To Do list' com opções de adicionar e deletar um to do na lista (só isso mesmo, mas com código caprichado!).
Todos os pacotes necessários para fazer isso já estão adicionados, mas se achar que tem necessidade, pode adicionar algo a mais (e explicar o motivo depois).

O foco do code challenge é conhecer melhor e treinar sua **criatividade, organização, capricho, padrões seguidos, legibilidade do código e bom uso das ferramentas disponíveis** (sem gambiarras! 🤣), por isso, programe como se fosse um projeto profissional sendo feito para um cliente importante, tenha em mente que isso pode ir pro seu portfólio. O layout e design vai ser um diferencial, mas deixe pra caprichar nisso por último!

O tempo ideal de fazer o projeto é entre 1 e 2 semanas, mas sem pressa! Esse tempo ideal é pensando no aprendizado, não na necessidade de entrega.

## Como começar?

Para começar, basta *fazer um `FORK`* desse repositório para a sua conta, programar nesse fork tudo que precisa, depois de finalizado os "requisitos" abaixo, **ABRA UM PULL REQUEST DO SEU FORK PARA ESSE REPOSITÓRIO AQUI**.

Assim vou poder comentar no código do PR sobre melhorias, refatorações, otimizações, dicas e etc. E em seguida, se quiser, poderemos marcar uma call pra conversar sobre o resultado afim de melhorar o aprendizado.

## ❗ Requisitos ou diferenciais

É obrigatório o uso das seguintes ferramentas (já instaladas e configuradas):

- styled components
- axios
- typescript (**Tudo** bem tipado)

É opcional, mas pode te ajudar (use com sabedoria):
- react hooks
  - useCallback
  - useMemo
  - useEffect
- Funções pequenas e independentes
- Evitar lógicas e declarações dentro do JSX, extraindo pra fora do JSX sempre que possível
- Isolar tipos e interfaces do TS em arquivos separados

🚫 O que não pode? (por favor 🙏😂)

- usar **eslint-disable** em qualquer lugar
- usar tipagem **any** (sem preguiça!)
- deixar qualquer **warning ou erros** no console do servidor (tipo aqueles de react-hooks)
- deixar erros do eslint
- códigos comentados
- console logs
- fazer apenas 1 commit com todo código
- abrir PR de volta sem usar o eslint (`yarn lint:fix`)

## ➕ Mais Informações

### FRONT END:

O sistema só precisa **adicionar** e **deletar** itens da lista de Todo, ter uma interface amigável, sem ser muito feia e com código organizado e separado. (ver dicas e scripts abaixo)
Será preciso:
- uma tela para exibir a lista de To-do's (á fazer), com botão de adicionar To-do que leva pra outra página
- uma tela para adicionar o card de To-do com os campos "title" e "description"
- uma tela para exibir o card com os campos de To-do com botão de deletar o mesmo


### API:

Você deve usar a api fake do `json-server` que já está instalada e configurada, basta rodar o comando `yarn api:server` que abrirá um servidor no endereço que está configurado no `.env`.
Já vem com as rotas `/example` e `/todos`.

[**Mais informações sobre `json server`** 🌐](https://github.com/typicode/json-server#json-server--)

## 🍀 Dicas

- Uma boa dica pra se fazer um código de qualidade é seguir esse guia de [Object Calisthenics](https://medium.com/@rafaelcruz_48213/desenvolva-um-c%C3%B3digo-melhor-com-object-calisthenics-d5364767a9ba). De nada!
- Seguir padrões conhecidos pela comunidade é uma boa idéia.
- Lógicas extensas no JSX ou Nested-ternaries em excesso podem piorar bastante a legibilidade do seu código.
- Código em outra lingua que não seja ingles são fora do padrão de mercado e da comunidade (variaveis, funções, etc... só textos que não precisam estar em inglês)
- Commits pequenos, descritivos e organizados mostram um pouco de como é sua linha de raciocínio e organização
- Caso precise de idéias de design do projeto, pode usar um desses pra se BASEAR (não precisa ser nada complexo): [Pinterest: Todo list web app design](https://br.pinterest.com/search/pins/?q=todo%20list%20web%20app%20design&rs=typed)
- Qualquer dúvida ou ajuda, pode me chamar!

## 👨‍💻 Scripts prontos

### `yarn start`

### `yarn api:server`

### `yarn lint:fix`

# 🚀🚀

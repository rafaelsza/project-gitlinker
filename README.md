# GitLinker

Projeto desenvolvido para estudo sobre o JS ES6+.</br>
Basicamente ele busca seus repositórios do GitHub e cria uma lista com os links para o repositório.

Utilizado Babel, Axios, WebPack e WebPack Dev Server.

![alt text](https://github.com/rafaelsza/project-gitlinker/blob/master/screenshots/index.jpg?raw=true)

<h3>Como utilizar em sua máquina:</h3>

* Necessário ter <b>node</b> instalado em sua máquina, <a href="https://nodejs.org/en/download/">consulte documentação</a>.<br/>

* Necessário ter <b>yarn</b> instalado em sua máquina, <a href="https://yarnpkg.com/getting-started/install">consulte documentação</a>.<br/>

Clone o repositório em sua máquina:
```
git clone https://github.com/rafaelsza/project-gitlinker.git
```
Entre na raíz do projeto e no terminal inicie o yarn com:
```
yarn init
```
Instale as dependências do projeto:
```
yarn add @babel/cli -D
yarn add @babel/preset-env -D
yarn add @babel/core -D
yarn add @babel/polyfill -D
yarn add webpack webpack-cli -D
yarn add babel-loader -D
yarn add webpack-dev-server -D
yarn add @babel/plugin-transform-async-to-generator -D
yarn add axios -D
```

Pronto, agora basta executar em ambiente de desenvolvimento (http://localhost:8080/) com o comando:
```
yarn dev
```
Para criar o arquivo bundle.js e colocar o projeto em modo de produção execute:
```
yarn build
```




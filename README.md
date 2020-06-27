# GitLinker

Projeto desenvolvido para estudos sobre o JS ES6+.

<h3>Funcionalidade:</h3>

- Buscar seus repositórios do GitHub e criar uma lista com os links para os repositórios.

<h3>Utilizado:</h3>

- Babel: para converter código JS ES6+ em código que o navegador consiga interpretar.
- Axios: para realizar a conexão com a API do GitHub.
- WebPack: para passar algumas configurações ao Babel.
- WebPack Dev Server: para criar um servidor local e ficar monitorando alterações no código em tempo real.

<h3>Screenshot:</h3>

![alt text](https://github.com/rafaelsza/project-gitlinker/blob/master/screenshots/index.jpg?raw=true)

<h3>Para utilizar em sua máquina:</h3>

<b>* Necessário ter o <a href="https://yarnpkg.com/getting-started/install">yarn</a> e o <a href="https://nodejs.org/en/download/">NodeJS</a> instalados.</b>

Clone o repositório:
```
git clone https://github.com/rafaelsza/project-gitlinker.git
```

Entre na raíz do projeto:
```
cd project-gitlinker
```

Instale as dependências do projeto:
```
yarn
```

Pronto, agora basta executar em ambiente de desenvolvimento (http://localhost:8080) com o comando:
```
yarn dev
```

Para criar o arquivo bundle.js e colocar o projeto em modo de produção execute:
```
yarn build
```

# Usando a imagem oficial do Node.js
FROM node:16

# Criando o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copiando o package.json e package-lock.json
COPY package*.json ./

# Instalando as dependências
RUN npm install

# Instalando o nodemon globalmente para usar no desenvolvimento
RUN npm install -g nodemon

# Copiando o código da aplicação para o diretório de trabalho
COPY . .

# Expondo a porta 3000 (ou qualquer outra que seu app use)
EXPOSE 3000

# Comando para rodar o aplicativo (assumindo que você tenha o script "dev" no package.json)
CMD ["npx", "nodemon", "src/index.js"]

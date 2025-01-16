# Usando a imagem oficial do Node.js
FROM node:22.12.0

# Criando o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copiando o package.json e package-lock.json
COPY package*.json ./

# Instalando as dependências para produção
RUN npm install --production

# Copiando o código da aplicação para o diretório de trabalho
COPY . .

# Expondo a porta 3000
EXPOSE 3000

# Usando o npm start para produção
CMD ["npm", "start"]

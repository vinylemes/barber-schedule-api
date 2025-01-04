# Use uma imagem base do Node.js
FROM node:22

# Define o diretório de trabalho
WORKDIR /usr/src/app

# Copia os arquivos do projeto para o contêiner
COPY package*.json ./
RUN npm install
COPY . .

# Exponha a porta que o app irá usar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]

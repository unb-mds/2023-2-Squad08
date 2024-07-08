# Usar uma imagem base oficial do Node.js
FROM node:14

# Instalar Python e pip
RUN apt-get update && \
    apt-get install -y python3 python3-pip

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos de configuração do npm e requirements.txt
COPY package.json ./
COPY requirements.txt ./

# Limpar cache do npm e instalar dependências do npm
RUN npm cache clean --force
RUN npm install --legacy-peer-deps

# Instalar dependências Python
RUN pip3 install -r requirements.txt

# Copiar o restante do código da aplicação para o diretório de trabalho no contêiner
COPY . .

# Expor a porta em que a aplicação estará rodando
EXPOSE 5173

# Comando para rodar a aplicação
CMD ["npm", "run", "dev"]

FROM node:14

RUN apt-get update && \
    apt-get install -y python3 python3-pip


WORKDIR /app

COPY package-lock.json ./
COPY package.json ./
COPY requirements.txt ./

RUN npm cache clean --force
RUN npm install --legacy-peer-deps

# dependências Python
RUN pip3 install -r requirements.txt

# Copiar o restante do código da aplicação para o diretório de trabalho no contêiner
COPY . .

# porta em que a aplicação estará rodando
EXPOSE 5173

# Comando para rodar a aplicação
CMD ["npm", "run", "dev"]

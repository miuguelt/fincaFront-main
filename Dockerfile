# Etapa de construcción
FROM node:20 AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install -g npm@11.0.0
RUN npm install
RUN npm audit fix

COPY . .

RUN npm run build

# Etapa 2: Servidor para producción con http-server
FROM node:20-alpine

# Instalar http-server globalmente
RUN npm install -g http-server

# Copiar archivos estáticos desde la etapa de construcción
WORKDIR /app
COPY --from=builder /app/dist /app

# Exponer el puerto 80
EXPOSE 80

CMD ["http-server", "-p", "80", "--cors"]


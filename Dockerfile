# Etapa 1: Construcción
FROM node:20 AS builder
WORKDIR /app

COPY package*.json ./

# Actualizar npm y forzar corrección de vulnerabilidades
RUN npm install -g npm@latest && \
    npm install --omit=dev && \  
    npm install vite@6.2.4 --force && \  
    npm audit fix --force

COPY . .
RUN npm run build
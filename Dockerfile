# Etapa de construcción
FROM node:20 AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Etapa 2: Servidor para producción
FROM nginx:stable-alpine

# Copiar los archivos construidos desde la etapa de construcción
COPY --from=builder /app/dist /usr/share/nginx/html

# Eliminar archivos innecesarios
RUN rm -rf /usr/share/nginx/html/*.map

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
# Etapa 1: Construcción
FROM node:18-alpine AS builder

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios para instalar dependencias
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm ci

# Copia el código fuente
COPY . .

# Construye los archivos estáticos con Vite
RUN npm run build

# Etapa 2: Servir archivos estáticos
FROM alpine:3.18

# Instala un servidor ligero para archivos estáticos
RUN apk add --no-cache libc6-compat && npm install -g serve

# Establece el directorio de trabajo para servir los archivos
WORKDIR /app

# Copia los archivos estáticos generados en la etapa de construcción
COPY --from=builder /app/dist .

# Expone el puerto 3000 (o el puerto de tu elección)
EXPOSE 80

# Comando para servir los archivos
CMD ["serve", "-s", ".", "-l", "80"]

# Etapa 1: Construcción
FROM node:20 AS builder

WORKDIR /app

# Copiar solo los archivos necesarios para npm install
COPY package*.json ./

# Actualizar npm y evitar conflictos de caché (evita errores de package-lock.json [[3]][[7]])
RUN npm install -g npm@latest && \
    npm install --production=false && \ 
    npm audit fix --force  # Forzar corrección de vulnerabilidades [[6]]

COPY . .

RUN npm run build

# Etapa 2: Producción
FROM node:20-alpine

# Instalar http-server como dependencia global (evita permisos problemáticos [[5]])
RUN npm install -g http-server

WORKDIR /app

# Copiar solo los archivos construidos
COPY --from=builder /app/dist ./dist

# Exponer puerto y correr servidor
EXPOSE 80
CMD ["http-server", "dist", "-p", "80", "--cors"]


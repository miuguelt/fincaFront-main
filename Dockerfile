# Etapa de construcción
FROM node:18-alpine AS builder

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de dependencias
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Construir la aplicación
RUN npm run build

# Etapa de producción
FROM node:18-alpine

# Instalar un servidor ligero para archivos estáticos
RUN npm install -g serve

# Copiar los archivos construidos desde la etapa de construcción
COPY --from=builder /app/dist /app/dist

# Establecer el directorio de trabajo para servir los archivos
WORKDIR /app/dist

# Exponer el puerto 3000
EXPOSE 3000

# Iniciar el servidor
CMD ["serve", "-s", ".", "-l", "3000"]
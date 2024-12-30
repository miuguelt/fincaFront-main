# Etapa de construcción
FROM node:18-alpine AS builder

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de dependencias
COPY package.json package-lock.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Etapa de producción
FROM nginx:alpine AS production

# Copiar los archivos construidos desde la etapa de construcción
COPY --from=builder /app/dist /usr/share/nginx/html

# Configurar Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
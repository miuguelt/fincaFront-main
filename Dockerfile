# Etapa 1: Construcción
FROM node:18-alpine AS builder

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios para instalar las dependencias
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm ci

# Copia el código fuente al contenedor
COPY . .

# Construye el proyecto
RUN npm run build

# Etapa 2: Servir la aplicación
FROM nginx:stable-alpine

# Copia los archivos generados en la etapa de construcción al contenedor de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia la configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expone el puerto 80
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
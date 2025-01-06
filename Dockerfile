# Etapa de construcción
FROM node:20 AS builder

# Establecer el directorio de trabajo
WORKDIR /app/fincaFront

# Copiar los archivos de dependencias
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Construir la aplicación
RUN npm run build

# Instalar Nginx
RUN apt-get update && apt-get install -y nginx
# Copiar los archivos construidos desde la etapa de construcción
COPY --from=builder /app/fincaFront/dist /usr/share/nginx/html

# Exponer el puerto 80 (Nginx usa este puerto por defecto)
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
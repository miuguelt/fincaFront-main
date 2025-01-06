# Etapa de construcción
FROM node:lastest AS builder

# Establecer el directorio de trabajo
WORKDIR /app/fincaFront

# Copiar los archivos de dependencias
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install -g npm@11.0.0
RUN npm install

# Copiar el resto del código
COPY . .

# Construir la aplicación
RUN npm run build

RUN npm install -g http-server

# Exponer el puerto 8080 (http-server usa este puerto por defecto)
EXPOSE 8080

# Iniciar http-server para servir los archivos estáticos
CMD ["http-server", "dist", "-a", "0.0.0.0", "-p", "8080", "--cors"]
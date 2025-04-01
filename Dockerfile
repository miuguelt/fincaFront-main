# Stage 1: Builder (install everything needed for building)
FROM node:20 AS builder
WORKDIR /app
COPY package*.json .
RUN npm install --include=dev
COPY . .
RUN npm run build

# Stage 2: Production image (no devDependencies)
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
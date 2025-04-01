FROM node:20 AS builder
WORKDIR /app
COPY package*.json .
RUN npm install --omit=dev
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
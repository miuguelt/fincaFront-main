FROM node:18-alpine AS builder

WORKDIR /app/fincaFront-main
COPY package*.json ./fincaFront-main/
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/fincaFront-main/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
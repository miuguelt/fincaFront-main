# Stage 1: Builder
FROM node:20 AS builder
WORKDIR /app
COPY package*.json ./
# Install all dependencies (including dev) for building
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production Image
FROM node:20 AS production
WORKDIR /app
COPY --from=builder /app/dist ./dist
# Install only production dependencies if needed
COPY package*.json ./
RUN npm install --omit=dev
CMD ["node", "dist/index.js"]
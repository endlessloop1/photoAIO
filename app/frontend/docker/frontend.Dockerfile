FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
COPY *.config.* ./
COPY vite.config.ts ./
COPY tsconfig*.json ./
COPY index.html ./
COPY public/ ./public/
RUN npm install
COPY src ./src
RUN npm run build

FROM node:18-alpine as runtime
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "3000"] 
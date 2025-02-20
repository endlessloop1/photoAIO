FROM node:18-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY src/ ./src
COPY public/ ./public
COPY vite.config.ts .
COPY tsconfig.json .
RUN npm run build

FROM node:18-alpine as runtime

WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 4173
CMD ["npm", "run", "preview", "--", "--port", "4173"] 
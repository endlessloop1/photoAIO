FROM node:18-alpine as development

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

CMD ["npm", "run", "dev"]

FROM node:18-alpine as production
# ... production configuration 
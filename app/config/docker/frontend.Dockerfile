FROM node:18-alpine as development

WORKDIR /app

# Add python and build tools for node-gyp
RUN apk add --no-cache python3 make g++

# Copy package files
COPY package*.json ./

# Install dependencies with legacy peer deps flag for compatibility
RUN npm install --legacy-peer-deps

# Copy the rest of the application
COPY . .

# Start development server
CMD ["npm", "run", "dev"]

FROM node:18-alpine as production
# ... production configuration 
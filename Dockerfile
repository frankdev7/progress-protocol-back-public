FROM node:18-alpine
WORKDIR /app
COPY tsconfig*.json ./
COPY package*.json ./
RUN npm ci
COPY src/ src/
RUN npm run build
EXPOSE 3000
CMD [ "node", "dist/main.js" ]
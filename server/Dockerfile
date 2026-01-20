FROM node:22-slim
WORKDIR /app

# copy package.json + install
COPY server/package.json ./server/
RUN npm install --prefix ./server

# copy client code + shared folder
COPY server/ ./server
COPY shared/ ./shared

WORKDIR /app/server

EXPOSE 3000
CMD ["npm", "run", "dev"]
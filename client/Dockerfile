FROM node:22-slim
WORKDIR /app

# copy package.json + install
COPY client/package.json ./client/
RUN npm install --prefix ./client

# copy client code + shared folder
COPY client/ ./client
COPY shared/ ./shared

WORKDIR /app/client

EXPOSE 3000
CMD ["npm", "run", "dev"]
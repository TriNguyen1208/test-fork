FROM node:22-slim
WORKDIR /app

# copy package.json + install
COPY admin/package.json ./admin/
RUN npm install --prefix ./admin

# copy client code + shared folder
COPY admin/ ./admin
COPY shared/ ./shared

WORKDIR /app/admin

EXPOSE 3001
CMD ["npm", "run", "dev"]
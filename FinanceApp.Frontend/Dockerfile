FROM node:18
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Serve the build
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]
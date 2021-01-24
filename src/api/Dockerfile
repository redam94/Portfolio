FROM node:8

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 3999
CMD ["npm", "start"]
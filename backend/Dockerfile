FROM node

WORKDIR user/src/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 9090

CMD ["node","build/index.js"]

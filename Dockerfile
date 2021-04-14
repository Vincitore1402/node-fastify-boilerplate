FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ARG HOST=0.0.0.0
ARG PORT=3000
ARG MONGO_URI

ENV HOST=$HOST
ENV PORT=$PORT
ENV MONGO_URI=$MONGO_URI

EXPOSE $PORT

CMD ["npm", "start"]

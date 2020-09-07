FROM node:latest

WORKDIR /app

COPY ./client /app

RUN yarn

CMD ["yarn", "start"]
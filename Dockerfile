FROM node:lts-slim

RUN mkdir -p /usr/src/app

COPY package.json /usr/src/app/
RUN yarn install

EXPOSE 3000

CMD [ "yarn", "start" ]
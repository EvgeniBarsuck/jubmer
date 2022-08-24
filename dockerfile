FROM node:lts-slim as build
WORKDIR /app
COPY ./package.json .
RUN yarn install
COPY . .
CMD ["yarn", "start:dev"]

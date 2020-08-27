FROM node:alpine

WORKDIR /src

COPY ./package.json package.json
COPY ./index.js index.js
COPY ./seed.js seed.js

COPY ./db db
COPY ./models models
COPY ./routes routes

RUN ["npm", "install"]
CMD ["npm", "start"]

EXPOSE 3000
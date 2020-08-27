FROM node:alpine
WORKDIR /app

COPY ./package.json package.json
COPY ./index.js index.js
COPY ./server.js server.js

RUN ["npm", "install"]

COPY ./webpack.config.js webpack.config.js
COPY ./images images
COPY ./public public
COPY ./react react
COPY ./store store
COPY ./utils utils

EXPOSE 8080

RUN ["npm", "run", "build"]
CMD ["npm", "start"]
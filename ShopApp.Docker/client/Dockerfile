# pull official base image
FROM node:13.12.0-alpine

WORKDIR /app
COPY ./client-app/package.json /app
RUN npm  install --silent
COPY ./client-app /app

CMD ["npm", "start"]
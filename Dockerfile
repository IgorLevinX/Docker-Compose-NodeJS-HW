FROM node

WORKDIR /usr/src/app

COPY index.js .

RUN npm install

EXPOSE 8088

CMD echo 'Hello World' ; node index.js
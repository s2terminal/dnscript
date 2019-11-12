FROM node:13.1.0-alpine

ADD package.json /
ADD package-lock.json /
RUN npm install

ADD index.ts /
ADD lib.ts /

RUN ./node_modules/.bin/tsc index.ts
CMD node index.js

FROM node:22-alpine

USER node
WORKDIR /home/node

COPY . .

RUN npm ci && npm run buil:prod

EXPOSE 5000

CMD npm run start:prod
FROM node:15.9.0-alpine3.10 as base


ARG GRAPHQL_DOMAIN

ENV GRAPHQL_DOMAIN=${GRAPHQL_DOMAIN}

WORKDIR /usr/src/app

RUN apk --no-cache add python make bash g++

RUN yarn global add pm2@4.5.0

COPY package*.json yarn.lock  ./

RUN yarn install --frozen-lockfile --ignore-optional

COPY  . .

RUN yarn build

EXPOSE 3003

CMD  ["pm2-runtime", "--json", "start", "yarn", "--name", "@understood/hub", "--max-memory-restart", "150M", "--interpreter", "bash", "--", "start" ]

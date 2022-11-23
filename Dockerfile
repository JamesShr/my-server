FROM node:16.15.1-alpine as builder

WORKDIR /app

COPY . /app

RUN npm i \ 
    && npm run build

FROM node:16.15.1-alpine

WORKDIR /app

COPY  package*.json tsconfig*.json /app/

COPY  scripts/ ./scripts

COPY  config/ ./config

COPY  --from=builder /app/dist ./dist

COPY  --from=builder /app/node_modules ./node_modules

RUN chmod +x ./scripts/entry.sh

ENTRYPOINT ["./scripts/entry.sh"]

EXPOSE 3000

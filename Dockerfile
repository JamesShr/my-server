FROM node:16.15.1

WORKDIR /app

ADD package.json /app
ADD package-lock.json /app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

ADD . /app
RUN npm run build \
    && chmod +x ./scripts/entry.sh

ENTRYPOINT ["./scripts/entry.sh" ]

EXPOSE 3000

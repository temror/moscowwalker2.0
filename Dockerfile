FROM node:16-alpine as base-builder
WORKDIR /app

FROM base-builder as build_fe
WORKDIR /app
COPY ./modules/client/package.json ./
RUN npm install
ADD ./modules/client ./
RUN npm run build

FROM base-builder as build_be
WORKDIR /app
COPY ./modules/server/package.json ./
RUN npm install
ADD ./modules/server ./
RUN npm run build

FROM node:16-alpine as finalNode
WORKDIR /app
COPY --from=build_be /app /app
COPY --from=build_fe /app/dist /app/static
CMD npm run start:prod
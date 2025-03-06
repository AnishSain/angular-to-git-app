# Start your image with a node base image
FROM node:18-alpine as build

# The /app directory should act as the main application directory
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

FROM httpd:alpine3.21

WORKDIR /usr/local/apache2/htdocs/

COPY --from=build  /app/dist/ .



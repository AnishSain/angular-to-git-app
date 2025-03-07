# Start your image with a node base image
FROM node:18-alpine as build

# The /app directory should act as the main application directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the app
RUN npm run build

# Use an httpd image to serve the app
FROM httpd:alpine3.21

# Copy the build files to the apache server
COPY --from=build /app/dist/angular-to-git-app /usr/local/apache2/htdocs/



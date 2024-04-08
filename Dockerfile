# Use an official Node.js runtime as the base image
FROM node:latest as builder
# Set the working directory in the container
WORKDIR /app
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
# Install Angular CLI globally
RUN npm install -g @angular/cli
# Install dependencies
RUN npm install
# Copy the entire project to the working directory
COPY . .
# Build the Angular app
RUN ng build
# Use Nginx as a web server
FROM nginx:alpine
# Copy the built Angular app from the builder stage to the Nginx directory
COPY --from=builder /app/dist/* /usr/share/nginx/html/
# Expose port 80 to the outside world
EXPOSE 80
# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
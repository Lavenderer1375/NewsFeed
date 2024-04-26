# Use the official Node.js image as the base image
FROM node:16-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory to the working directory
COPY . .

# Build the project
RUN npm run build

# Use the official Nginx image as the base image for serving the built files
FROM nginx:alpine

# Copy the built files from the builder stage to the nginx directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx server when the container starts
CMD ["nginx", "-g", "daemon off;"]
# Step 1: Use Node.js to build the React app
FROM node:18 AS build

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire project and build the React app
COPY . .
RUN npm run build

# Step 2: Use Nginx to serve the built React app
FROM nginx:alpine

# Copy built files to Nginx's HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for serving the React app
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

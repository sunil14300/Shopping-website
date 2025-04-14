FROM node:18

# Set working directory
WORKDIR /app

# Copy and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Optional: for dev hot-reload
RUN npm install -g nodemon

# Copy all source files
COPY . .

# Expose your backend port
EXPOSE 5000

# Start the backend server
CMD ["nodemon", "index.js"]
# OR use this in production:
# CMD ["npm", "start"]

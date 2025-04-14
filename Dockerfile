# Step 1: Use Node.js base image
FROM node:18

# Step 2: Set working directory inside container
WORKDIR /app

# Step 3: Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Step 4: Install nodemon globally (optional if it's a devDependency)
RUN npm install -g nodemon

# Step 5: Copy the rest of your project files
COPY . .

# Step 6: Expose the port your app uses (update if needed)
EXPOSE 3000

# Step 7: Default command to run your app using nodemon
CMD ["nodemon", "index.js"]

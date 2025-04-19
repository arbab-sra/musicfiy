# Use an official Node.js image as the base
FROM node:18-alpine

# Create and set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port for the React application
EXPOSE 5173

# Serve the React application using a lightweight HTTP server

CMD ["npm", "run", "dev"]

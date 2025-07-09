# Use Node.js LTS version
FROM node:20-alpine

# Install curl for healthcheck
RUN apk add --no-cache curl

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build   

# Expose the port the app runs on
EXPOSE 5137

# Start the application
CMD ["npm", "run", "dev"]
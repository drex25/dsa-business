# Build stage
FROM node:18-alpine AS build

# Set the working directory 
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./   

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build   

# Production stage
FROM nginx:alpine   

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create directories in nginx and ensure permissions
RUN mkdir -p /usr/share/nginx/html/assets /usr/share/nginx/html/data && \
    chmod -R 755 /usr/share/nginx/html/assets /usr/share/nginx/html/data

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 

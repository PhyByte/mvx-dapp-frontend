# Step 1: Use an official Node.js image for building the app
FROM node:18-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy only the package files to leverage Docker's caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Step 2: Use a lightweight web server for the final image
FROM nginx:alpine

# Copy the built app from the previous step
COPY --from=build /app/dist /usr/share/nginx/html

# Copy a custom Nginx configuration file (optional)
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for the app
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
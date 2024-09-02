# Use the official Playwright Docker image based on Ubuntu Focal
FROM mcr.microsoft.com/playwright:focal

# Set the working directory for initial setup
WORKDIR /tests

# Copy package.json and package-lock.json first to leverage Docker's cache
COPY package*.json ./

# Install npm dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the project files into the container
COPY . .

# Install Playwright dependencies and browsers
RUN npx playwright install-deps && npx playwright install

# Clean up npm cache to reduce image size
RUN npm cache clean --force

# Change to the directory where the tests are located
WORKDIR /tests/src/tests

# Set environment variables
ENV FRONT_END_URL=https://magento.softwaretestingboard.com/

# Command to run tests
CMD ["npx", "playwright", "test"]

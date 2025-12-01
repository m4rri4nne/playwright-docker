# Playwright image:
FROM  mcr.microsoft.com/playwright:v1.56.1-jammy

WORKDIR /app

# Copy of files and installing dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --with-deps
RUN npm install --save-dev allure-playwright

# Optional: Install Allure CLI globally if required
RUN npm install -g allure-commandline

# Copy rest of the application
COPY . .

# Run tests
CMD ["npx", "playwright", "test"]
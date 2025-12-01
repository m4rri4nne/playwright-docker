# Playwright image:
FROM  mcr.microsoft.com/playwright:v1.56.1-jammy

WORKDIR /app

# Copy of files and installing dependencies
COPY package.json package-lock.json ./

RUN npm install -g allure-commandline

RUN npm install

COPY . .

# Run tests
CMD ["npx", "playwright", "test"]
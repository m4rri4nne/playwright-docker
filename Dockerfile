# Playwright image:
FROM  mcr.microsoft.com/playwright:v1.56.1-jammy

WORKDIR /app

# Copy of files and installing dependencies
COPY package.json package-lock.json ./

RUN npm install
# Install Allure Playwright reporter
RUN npm install --save-dev allure-playwright
RUN npm install -g allure-commandline

COPY . .

# Run tests and generate Allure report
CMD sh -c "\
    npm test && \
    allure generate allure-results --clean -o allure-report && \
    echo 'Allure report generated ./allure-report' \
"
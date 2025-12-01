# Playwright image:
FROM  mcr.microsoft.com/playwright:v1.57.0-jammy  

WORKDIR /app

# Copy of files and installing dependencies
COPY package.json package-lock.json ./

RUN npm install
# Install Allure Playwright reporter
RUN npm install --save-dev allure-playwright
RUN npm install -g allure-commandline
# Install tini for proper signal handling (prevents PID 1 issues)
RUN apt-get update && apt-get install -y --no-install-recommends tini && rm -rf /var/lib/apt/lists/*

COPY . .

# Add entrypoint script and make it the container command (exec form)
COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT ["/usr/bin/tini", "--"]
CMD ["/usr/local/bin/docker-entrypoint.sh"]
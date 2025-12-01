# Playwright image:
FROM  mcr.microsoft.com/playwright:v1.57.0-jammy  

WORKDIR /app

# Copy of files and installing dependencies
COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD ["npm", "test"]
FROM cypress/included:13.17.0

RUN apt-get update && apt-get install -y firefox-esr && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

CMD ["npm", "run", "cypress:run"]
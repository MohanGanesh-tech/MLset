FROM node:14.17
WORKDIR /react
COPY package.json ./
RUN yarn install
RUN npm install
RUN apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
COPY . .
RUN npm run build
RUN npx cypress run --headless --spec "cypress/integration/MLset/MLset_end_to_end_testing.js"
# CMD ["npm", "start"]
CMD ["npm","run","int-test"]

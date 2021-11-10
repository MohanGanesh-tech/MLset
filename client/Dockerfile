FROM node:14.17
WORKDIR /react
COPY package.json ./
RUN yarn install
RUN npm install
COPY . .
RUN npm run build
# RUN npx cypress run --headless --spec "cypress/integration/MLset/MLset_end_to_end_testing.js"
# CMD ["npm", "start"]
CMD ["npm","run","int-test"]

FROM node:14.17
WORKDIR /react
COPY package.json ./
RUN yarn install
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
FROM node:14.17
WORKDIR /react
COPY package.json ./
RUN yarn install
RUN npm install
COPY . .
RUN npm run build

COPY ./entrypoint.sh /
ENTRYPOINT ["sh", "/entrypoint.sh"]

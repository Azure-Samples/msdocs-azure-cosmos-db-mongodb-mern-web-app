FROM node:18

WORKDIR /client

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm ci --omit=dev

COPY . ./

ENV PORT=3000

EXPOSE 3000

CMD [ "npm", "start" ]
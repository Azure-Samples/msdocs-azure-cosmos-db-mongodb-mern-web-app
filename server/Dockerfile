FROM node:18

WORKDIR /server

COPY package*.json ./

RUN npm ci --omit=dev

COPY . ./

ENV PORT=5000

EXPOSE 5000

CMD [ "npm", "start" ]
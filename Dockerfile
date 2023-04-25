FROM node:16
WORKDIR /REACT_CHAT_APP
COPY ./package.json ./
COPY ./package-lock.json ./
COPY ./ ./
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "start"]

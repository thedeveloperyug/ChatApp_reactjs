FROM node:alpine
WORKDIR /REACT_CHAT_APP
COPY ./package.json ./
COPY ./package-lock.json ./
COPY ./ ./
RUN npm -f install
EXPOSE 3000
CMD ["npm", "run", "start"]
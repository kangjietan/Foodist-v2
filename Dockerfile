FROM mhart/alpine-node:latest
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app
RUN npm install
RUN npm run build
EXPOSE 3000
CMD [ "npm", "run", "start" ]
FROM node:7.10

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies

# Bundle app source
COPY . /usr/src/app
RUN npm i

EXPOSE 3000
CMD [ "npm", "start" ]

FROM centos:7
ENV NODEJS_VERSION=v7.6.0
ENV PATH=/apps/node/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/bin

RUN yum -y install make gcc gcc-c++
RUN yum -y clean all

RUN mkdir /apps && cd /apps && curl -s -L -O https://nodejs.org/dist/${NODEJS_VERSION}/node-${NODEJS_VERSION}-linux-x64.tar.xz && tar xf node-${NODEJS_VERSION}-linux-x64.tar.xz && mv node-${NODEJS_VERSION}-linux-x64 node

RUN mkdir -p /usr/src/app
ENV appDir /usr/src/app
WORKDIR  ${appDir}

RUN npm i pm2 -g

COPY package.json /usr/src/app/
RUN npm i

COPY . /usr/src/app/

EXPOSE 8080
ENV NODEJS_VERSION=v7.6.0
CMD [ "npm", "start" ]
#CMD [“pm2-docker”, “app.js”]
#CMD [“pm2-docker”, “start”, “processes.json”,] CMD [“pm2", “start”, “processes.json”,  “--env”, “production”, “--no-daemon”]

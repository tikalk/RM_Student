FROM centos:7
ENV NODEJS_VERSION=v7.6.0
ENV PATH=/apps/node/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/bin

#RUN yum update
RUN yum -y install make gcc gcc-c++
RUN  yum -y clean all

RUN mkdir /apps && cd /apps && curl -s -L -O https://nodejs.org/dist/${NODEJS_VERSION}/node-${NODEJS_VERSION}-linux-x64.tar.xz && tar xf node-${NODEJS_VERSION}-linux-x64.tar.xz && mv node-${NODEJS_VERSION}-linux-x64 node

RUN mkdir -p /usr/src/app
ENV appDir /usr/src/app
WORKDIR  ${appDir}

RUN npm i pm2 -g
COPY source/processes.json /usr/src/app/

COPY source/package.json /usr/src/app/
#RUN npm i
RUN npm i --production

#COPY source/ /usr/src/app/
COPY source/dist/ /usr/src/app/dist
COPY source/sslcert/ /usr/src/app/sslcert

EXPOSE 8443
ENV NODEJS_VERSION=v7.6.0
#CMD [ “npm”, “start” ]
#CMD [“pm2-docker”, “app.js”]
#CMD [“pm2-docker”, “start”, “processes.json”,] CMD [“pm2", “start”, “processes.json”,  “--env”, “production”, “--no-daemon”]

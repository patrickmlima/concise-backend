FROM node

LABEL maintaner="Patrick Lima <patrickm.lima1@gmail.com"

COPY . /usr/src/app

WORKDIR /usr/src/app

RUN npm install

EXPOSE 3000

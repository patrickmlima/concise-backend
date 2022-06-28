FROM node

LABEL maintaner="Patrick Lima <patrickm.lima1@gmail.com"

COPY . /usr/src/app
WORKDIR /usr/src/app
COPY scripts/server-statup.sh /usr/local/bin/server-statup.sh
RUN npm install

EXPOSE 3000

CMD ["/usr/local/bin/server-statup.sh"]
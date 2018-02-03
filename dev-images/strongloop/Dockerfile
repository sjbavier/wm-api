From node:6.11.2

#Yarn mama
RUN curl -o- -L https://yarnpkg.com/install.sh | bash

ENV PATH="/root/.yarn/bin:${PATH}"

# Install within docker container
RUN yarn && yarn global add loopback-cli && yarn global add nodemon

# commands start from this directory within docker container
WORKDIR /usr/src/api
FROM ubuntu:latest

# Create app directory
WORKDIR /app

RUN echo "Installing Node..."
RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_10.x  | bash -
RUN apt-get -y install nodejs
RUN npm install -g yarn

RUN echo "Installing server side packages..."
COPY package*.json ./
RUN yarn install


RUN echo "Installing client side packages"
WORKDIR /app/client
COPY package*.json ./
RUN yarn install

# Set the working directory to /client
WORKDIR /app

# Bundle app source
COPY . .

EXPOSE 3001
CMD [ "yarn", "full-start" ]

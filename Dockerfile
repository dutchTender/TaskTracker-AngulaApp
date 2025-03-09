FROM node:12-alpine

WORKDIR /app

ENV DEBIAN_FRONTEND=noninteractive
ENV PORT=4200
RUN npm install -g @angular/cli@11.2.3

#COPY APP TO WORKING DIRECTORY
COPY *.json ./
COPY *.js   ./
COPY src ./

RUN npm install
COPY . .

EXPOSE 4200

ENTRYPOINT ["ng", "serve"]



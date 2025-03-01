FROM node:12-alpine

WORKDIR /app

ENV DEBIAN_FRONTEND=noninteractive

RUN npm install @angular/cli@11.2.3
RUN useradd --create-home appUser
USER appUser

#COPY APP TO WORKING DIRECTORY

EXPOSE 4200

ENTRYPOINT ["npm", "run", "json-server"]

CMD ["ng", "serve", "--host", "0.0.0.0"]

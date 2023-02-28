FROM node:16

WORKDIR /base
COPY . .
RUN yarn install && yarn prisma generate





# Stage build process
FROM node:alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . ./
RUN npm run build

# Stage 2, Production environment
FROM node:alpine
RUN npm i -g serve
WORKDIR /app
COPY --from=build /app/build .
CMD ["serve", "-p", "80", "-s", "."]

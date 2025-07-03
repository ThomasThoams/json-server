FROM node:20
WORKDIR /app
COPY . .
RUN npm install -g json-server
COPY db.json .
EXPOSE 3000
CMD ["json-server", "--watch", "db.json", "--port", "3000"]

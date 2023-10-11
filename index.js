// const http = require('http');

// const hostname = "127.0.0.1";
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("Hello World");
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

// ------------------------------------------------------------

const messagesRouter = require('./routes/api/v1/messages')
const express = require('express')
const app = express()
const port = 3000

//json body parser
app.use(express.json());
app.use("/api/v1/messages", messagesRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
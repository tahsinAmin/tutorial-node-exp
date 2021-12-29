const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Welcome To our channel");
  }
  if (req.url == "/about") {
    res.end("Welcome To our abhout section");
  }
  res.end(`
      <h1>Oops!</h1>
      <p>We3 can't seem to fiund the page  you are looking for</p>
      <a href='/'>back home</a>
    `);
});

server.listen(5002);

const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const htmlPath = path.join(__dirname, "index.html");
  const htmlStream = fs.createReadStream(htmlPath);
  htmlStream.pipe(res);
});
const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

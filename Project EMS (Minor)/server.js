const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.header);
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at address http://localhost:${PORT}`);
})
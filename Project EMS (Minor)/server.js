const http = require("http");
const MongoConnect = require("./config/db").MongoConnect;

const PORT = 3000;

MongoConnect(() => {
    const server = http.createServer((req, res) => {
        console.log(req.url, req.method, req.header);
    });
    
    server.listen(PORT, () => {
        console.log(`Server running at address http://localhost:${PORT}`);
    })
})
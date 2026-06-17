const http = require("http");
const handler = require("./routes/router");
const MongoConnect = require("./config/db").MongoConnect;


const PORT = 3000;

MongoConnect(() => {
    const server = http.createServer(handler);
    server.listen(PORT, () => {
        console.log(`Server running at address http://localhost:${PORT}`);
    })
})

// const server = http.createServer(handler);

// server.listen(PORT, () => {
//     console.log(`Server running at address http:localhost:${PORT}`);
// })
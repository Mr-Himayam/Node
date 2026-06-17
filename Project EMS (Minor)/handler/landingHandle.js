const fs = require("fs");
const path = require("path");

function landingHandler(req, res){
    const filePath = path.join(__dirname, "../views/landing.html");

    fs.readFile(filePath, (err, data) => {
        if(err){
            res.writeHead(500);
            res.end("Unable to read landing page Internal server error");
            return;
        }

        res.writeHead(200, {"Content-type": "text/html"});
        res.end(data);
    })
}

module.exports = landingHandler;
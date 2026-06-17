const fs =  require("fs");
const path = require("path");

function staticFile(req, res){
    const filePath = path.join(__dirname, "../public"+ req.url);
    console.log(filePath);
    const extension = path.extname(filePath);

    const contentTypes = {
        ".html" : "text/html",
        ".css" : "text/css",
        ".js" : "text/javascript",
        ".png" : "image/png",
        ".jpg" :"image/jpeg",
        ".jpeg" :"image/jpeg",
        ".svg" : "image/svg+xml"
    };

    const contentType = contentTypes[extension];

    fs.readFile(filePath, (err, data) => {
        if(err){
            console.log(err);+_
            res.writeHead(500);
            res.end("Unable to read landing page Internal server error");
            return;
        }
        res.writeHead(200, {"Content-type": contentType});
        res.end(data);
    });
}

module.exports = staticFile;
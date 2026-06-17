const landingHandler = require("../handler/landingHandle");
const staticFile = require("../handler/staticHandler");


const handler = (req, res) => {
    console.log(req.method, req.url)
    if(req.url === "/"){

        landingHandler(req, res);

    }

    if(req.url.startsWith("/css/") || req.url.startsWith("/js/") || req.url.startsWith("/images/")){
        staticFile(req, res);
    }
}

module.exports = handler;
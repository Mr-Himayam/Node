const db = require("mongodb");

const MongoClient = db.MongoClient;

const URI = "mongodb+srv://MrHimayam:HloBroIAmIn@cluster0.jziyy0q.mongodb.net/?appName=Cluster0";

let _db;

const MongoConnect = (callback) => {
    MongoClient.connect(URI)
    .then(client =>{
        console.log("Database connection success");
        _db = client.db("EMS-Minor");
        callback();
    }).catch(err => {
        console.log("Unable to connect Database due to ", err);
    })
};

const getDB = () => {
    if(!_db){
        throw new Error("Mongo failed to connect");
    }
    return _db;
}

exports.MongoConnect = MongoConnect;
exports.getDB = getDB;
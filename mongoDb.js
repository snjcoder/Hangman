const {MongoClient} =require("mongodb");

let dbName = "myGame";
let connectionString = "mongodb://localhost:27017";
const getDb = async () => {
let connection = await MongoClient.connect(connectionString);
let db = connection.db(dbName);
return db;
};

const getCollection = async (name) => {
    let db = await getDb();
    let collection = db.collection(name);
    return collection;
    };
    
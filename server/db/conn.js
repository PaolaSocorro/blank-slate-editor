const { MongoClient, ServerApiVersion } = require('mongodb');
const DB = process.env.ATLAS_URI;
const DbName = process.env.DATABASE_NAME;
const certs = process.env.CERTS;


const fs = require('fs');
const credentials = certs
const client = new MongoClient(DB, {
  sslKey: credentials,
  sslCert: credentials,
  serverApi: ServerApiVersion.v1
});

async function pingDB() {
  try {
    await client.connect();
    const database = client.db(DbName);

    // Establish and verify connection
    await database.command({ ping: 1 });
    // await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to MongoDB");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
module.exports.pingDB = pingDB;
module.exports.client = client;
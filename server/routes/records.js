const express = require("express");
const DbName = process.env.DATABASE_NAME;
const DbCollection = process.env.DATABASE_COLLECTION;

// recordRoutes is an instance of the express router.
// We use it to define our routes.
const recordRoutes = express.Router();

// Connect to the database
const dbo = require("../db/conn");

// Convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
    // let db_connect = dbo.getDb(DbName);
    let db_connect = dbo.client
    db_connect
      .collection(DbCollection)
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
  });

  module.exports = recordRoutes;
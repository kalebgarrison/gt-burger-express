const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
   const hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne([
    "burger_name"
  ], [
    req.body.burger_name
  ], 
  function(result) {
    // Send back the ID of the new quote 
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  console.log(req.params.id);

    burger.updateOne({devoured: req.body.devoured}, condition, function (result) {
      if (result.changedRows == 0) {
          return res.status(404).end();
      } 
      else {
          res.status(200).end();
      };
  });
});


// Export routes for server.js to use.
module.exports = router;

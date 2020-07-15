// Import the ORM to create functions that will interact with the database.
const orm = require("/Users/kalebgarrison/gt/homework/gt-burger-express/config/orm.js");

const burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function (col, val, cb) {
    orm.insertOne("burgers", col, val, function (res) {
      cb(res);
    });
  },
  updateOne: function (valOne, valTwo, cb) {
    orm.updateOne("burgers", valOne, valTwo, function (res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;

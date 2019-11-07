var spicedPg = require("spiced-pg");
var db = spicedPg("postgres:postgres:postgres@localhost:5432/petition");

// module.exports.getCities = function() {
//     return db.query("SELECT * FROM cities");
// };

// module.exports.addCity = function(city, population) {
//     return db.query("INSERT INTO cities (cities, population) VALUES ($1, $2)", [
//         city,
//         population
//     ]);
// };

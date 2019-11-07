const express = require("express");
const app = express();
const db = require("./utils/db");
const hb = require("express-handlebars");

app.engine("handlebars", hb());
app.set("view engine", "handlebars");
app.use("/public", express.static(__dirname + "/public"));

app.get("/about", (req, res) => {
    res.render("main", {
        layout: "main",
        emojis: ["🧟‍", "🧛‍", "🤡", "💩"]
    });
});

app.listen(8080, () => console.log("listening....."));

// app.post("/add-city", (req, res) => {
//     db.addCity("Sarajevo", 700000)
//         .then(() => {
//             console.log("success!");
//         })
//         .catch(err => {
//             console.log(err);
//         });
// });

// app.get("/cities", (req, res) => {
//     db.getCities()
//         .then(({ rows }) => {
//             "rows: ", rows;
//         })
//         .catch(err => {
//             console.log("error: ", err);
//         });
// });

// app.get("/petition", (req, res) => {
//     res.send("<h1>petition!!!</h1>");
// });

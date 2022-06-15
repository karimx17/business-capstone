const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  var userInput = req.body.userInput;
  res.render("index", { userInput: userInput });
});

app.post("/", (req, res) => {
  res.redirect("form");
});

app.get("/form", (req, res) => {
  res.render("form");
});

app.post("/form", (req, res) => {
  res.redirect("product");
});

app.get("/product", (req, res) => {
  res.render("product");
});

app.post("/product", (req, res) => {
  res.redirect("package");
});

app.get("/package", (req, res) => {
  res.render("package");
});

app.post("/package", (req, res) => {
  res.redirect("success");
});

app.get("/success", (req, res) => {
  res.render("success");
});

app.listen(3000, () => {
  console.log("Server is live");
});

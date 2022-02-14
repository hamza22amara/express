const express = require("express");
const port = process.env.port || 4000;
const app = express();
const hbs = require("hbs");
app.listen(port, function () {
  console.log("Server running on port " + port);
});

// Middleware Verify Time
const verifTime = (req, res, next) => {
  let time = new Date();
  if (
    time.getDay() <= 5 &&
    time.getDay() >= 0 &&
    time.getHours() <= 16 &&
    time.getHours() >= 9
  ) {
    next();
  } else res.render("closed.hbs", { time: time.toUTCString() });
};
app.use(verifTime);

app.set("view-engine", hbs);

app.use(express.static("main"));

app.get("/home", (req, res) => {
  res.render("home.hbs", {
    image: "images/back.jpg",
    style: "css/style.css",
  });
});
app.get("/contact", (req, res) => {
  res.render("contact.hbs", {
    image: "images/back.jpg",
    style: "css/style.css",
  });
});
app.get("/services", (req, res) => {
  res.render("services.hbs", {
    image: "images/back.jpg",
    style: "css/style.css",
  });
});
app.get("/closed", (req, res) => {
  res.render("closed.hbs");
});

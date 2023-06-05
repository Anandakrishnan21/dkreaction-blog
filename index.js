const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  const buttons = ["Parents", "Friends", "Art", "Exercises","Childhood"];
  res.render("home", { buttons });
});

app.get("/friendship", (req, res) => {
  res.render("friendship");
});

app.post("/friendship", (req, res) => {
  res.render("friendship");
});

app.post("/childhood",(req,res)=>{
  res.render("childhood");
})

app.listen(3000);

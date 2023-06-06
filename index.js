const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const blogs = [
  {
    title: "The place that made my childhood happier and more memorable",
    date: "Jun 6, 2023",
    tag: "Childhood",
    content:
      "My mother's house is the place that made my childhood happier and more memorable.",
  },
  {
    title: "Friendship is a bonding of Love and Trust",
    date: "Jun 2, 2023",
    tag: "Friendship",
    content:
      "Friends are those who enter our lives accidentally, but the bond is formed through love, support, and trustworthiness.",
  },
  {
    title:
      "Exercise is not only for maintaining our health; it also builds a strong mind.",
    date: "May 29, 2023",
    tag: "Exercise",
    content:
      "Each and every movement that a living being makes in the world is a type of exercise. This means walking, moving hands or legs all is a type of exercise.",
  },
  {
    title: "Love is not for getting an offer",
    date: "May 28, 2023",
    tag: "Parents",
    content:
      "Parents are the gods whom we can see, touch, talk to, and even fight with. All living beings are gifted because no one is there without parental support and love.",
  },
];

app.get("/", (req, res) => {
  const buttons = ["Parents", "Friends", "Art", "Exercises", "Childhood"];
  res.render("home", { buttons, blogs });
});

app.post("/search", (req, res) => {
  const tag = req.body.search.toLowerCase();
  const filteredBlogs = blogs.filter((blog) => blog.tag.toLowerCase() === tag);
  res.render("home", {
    buttons: ["Parents", "Friends", "Art", "Exercises", "Childhood"],
    blogs: filteredBlogs,
  });
});

app.get("/friendship", (req, res) => {
  res.render("friendship");
});

app.post("/friendship", (req, res) => {
  res.render("friendship");
});

app.post("/childhood", (req, res) => {
  res.render("childhood");
});

app.listen(3000);

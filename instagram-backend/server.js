const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Posts = require("./dbSchema");

//App config
const app = express();
const port = process.env.PORT || 8000;
const connection_url =
  "mongodb+srv://admin:b0GRnOQQiSze50LQ@cluster0.kwarg.mongodb.net/instadb?retryWrites=true&w=majority";

//MiddleWare
app.use(express.json());
app.use(cors());

//dbconfig
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//Endpoints
app.get("/", (req, res) => res.status(200).send("Welcome to backend"));

app.post("/post", (req, res) => {
  const dbDetail = req.body;
  Posts.create(dbDetail, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/post", (req, res) => {
  Posts.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//Listener
app.listen(port, () => console.log(`Listeining on port ${port}`));

const express = require("express");
const router = require("./router");
const bodyParser = require("body-parser");
const cors = require("cors");
//set up express
const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use("/user", router);
//listen for request

app.listen(process.env.port || 8000, () => {
  console.log("now listing 8000");
});

//DB conection

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://iamrithi:iamrithi333@cluster0.gdtlt.mongodb.net/USER?retryWrites=true&w=majority",
  () => {
    console.log("DB connected !!!");
  }
);
mongoose.Promise = global.Promise;

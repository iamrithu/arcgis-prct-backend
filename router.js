const express = require("express");
const router = express.Router();
const Users = require("./model/user");
const Project = require("./model/project");
//mobile
//get
router.get("/register", (req, res) => {
  Users.find().then((data) => {
    res.send(data);
  });
});
router.get("/register/:id", (req, res) => {
  Users.findOne({ eMail: req.params.id }).then((data) => {
    res.send(data);
  });
});
router.get("/register/details/:id", (req, res) => {
  Users.findOne({ _id: req.params.id }).then((data) => {
    res.send(data);
  });
});
//post
router.post("/register", (req, res) => {
  Users.create(req.body).then((data) => {
    res.send(data);
  });
});
//put
router.put("/register/:id", (req, res) => {
  Users.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    Users.findOne({ _id: req.params.id }).then((data) => {
      res.send(data);
    });
  });
});
//delete
router.delete("/register/:id", (req, res) => {
  Users.findByIdAndRemove({ _id: req.params.id }).then((data) => {
    res.send(data);
  });
});

//Project--------------------------
router.get("/project", (req, res) => {
  Project.find().then((data) => {
    res.send(data);
  });
});
router.get("/project/:id", (req, res) => {
  Project.find({ userId: req.params.id }).then((data) => {
    res.send(data);
  });
});
router.get("/project/details/:id", (req, res) => {
  Project.find({ _id: req.params.id }).then((data) => {
    res.send(data);
  });
});
router.post("/project", (req, res) => {
  Project.create(req.body).then((data) => {
    res.send(data);
  });
});
router.delete("/project/:id", (req, res) => {
  Project.findByIdAndRemove({ _id: req.params.id }).then((data) => {
    res.send(data);
  });
});

module.exports = router;

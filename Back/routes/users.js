var express = require("express");
const flash = require("connect-flash");
var router = express.Router();
var path = require("path");
const { User  } = require("../models/index");

router.use(flash());

var passport = require("passport");

router.post("/register", (req, res, next) => {
  User.create({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name
    })
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(502).send(err);
    });
});

router.post("/login", passport.authenticate("local"), function ( req, res, next ) {
  var obj = new Object();
  obj.email = req.user.dataValues.email;
  obj.id = req.user.dataValues.id;
  obj.name = req.user.dataValues.name;
  obj.isAdmin = req.user.dataValues.isAdmin;
  obj.expectedHours = req.user.dataValues.expectedHours;
  obj.workedMilisec = req.user.dataValues.totalWorkedMilisecs;
  res.send(obj)
});

router.get("/logout", (req, res, next) => {
  req.logout();
  res.redirect("http://localhost:8080/");
});

router.put("/", (req, res, next) => {
  User.findByPk(req.user.id).then((user) => {
    if (user){
      user.totalWorkedMilisecs = req.body.milisec;
      user.save()
    }
  })
  .then(() => { res.sendStatus(200)})
})

module.exports = router;

const express = require("express");
const { User } = require("../models/index");
const { Registry } = require("../models/index");

const router = express.Router();

router.post("/", (req, res, next) => {
  User.findByPk(req.user.id).then((user) => {
    if (user){
    Registry.create({ 
      entry: req.body.entry,
      username: user.name,
    })
    .then((registry)=>{
      registry.setUser(user.id)
      res.status(200).send("entry OK")
    })
    } else res.status(400).send("error on entry")
  })
})

router.put("/", (req, res, next) => {
  req.body.out ?  //check if we want to set de Out Time
  (
    Registry.update({
      out : req.body.out
    }, {
      where: {
        UserId: req.user.id,
        out: null
      } , returning : true
    })
  )
  :
  (
    req.body.lunchStart ? //if not, check if we want to set de lunch start Time
    (
      Registry.update({
      lunchStart : req.body.lunchStart
      }, {
      where: {
        UserId: req.user.id,
        out: null
      } , returning : true
    })
    )
    :
    (
      Registry.update({
      lunchEnd : req.body.lunchEnd // else, we want to set the lunch end time
      }, {
      where: {
        UserId: req.user.id,
        out: null
      } , returning : true
    })
    )
  )
  .then((data) => {
    res.status(200).send(data)
  })
})

router.get("/", (req, res, next) => {
  Registry.findAll({
    where: {
      UserId: req.user.id
    }
  })
  .then((data)=> res.send(data))
})  

module.exports = router;

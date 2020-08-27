"use strict";
const app = require("express");
const router = app.Router();
const users = require("../routes/users");
const registry = require("../routes/registry");

router.use("/users", users);
router.use("/registry", registry);

module.exports = router;

import express from "express";
import User from "../models/user";

const { verifyAuth } = require("../middlewares/auth");
const { verifyRol } = require("../middlewares/auth");
const router = express.Router();

const bcrypt = require("bcrypt");
const _ = require("underscore");
const saltRounds = 10;

router.post("/new-user", async (req, res) => {
  const body = {
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    role: req.body.role,
  };
  body.pass = bcrypt.hashSync(req.body.pass, saltRounds);
  try {
    const userDB = await User.create(body);
    res.json(userDB);
  } catch (error) {
    return res.status(500).json({
      mensaje: "ocurrio un error",
      error,
    });
  }
});

router.put("/user/:id", [verifyAuth], async (req, res) => {
  let id = req.params.id;
  let body = _.pick(req.body, ["name", "email", "active", "pass"]);
  if (body.pass) {
    body.pass = bcrypt.hashSync(req.body.pass, saltRounds);
  }
  try {
    const userDB = await User.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    res.json(userDB);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      mensaje: "ocurrio un error",
      error,
    });
  }
});

module.exports = router;

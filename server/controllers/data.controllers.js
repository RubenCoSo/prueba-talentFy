const express = require("express");
const User = require("../models/User.model");

module.exports.getUserData = (req, res, next) => {
  const id = req.params.id;

  User.findById(id)
    .then((user) => {
      const { name, surname, email } = user;
      const userData = { name, surname, email };
      res.json(userData);
    })
    .catch((err) => res.json(err));
};

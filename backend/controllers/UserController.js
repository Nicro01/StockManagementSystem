import {
  getUsers,
  getUserById,
  getUserByUsername,
  insertUser,
  updateUserById,
  deleteUserById,
  updateUserStatus,
} from "../models/User.js";

import config from "../config/config.js";
import jwt from "jsonwebtoken";

export const showUsers = (req, res) => {
  getUsers((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const showUserById = (req, res) => {
  const id = req.params.id;
  getUserById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const showUserByUsername = (req, res) => {
  const data = req.body;
  getUserByUsername(data, (err, user) => {
    if (err) {
      res.send(err);
    } else if (!user) {
      console.log(user);
      res.status(404).send("User not found");
    } else {
      // Sign a JWT token
      const token = jwt.sign({ id: user.id }, config.ACCESS_TOKEN_SECRET, {
        expiresIn: "1h",
      });
      // Send the token and user in the response
      res.json({ user: user, token: token });
    }
  });
};

export const createUser = (req, res) => {
  const data = req.body;
  insertUser(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const updateUser = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateUserById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const updateUserStatusController = (req, res) => {
  const id = req.params.id;
  const status = req.body.status;
  updateUserStatus(id, status, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const deleteUser = (req, res) => {
  const id = req.params.id;
  deleteUserById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

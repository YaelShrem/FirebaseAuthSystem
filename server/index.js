require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const router = require('express').Router();
const admin = require('./firebase');
//const mongoose = require('mongoose');

  
const PORT=5000; 
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const userFunc = require('./userController')

/**
    * Endpoint responsible for calling the verifyAccount function
    * and sending back the response from it
*/
router.route('/api/user/check').post(function (req, res) {
   console.log("in route");
    const { userEmail, idToken } = req.body;
    console.log("userEmail", userEmail);
    console.log("idToken", idToken);
    userFunc.checkUser(userEmail, idToken)
    .then(function (callback) {
        console.log("user verified");
        res.json(callback);
    }).catch(error => {
        res.json(error)
        console.log("user not verified");
    });
});

/**
    * Endpoint that lists all users
*/
router.route('/api/user/list').get(function (req, res) {
    userFunc.list()
    .then(function (callback) {
        res.json(callback);
    }).catch(error => {
        res.json(error)
    });
});
 app.use('/', router);


if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
      console.log('Running on Port: ', PORT);
    });
  }
const express = require('express');
const jwt = require('jwt-simple');
const app = express();
const User = require('../models/users');
const moment = require('moment');
const constants = require('../config/constants');
const { request } = require('https');

app.set('jwtTokenSecret', constants.SECRET);

exports.authToken = function (req, res, next) {
    const token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];
    if (token) {
        try {
            const decoded = jwt.decode(token.split('')[1], app.get('jwtTokenSecret'));
            if (decoded.exp <= Date.now()) {
                res.end('Access token has expired', 401);
            }
            User.findOne({ mobileNumber: decoded.userName }, function (err, user) {
                if (err) {
                    res.status(401).send({status:401, message: 'You are not autorized to get access.' });
                } else {

                }
                req.user = user;
            });
        } catch (err) {
            return next();
        }
    } else {
        res.status(401).send({status:401, message: 'Opps! You are not autorized to get access. please login again' });
    }
};

exports.login = (req, res) => {
    // console.log(req.body.userName)
    User.find({ mobileNumber: req.body.mobileNumber }, function (err, user) {
        if (err) {
            res.status(401).send({status:401, message: 'You are not autorized to get access.' });
        } else {
            // console.log(user)
            const expires = moment().add('days', 7).valueOf();
            const token = jwt.encode({
                userName: user.mobileNumber,
                exp: expires
            }, app.get('jwtTokenSecret'));
            res.status(200).send({status:200,
                token: 'Bearer '+token,
                expires: expires,
                user: JSON.stringify(user)
               
            });
            console.log(user);
        }

    });
}
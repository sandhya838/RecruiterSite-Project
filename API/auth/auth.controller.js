const express = require('express');
const jwt = require('jwt-simple');
const app = express();
const moment = require('moment');
const constants = require('../config/constants');
const { request } = require('https');
const Orgnization = require('../models/orgnization');
const Profile = require('../models/profile');

app.set('jwtTokenSecret', constants.SECRET);

exports.authToken = function (req, res, next) {
    const token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];
    if (token) {
        try {
            const decoded = jwt.decode(token.split('')[1], app.get('jwtTokenSecret'));
            if (decoded.exp <= Date.now()) {
                res.end('Access token has expired', 401);
            }
            Profile.findOne({ email: decoded.userName }, function (err, user) {
                if (err) {
                    res.status(401).send({ status: 401, message: 'You are not autorized to get access.' });
                } else {

                }
                req.user = user;
            });
        } catch (err) {
            return next();
        }
    } else {
        res.status(401).send({ status: 401, message: 'Opps! You are not autorized to get access. please login again' });
    }
};

exports.login = (req, res) => {
    console.log(req.body);
    Profile.findOne({ email: req.body.email, password: req.body.password }, (err, result) => {
        if (err) {
            res.status(401).send({ status: 401, message: 'You are not autorized to get access.' });
        } else if (result) {
            console.log('result',result);
            const expires = moment().add(7,'days').valueOf();
            const token = jwt.encode({
                userName: result.email,
                exp: expires
            }, app.get('jwtTokenSecret'));
            res.status(200).send({
                status: 200,
                token: 'Bearer ' + token,
                expires: expires,
                user: result

            });
        } else {
            return res.status(404).json({ status: 404, message: 'User not found' });
        }

    });
};
exports.orgnization_login = (req, res) => {
    Orgnization.findOne({ email: req.body.email, password: req.body.password }, (err, result) => {
        if (err) {
            res.status(401).send({ status: 401, message: 'You are not autorized to get access.' });
        } else if (result) {
            const expires = moment().add(7,'days').valueOf();
            const token = jwt.encode({
                userName: result.email,
                exp: expires
            }, app.get('jwtTokenSecret'));
            res.status(200).send({
                status: 200,
                token: 'Bearer ' + token,
                expires: expires,
                user: result

            });
        } else {
            return res.status(404).json({ status: 404, message: 'User not found' });
        }

    });
}
const User = require('../models/users');

module.exports = {
    // Create and Save a new User
    //['required','numeric','regex:/^[5-9][0-9]{9}$/'],
    createRules: {
        fullName: "required|string",
        role: "alpha",
        email:"string",
        mobileNumber:"string",
        passowrd:"required|alpha",
        handle:"required|alpha"

    },
    updateRules: {
        email: "required|string",
        address: "required|string",
        city: "required|alpha",
        state: "required|alpha",
        pinCode: "required|numeric",
        emergencyNumber: "required|numeric",
        panNumber: "required|alpha_num",
        gender: "required|alpha",
        aadharNumber: "required|numeric",
        updatedDate: "required|date",
        updatedBy: "required"


    },
    create: (req, res) => {
        User.create(req.body, (err, result) => {
            if (err) {
                console.log('error', err);
                res.status(500).send({ status: 400, message: 'Oops! Not able to create user. Please try after sometimes', user: {} });
            } else {
                const otp  = Math.floor(100+Math.random()*9000);
                res.status(200).send({ status: 200, message: 'User created successfully.', data: {otp: otp} });
            }
        });
    },

    // Retrieve and return all Users from the database.
    findAll: (req, res) => {
        User.find({}, (err, result) => {
            if (err) {
                res.status(500).send({ message: 'Oops! Not able to get all users. Please try after sometimes', users: result });
            } else {
                res.status(200).send({ message: 'Users got successfully listed.', users: result });
            }
        });
    },

    // Find a single User with a UserId
    findOne: (req, res) => {
        User.findById({ _id: req.params.userId }, (err, result) => {
            if (err) {
                res.status(500).send({ message: 'Oops! Not able to get user. Please try after sometimes', user: {} });
            } else {
                res.status(200).send({ message: '', user: result });
            }
        });
    },

    // Update a User identified by the UserId in the request
    update: (req, res) => {
        User.findOneAndUpdate({ _id: req.params.userId }, { $set: req.body }, { new: true }, (err, result) => {
            if (err) {
                res.status(500).send({ message: 'Oops! Not able to update user. Please try after sometimes', users: result });
            } else {
                res.status(200).send({ message: 'User updated successfully.', user: result });
            }
        });
    },
    // Delete a User with the specified UserId in the request
    delete: (req, res) => {
        User.findOneAndDelete({ _id: req.params.userId }, (err, result) => {
            if (err) {
                res.status(500).send({ message: 'Oops! Not able to delete user. Please try after sometimes', user: {} });
            } else {
                res.status(200).send({ message: 'User deleted successfully.', user: result });
            }
        });
    }
}


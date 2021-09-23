const profile = require('../models/profile');

module.exports = {
    // Create and Save a new profile
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
        console.log('req',req.body)
        profile.create(req.body, (err, result) => {
            if (err) {
                console.log('error', err);
                res.status(500).send({ status: 400, message: 'Oops! Not able to create profile. Please try after sometimes', profile: {} });
            } else {
                res.status(200).send({ status: 200, message: 'profile created successfully.', profile: result });
            }
        });
    },

    // Retrieve and return all profiles from the database.
    findAll: (req, res) => {
        profile.find({}, (err, result) => {
            if (err) {
                res.status(500).send({ message: 'Oops! Not able to get all profiles. Please try after sometimes', profiles: result });
            } else {
                res.status(200).send({ message: 'profiles got successfully listed.', profiles: result });
            }
        });
    },

    // Find a single profile with a profileId
    findOne: (req, res) => {
        profile.findById({ _id: req.params.profileId }, (err, result) => {
            if (err) {
                res.status(500).send({ message: 'Oops! Not able to get profile. Please try after sometimes', profile: {} });
            } else {
                res.status(200).send({ message: '', profile: result });
            }
        });
    },

    // Update a profile identified by the profileId in the request
    update: (req, res) => {
        profile.findOneAndUpdate({ _id: req.params.profileId }, { $set: req.body },  (err, result) => {
            if (err) {
                res.status(500).send({ message: 'Oops! Not able to update profile. Please try after sometimes', profiles: result });
            } else {
                console.log(req.body);
                res.status(200).send({ message: 'profile updated successfully.', profile: result });
            }
        });
    },
    // Delete a profile with the specified profileId in the request
    delete: (req, res) => {
        profile.findOneAndDelete({ _id: req.params.profileId }, (err, result) => {
            if (err) {
                res.status(500).send({ message: 'Oops! Not able to delete profile. Please try after sometimes', profile: {} });
            } else {
                res.status(200).send({ message: 'profile deleted successfully.', profile: result });
            }
        });
    }
}


const Orgnizaton = require('../models/orgnization');

module.exports = {

    createRules: {
        name: "required|string",
        logo: "required|string",
        address: "required|string",
        city: "required|string",
        state: "required|alpha",
        pinCode: "required|numeric",
        country: "required|alpha",
        numberOfEmployees: "required|numeric",
        description: "required|string",
        email: "required|string",
        password: "required|string",
        contactNumber: "required|string",

    },

    create: (req, res) => {
        console.log(req.body);
        Orgnizaton.create(req.body, (err, result) => {
            console.log('result',result);
            console.log('error', err);
            if (err) {
                res.status(500).send({ status: 500, message: 'Oops! Not able to create orgnizaton. Please try after sometimes', orgnizaton: {} });
            } else {
                console.log(result);
                res.status(200).send({ status: 200, message: 'orgnizaton created successfully.', data: {} });
            }
        });
    },

    // Retrieve and return all orgnizatons from the database.
    findAll: (req, res) => {
        Orgnizaton.find({}, (err, result) => {
            if (err) {
                res.status(500).send({ message: 'Oops! Not able to get all orgnizatons. Please try after sometimes', orgnizatons: result });
            } else {
                res.status(200).send({ message: 'orgnizatons got successfully listed.', orgnizatons: result });
            }
        });
    },

    // Find a single orgnizaton with a orgnizatonId
    findOne: (req, res) => {
        Orgnizaton.findById({ _id: req.params.orgnizatonId }, (err, result) => {
            if (err) {
                res.status(500).send({ message: 'Oops! Not able to get orgnizaton. Please try after sometimes', orgnizaton: {} });
            } else {
                res.status(200).send({ message: '', orgnizaton: result });
            }
        });
    },

    // Update a orgnizaton identified by the orgnizatonId in the request
    update: (req, res) => {
        Orgnizaton.findOneAndUpdate({ _id: req.params.orgnizatonId }, { $set: req.body }, { new: true }, (err, result) => {
            if (err) {
                res.status(500).send({ message: 'Oops! Not able to update orgnizaton. Please try after sometimes', orgnizatons: result });
            } else {
                res.status(200).send({ message: 'orgnizaton updated successfully.', orgnizaton: result });
            }
        });
    },
    // Delete a orgnizaton with the specified orgnizatonId in the request
    delete: (req, res) => {
        Orgnizaton.findOneAndDelete({ _id: req.params.orgnizatonId }, (err, result) => {
            if (err) {
                res.status(500).send({ message: 'Oops! Not able to delete orgnizaton. Please try after sometimes', orgnizaton: {} });
            } else {
                res.status(200).send({ message: 'orgnizaton deleted successfully.', orgnizaton: result });
            }
        });
    }
}


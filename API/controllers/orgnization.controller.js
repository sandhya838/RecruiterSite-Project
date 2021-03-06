const Orgnizaton = require('../models/orgnization');
const fs = require('fs');

module.exports = {
    createRules: {
        name: "required|string",
        logo: "required|string",
        address: "required|string",
        contactPerson: "required|string",
        city: "required|string",
        state: "required|alpha",
        pinCode: "required|numeric",
        country: "required|alpha",
        numberOfEmployees: "required|numeric",
        description: "required|string",
        email: "required|string",
        password: "required|string",
        contactNumber: "required|string",
        url: "required|string",
        firstName: "required|string",
        middleName: "required|string",
        lastName: "required|string",
        organizationName:"required|string",
        location:"required|string",
        turnOver:"required|string",
      




    },

    create: (req, res) => {
        uploadFile(req.file, (isFileUploaded, fileName) => {
            if (isFileUploaded) {
                req.body.logo = fileName;
                Orgnizaton.create(req.body, (err, result) => {
                    console.log(err)
                    if (err) {
                        res.status(500).send({ status: 500, message: 'Oops! Not able to create orgnizaton. Please try after sometimes', orgnizaton: {} });
                    } else {
                        console.log(result);
                        res.status(200).send({ status: 200, message: 'orgnizaton created successfully.', data: {} });
                    }
                });
            } else {
                if (err) throw res.status(500).send({ status: 500, message: 'Oops! Not able to create orgnizaton. Please try after sometimes', orgnizaton: {} });
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
        Orgnizaton.findById({ _id: req.params.orgnizationId }, (err, result) => {
            if (err) {
                res.status(500).send({ message: 'Oops! Not able to get orgnizaton. Please try after sometimes', orgnizaton: {} });
            } else {
                res.status(200).send({ message: '', orgnizaton: result });
            }
        });
    },

    // Update a orgnizaton identified by the orgnizationId in the request
    update: (req, res) => {
        if (req.file) {
            uploadFile(req.file, (isFileUploaded, fileName) => {
                if (isFileUploaded) {
                    req.body.logo = fileName;
                    Orgnizaton.findOneAndUpdate({ _id: req.params.orgnizationId }, { $set: req.body }, { new: true }, (err, result) => {
                        if (err) {
                            res.status(500).send({ message: 'Oops! Not able to update orgnizaton. Please try after sometimes', orgnizatons: result });
                        } else {
                            res.status(200).send({ status:200,message: 'orgnizaton updated successfully.', orgnizaton: result });
                        }
                    });
                } else {
                    if (err) throw res.status(500).send({ status: 500, message: 'Oops! Not able to update orgnizaton. Please try after sometimes', orgnizaton: {} });
                }
            })
        } else {
            Orgnizaton.findOneAndUpdate({ _id: req.params.orgnizationId }, { $set: req.body }, { new: true }, (err, result) => {
                if (err) {
                    res.status(500).send({status:500, message: 'Oops! Not able to update orgnizaton. Please try after sometimes', orgnizatons: result });
                } else {
                    res.status(200).send({ status:200,message: 'orgnizaton updated successfully.', orgnizaton: result });
                }
            });
        }

    },
    // Delete a orgnizaton with the specified orgnizationId in the request
    delete: (req, res) => {
        Orgnizaton.findOneAndDelete({ _id: req.params.orgnizationId }, (err, result) => {
            if (err) {
                res.status(500).send({ message: 'Oops! Not able to delete orgnizaton. Please try after sometimes', orgnizaton: {} });
            } else {
                res.status(200).send({ message: 'orgnizaton deleted successfully.', orgnizaton: result });
            }
        });
    },
    changePassword: (req, res) => {
        Orgnizaton.findById({ _id: req.params.id }, (err, result) => {
            if (err) {
                res.status(500).send({ status: 500, message: err, orgnizaton: {} });
            } else if (result) {
                if (result.password === req.body.currentPassword) {
                    Orgnizaton.findOneAndUpdate({ _id: req.params.id }, { $set: { password: req.body.password } }, { new: true }, (err, result) => {
                        if (err) {
                            res.status(500).send({ status: 500, message: err, orgnizaton: {} });
                        } else {
                            res.status(200).send({ status: 200, message: 'Password updated successfully.', orgnizaton: {} });
                        }
                    })

                } else {
                    res.status(500).send({ status: 500, message: 'Current password didn\'t matched', orgnizaton: {} });
                }
            } else {
                res.status(500).send({ status: 500, message: 'Oops! Not able to get all orgnizaton. Please try after sometimes', orgnizaton: {} });
            }
        })
    },
}


uploadFile = (file, callBack) => {
    const fileName = file.fieldname + '-' + Date.now() + '.' + file.mimetype.split('/').pop();
    fs.rename(file.path, file.destination + fileName, (err) => {
        if (err) {
            callBack(false, '');

        } else {
            callBack(true, fileName);

        }

    });

};


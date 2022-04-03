const profile = require('../models/profile');
const Jobs = require('../models/job');
const fs = require('fs');
const mime = require('mime');

module.exports = {
    createRules: {
        firstName: "required|string",
        lastName: "required|string",
        email: "required|email",
        password: "required|string",

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
        uploadFile(req.file, (isFileUploaded, fileName) => {
            if (isFileUploaded) {
                findCandidateId((candidateId) => {
                    req.body.resume = fileName;
                    if (candidateId) {
                        req.body.candidateId = candidateId;
                        profile.create(req.body, (err, result) => {
                            if (err) {
                                if (err.keyPattern.mobileNumber) {
                                    res.status(412).send({ status: 412, message: req.body.mobileNumber + ' already exist.', profile: {} });
                                } else if (err.keyPattern.email) {
                                    res.status(412).send({ status: 412, message: req.body.email + ' already exist.', profile: {} });
                                } else {
                                    res.status(500).send({ status: 400, message: 'Oops! Not able to create profile. Please try after sometimes', profile: {} });
                                }
                            } else {
                                res.status(200).send({ status: 200, message: 'profile created successfully.', profile: {} });
                            }
                        });

                    } else {
                        res.status(500).send({ status: 400, message: 'Oops! Not able to create profile. Please try after sometimes', profile: {} });
                    }
                })

            } else {
                if (err) throw res.status(500).send({ status: 500, message: 'Oops! Not able to create register user. Please try after sometimes', profile: {} });
            }

        })
    },

    // Retrieve and return all profiles from the database.
    findAll: (req, res) => {
        profile.find({}, (err, result) => {
            if (err) {
                res.status(500).send({ status: 500, message: 'Oops! Not able to get all profiles. Please try after sometimes', profiles: result });
            } else {
                res.status(200).send({ status: 200, message: 'profiles got successfully listed.', profiles: result });
            }
        });
    },

    // Find a single profile with a profileId
    findOne: (req, res) => {
        profile.findById({ _id: req.params.profileId }, (err, result) => {
            if (err) {
                res.status(500).send({ status: 500, message: 'Oops! Not able to get profile. Please try after sometimes', profile: {} });
            } else {
                res.status(200).send({ status: 200, message: '', profile: result });
            }
        });
    },

    // Update a profile identified by the profileId in the request
    update: (req, res) => {
        profile.findOneAndUpdate({ _id: req.params.profileId }, { $set: req.body }, { new: true }, (err, result) => {
            if (err) {
                res.status(500).send({ status: 500, message: 'Oops! Not able to update profile. Please try after sometimes', profile: {} });
            } else {
                res.status(200).send({ status: 200, message: 'profile updated successfully.', profile: result });
            }
        });
    },
    // Delete a profile with the specified profileId in the request
    delete: (req, res) => {
        profile.findOneAndDelete({ _id: req.params.profileId }, (err, result) => {
            if (err) {
                res.status(500).send({ status: 500, message: 'Oops! Not able to delete profile. Please try after sometimes', profile: {} });
            } else {
                res.status(200).send({ status: 200, message: 'profile deleted successfully.', profile: result });
            }
        });
    },
    uploadResume: (req, res, next) => {
        var matches = req.body.resume.match(/^data:([@A-Za-z-+/]+);base64,(.+)$/);
        if (matches.length !== 3) {
            res.status(500).send({ status: 500, message: 'Invalid input string', profiles: '' });
        }
        const filematches = req.body.resume.replace(/^data:.+;base64,/, "");
        const tempExtension = req.body.resume.split(';')[0].split('/')[1];
        let fileName = req.params.profileId + "-resume." + tempExtension;
        try {
            fs.writeFileSync("./public/resume/" + fileName, Buffer.from(filematches, "base64"), 'utf8');
            profile.findOneAndUpdate({ _id: req.params.profileId }, { $set: { resume: fileName } }, { new: true }, (err, result) => {
                if (err) {
                    res.status(500).send({ status: 500, message: 'Oops! Not able to update profile. Please try after sometimes', profile: '' });
                } else {
                    res.status(200).send({ status: 200, message: 'profile updated successfully.', profile: result });
                }
            })


        } catch (e) {
            res.status(500).send({ message: e, profiles: '' });
        }
    },
    recomandedJobs: (req, res) => {
        const searchQuery = {
        };
        if (req.body.jobType) {
            searchQuery.jobType = req.body.jobType;
        }
        if (req.body.experience) {
            searchQuery.experience = '/' + req.body.experience + '/i';
        }
        if (req.body.salary) {
            searchQuery.salary = { $gte: req.body.salary };
        }
        if (req.body.roles) {
            searchQuery.roles = '/' + req.body.roles + '/i';
        }

        if (req.body.skills && req.body.skills.length) {
            searchQuery.skills = { $in: req.body.skills.toString().split(',') }
        }
        if (req.body.location && req.body.location.length) {
            searchQuery.location = { $in: req.body.location.toString().split(',') }
        }
        Jobs.find(
            searchQuery).populate('createdBy').exec
            ((err, result) => {
                if (err) {
                    res.status(500).send({ status: 500, message: 'Oops! Not able to get all profiles. Please try after sometimes', matchedJobs: [] });
                } else {
                    res.status(200).send({ status: 200, message: 'matching jobs successfully listed.', matchedJobs: result });
                }
            });
    },



    changePassword: (req, res) => {
        console.log(req.body);
        profile.findById({ _id: req.params.id }, (err, result) => {
            if (err) {
                res.status(500).send({ status: 500, message: err, profile: {} });
            } else if (result) {
                if (result.password === req.body.currentPassword) {
                    profile.findOneAndUpdate({ _id: req.params.id }, { $set: { password: req.body.password } }, { new: true }, (err, result) => {
                        if (err) {
                            res.status(500).send({ status: 500, message: err, profile: {} });
                        } else {
                            res.status(200).send({ status: 200, message: 'Password updated successfully.', profile: {} });
                        }
                    })

                } else {
                    res.status(500).send({ status: 500, message: 'Current password didn\'t matched', profile: {} });
                }
            } else {
                res.status(500).send({ status: 500, message: 'Oops! Not able to get all profiles. Please try after sometimes', profile: {} });
            }
        })
    },
    certificates: (req, res) => {
        writeCertificate(req.file, (isFileUploaded, fileName) => {
            if (isFileUploaded) {
                const data = [
                    {
                        name: req.body.name,
                        certificate: fileName,
                        month: req.body.month,
                        year: req.body.year,


                    }
                ];

                profile.findOneAndUpdate({ _id: req.params.profileId }, { $push: { certifications: data } }, { new: true },
                    (err, result) => {
                        if (err) {
                            res.status(400).send({ status: 400, message: err.keyValue.email + ' already exist.', profile: {} });

                        } else {
                            res.status(200).send({ status: 200, message: 'profile updated successfully.', profile: result });
                        }
                    });
            } else {
                if (err) throw res.status(500).send({ status: 500, message: 'Oops! Not able to update profile. Please try after sometimes', profile: {} });
            }

        })
    }
}



uploadFile = (file, callBack) => {
    console.log('file', file)
    const fileName = file.fieldname + '-resume-' + Date.now() + '.' + file.mimetype.split('/').pop();
    fs.rename(file.path, file.destination + fileName, (err) => {
        if (err) {
            callBack(false, '');

        } else {
            callBack(true, fileName);

        }

    });

},
    writeCertificate = (file, callBack) => {
        const fileName = file.fieldname + '-' + Date.now() + '.' + file.mimetype.split('/').pop();
        fs.rename(file.path, file.destination + fileName, (err) => {
            if (err) {
                callBack(false, '');

            } else {
                callBack(true, fileName);

            }

        });

    };

findCandidateId = (callBack) => {
    profile.find({}, (err, result) => {
        if (err) {
            callBack(0);
        } else {
            callBack(result.length + 1)
        }
    });
}

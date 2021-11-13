const profile = require('../models/profile');
const Jobs = require('../models/job');
const fs = require('fs');
const mime = require('mime');

module.exports = {
    // Create and Save a new profile
    //['required','numeric','regex:/^[5-9][0-9]{9}$/'],
    createRules: {
        fullName: "required|string",
        role: "alpha",
        email: "string",
        mobileNumber: "string",
        passowrd: "required|alpha",
        handle: "required|alpha"

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
                req.body.resume = fileName;
                profile.create(req.body, (err, result) => {
                    if (err) {
                        res.status(500).send({ status: 400, message: 'Oops! Not able to create profile. Please try after sometimes', profile: {} });
                    } else {
                        console.log(result);
                        res.status(200).send({ status: 200, message: 'profile created successfully.', profile: result });
                    }
                });
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
                res.status(500).send({ status: 500, message: 'Oops! Not able to update profile. Please try after sometimes', profiles: result });
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
            searchQuery.experience = req.body.experience;
        }
        if (req.body.salary) {
            searchQuery.salary = { $gte: req.body.salary };
        }
        if (req.body.roles) {
            searchQuery.roles = req.body.roles;
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
    }
}



uploadFile = (file, callBack) => {
    const fileName = file.fieldname + '-resume-' + Date.now() + '.' + file.mimetype.split('/').pop();
    fs.rename(file.path, file.destination + fileName, (err) => {
        if (err) {
            callBack(false, '');

        } else {
            callBack(true, fileName);

        }

    });

};

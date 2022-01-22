const Jobs = require('../models/job');

module.exports = {
    create: (req, res) => {
        findLastCountOfJobs(count => {
            if (count) {
                req.jobId = count;
                const data = { ...req.body, jobId: count };
                Jobs.create(data, (err, result) => {
                    if (err) {
                        res.status(500).send({ status: 400, message: 'Oops! Not able to create jobs. Please try after sometimes', jobs: {} });
                    } else {
                        res.status(200).send({ status: 200, message: 'jobs created successfully.', job: {} });
                    }
                });

            }
            else {
                res.status(500).send({ status: 400, message: 'Oops! Not able to create jobs. Please try after sometimes', jobs: {} });
            }

        });

    },

    // Retrieve and return all jobss from the database.

    findAllJobs: (req, res) => {
        Jobs.
            find({ orgnizationId: req.params.jobId }).populate('createdBy').populate('createdBy').sort({ jobId: -1 }).exec((err, result) => {
                if (err) {
                    res.status(500).send({ status: 500, message: 'Oops! Not able to get all jobs. Please try after sometimes', jobs: result });
                } else {
                    res.status(200).send({ status: 200, message: 'jobss got successfully listed.', jobs: result });
                }
            });
    },

    findAll: (req, res) => {
        Jobs.
            find({}).
            populate('createdBy').sort({ jobId: -1 }).
            exec((err, result) => {
                if (err) {
                    res.status(500).send({ message: 'Oops! Not able to get all jobs. Please try after sometimes', jobs: result });
                } else {
                    res.status(200).send({ message: 'jobss got successfully listed.', jobs: result });
                }
            });
    },

    // Find a single jobs with a jobsId

    findOne: (req, res) => {
        Jobs.
            findOne({ _id: req.params.jobId }).
            populate('createdBy').
            exec((err, result) => {
                if (err) {
                    res.status(500).send({ message: 'Oops! Not able to get job. Please try after sometimes', jobs: {} });
                } else {
                    res.status(200).send({ message: '', jobs: result });
                }
            });
    },

    // Update a jobs identified by the jobsId in the request
    update: (req, res) => {
        Jobs.findOneAndUpdate({ _id: req.params.jobId }, { $set: req.body }, { new: true }, (err, result) => {
            if (err) {
                res.status(500).send({ message: 'Oops! Not able to update jobs. Please try after sometimes', jobs: result });
            } else {
                res.status(200).send({ message: 'jobs updated successfully.', jobs: result });
            }
        });
    },
    // Delete a jobs with the specified jobsId in the request
    delete: (req, res) => {
        Jobs.findOneAndDelete({ _id: req.params.jobId }, (err, result) => {
            if (err) {
                res.status(500).send({ message: 'Oops! Not able to delete jobs. Please try after sometimes', jobs: {} });
            } else {
                res.status(200).send({ message: 'jobs deleted successfully.', jobs: result });
            }
        });
    },
    makeJobActiveOrInActive: (req, res) => {
        Jobs.findOneAndUpdate({ _id: req.params.jobId }, { $set: req.body }, { new: true }, (err, result) => {
            if (err) {
                res.status(500).send({ message: 'Oops! Not able to update jobs. Please try after sometimes', jobs: result });
            } else {
                res.status(200).send({ message: 'jobs updated successfully.', jobs: result });
            }
        });
    },
    searchJobs: (req, res) => {
        const regex = new RegExp(["^", req.body.search, "$"].join(""), "i");
        Jobs.find({
            $or: [
                { 'skills.primary.name': regex },
                { 'skills.secondary.name': regex }
            ]
        }).populate('createdBy').
            exec((err, result) => {
                if (err) {
                    res.status(500).send({ message: 'Oops! Not able to find jobs. Please try after sometimes', jobs: [] });
                } else {
                    res.status(200).send({ message: 'jobs found successfully.', jobs: result });
                }
            })

    },
}


findLastCountOfJobs = (callBack) => {
    Jobs.
        find({}, (err, result) => {
            if (result) {
                callBack(result.length + 1)
            }
        })
}


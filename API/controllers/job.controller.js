const Jobs = require('../models/job');

module.exports = {
    create: (req, res) => {

        Jobs.create(req.body, (err, result) => {
            if (err) {
                res.status(500).send({ status: 400, message: 'Oops! Not able to create jobs. Please try after sometimes', jobs: {} });
            } else {
                res.status(200).send({ status: 200, message: 'jobs created successfully.', job: {} });
            }
        });
    },

    // Retrieve and return all jobss from the database.

    findAllJobs: (req, res) => {
        Jobs.
            find({ orgnizationId: req.params.jobId }, (err, result) => {
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
            populate('createdBy').
            exec((err, result) => {
                if (err) {
                    res.status(500).send({ message: 'Oops! Not able to get all jobs. Please try after sometimes', jobss: result });
                } else {
                    res.status(200).send({ message: 'jobss got successfully listed.', jobss: result });
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
                res.status(500).send({ message: 'Oops! Not able to update jobs. Please try after sometimes', jobss: result });
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
    }
}


const feedback = require('../models/feedback');

module.exports = {
    create: (req, res) => {
        feedback.create(req.body, (err, result) => {
            if (err) {
                res.status(500).send({ status: 400, message: 'Oops! Not able to create feedback. Please try after sometimes', feedback: {} });
            } else {
                res.status(200).send({ status: 200, message: 'feedback created successfully.', feedback: {} });
            }
        });
    },

    // Retrieve and return all feedbacks from the database.

    findAllfeedback: (req, res) => {
        feedback.
            find({ orgnizationId: req.params.feedbackId }, (err, result) => {
                if (err) {
                    res.status(500).send({ status: 500, message: 'Oops! Not able to get all feedback. Please try after sometimes', feedback: result });
                } else {
                    res.status(200).send({ status: 200, message: 'feedbacks got successfully listed.', feedback: result });
                }
            });
    },

    findAll: (req, res) => {
        feedback.
            find({}).
            populate('candidateId').
            exec((err, result) => {
                if (err) {
                    res.status(500).send({ message: 'Oops! Not able to get all feedback. Please try after sometimes', feedbacks: result });
                } else {
                    res.status(200).send({ message: 'feedbacks got successfully listed.', feedbacks: result });
                }
            });
    },

    // Find a single feedback with a feedbackId

    findOne: (req, res) => {
        feedback.
            findOne({ _id: req.params.feedbackId }).
            populate('candidateId').
            exec((err, result) => {
                if (err) {
                    res.status(500).send({ message: 'Oops! Not able to get feedback. Please try after sometimes', feedback: {} });
                } else {
                    res.status(200).send({ message: '', feedback: result });
                }
            });
    },

    // Update a feedback identified by the feedbackId in the request
    update: (req, res) => {
        feedback.findOneAndUpdate({ _id: req.params.feedbackId }, { $set: req.body }, { new: true }, (err, result) => {
            if (err) {
                res.status(500).send({ message: 'Oops! Not able to update feedback. Please try after sometimes', feedbacks: result });
            } else {
                res.status(200).send({ message: 'feedback updated successfully.', feedback: result });
            }
        });
    },
    // Delete a feedback with the specified feedbackId in the request
    delete: (req, res) => {
        feedback.findOneAndDelete({ _id: req.params.feedbackId }, (err, result) => {
            if (err) {
                res.status(500).send({ message: 'Oops! Not able to delete feedback. Please try after sometimes', feedback: {} });
            } else {
                res.status(200).send({ message: 'feedback deleted successfully.', feedback: result });
            }
        });
    }
}


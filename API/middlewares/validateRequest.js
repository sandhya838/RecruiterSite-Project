const validator = require('../helpers/validate');

module.exports = {
    validateParams: (params) => {
        return (req, res, next) => {
            const requestBody = req.body || req.params || req.query || req.file;
            validator(requestBody, params, {}, (err, status) => {
                if (!status) {
                    res.status(412)
                        .send({
                            success: false,
                            message: err,
                            data: err
                        });
                } else {
                    next();
                }
            });

        }
    }

}



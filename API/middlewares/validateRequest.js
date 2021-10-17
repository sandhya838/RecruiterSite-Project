const validator = require('../helpers/validate');

module.exports = {
    validateParams: (params) => {
        return (req, res, next) => {
            const request = req.body || req.params || req.query;
            validator(request, params, {}, (err, status) => {
                if (!status) {
                    res.status(412)
                        .send({
                            success: false,
                            message: 'Validation failed',
                            data: err
                        });
                } else {
                    next();
                }
            });

        }
    }

}



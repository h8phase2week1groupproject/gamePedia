const { verifyToken } = require('../helpers/jwt')
const User = require('../models/userModels')

module.exports = function (req, res, next) {
    try {
        let decoded = verifyToken(req.headers.token);
        User.findOne({
            email: decoded.email
        })
            .then(user => {
                console.log(user)
                if (user) {
                    req.decoded = decoded;
                    next()
                } else {
                    throw { status: 401, messages: 'Unauthorized' }
                }
            })
            .catch(next);
    } catch (error) {
        throw { status: 401, messages: 'Unauthorized' }
    }
}
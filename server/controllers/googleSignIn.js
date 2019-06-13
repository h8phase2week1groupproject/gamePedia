const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const { createToken } = require('../helpers/jwt')
const User = require('../models/user')

class OauthController{
    static loginFromGoogle(req, res, next){
        // console.log('login dari google')
        const token = req.body.idToken
        client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID
        })
        .then((ticket) => {
            const { name, email, picture } = ticket.getPayload()
            return User.findOne({
                email
            })
            .then((found) => {
                if(found){
                    // console.log('email found')
                    const myToken = createToken({ name ,email, picture })
                    res.status(200).json({
                        token: myToken,
                        email,
                        name,
                        picture
                    })
                }else{
                    // console.log('email not found')
                    let password = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                    return User.create({
                        name, email, password
                    })
                    .then((newUser) => {
                        const myToken = createToken({ name ,email, picture })
                        res.status(200).json({
                            token: myToken,
                            email,
                            name,
                            picture
                        })  
                    })
                }
            })
        })
        .catch(next)
    }
}

module.exports = OauthController
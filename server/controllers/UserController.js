const { User } = require('../models');
const { comparePassword } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')

class UserController {
    static async register(req, res, next) {
        try {
            const { fullname, email, password } = req.body;

            const createdUser = await User.create({ fullname, email, password });

            console.log(createdUser);

            res.status(201).json({
                "id": createdUser.id,
                "fullname": createdUser.username,
                "email": createdUser.email,   
            })
        } catch (error) {
            next(error)
        }
    }

    static async login(req, res, next) {
        try {

        } catch (error) {

        }
    }
}

module.exports = UserController
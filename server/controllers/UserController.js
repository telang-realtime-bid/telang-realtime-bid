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
            const { email, password } = req.body

            if (!email) {
                throw { name: 'emailRequired' }
            }
            if (!password) {
                throw { name: 'passwordRequired' }
            }
        
            const user = await User.findOne({ where: { email } })
           
            if (!user)  {
                throw { name: 'invalidUser' }
            }
            
            const isPasswordValid = comparePassword(password, user.password)
            if (!isPasswordValid) {
                throw { name: 'invalidUser' }
            }
           
            const access_token = signToken({ id: user.id })
            
            res.status(200).json({ access_token })
        } catch (error) {            
            next(error)
        }
    }
}

module.exports = UserController
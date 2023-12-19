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
                res.status(400).json({ message: "Email is missing" })
                return;
            }

            if (!password) {
                res.status(400).json({ message: "Password is missing" })
                return;
            }
        
            const user = await User.findOne({ where: { email } })
           
            if (!user)  {
                res.status(401).json({ message: "Invalid email/password" })
                return;
            }
            
            const isPasswordValid = comparePassword(password, user.password)
            if (!isPasswordValid) {
                res.status(401).json({ message: "Invalid email/password" })
                return;
            }
           
            const access_token = signToken({ id: user.id })
            
            res.status(200).json({ access_token })
        } catch (error) {            
            next(error)
        }
    }
}

module.exports = UserController
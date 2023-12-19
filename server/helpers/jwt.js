const jwt = require('jsonwebtoken')

let JWT_SECRET = 'telang-realtime-bid' // NANTI TARUH KE ENV
function signToken(dataUser) {
    let { id } = dataUser
    return jwt.sign({ id }, JWT_SECRET)
}
function verifyToken(token) {
    let data = jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return 'invalidToken'
        } else {
            return decoded
        }
    })
    return data
}

module.exports = { signToken, verifyToken }
function errorHandlers(error, req, res, next) {
    console.log(error)
    let statusCode = 500
    let message = 'Internal server error'
    switch (error.name) {
        case 'SequelizeValidationError':
        case 'SequelizeUniqueConstraintError':
            statusCode = 400
            message = error.errors[0].message
            break
        case 'invalidToken':
            statusCode = 401
            message = "Invalid token"
            break
    }
    res.status(statusCode).json({ message })
}

module.exports = errorHandlers
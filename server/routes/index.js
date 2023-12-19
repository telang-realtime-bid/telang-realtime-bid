const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')
const PaymentController = require('../controllers/PaymentController')
const MainController = require('../controllers/MainController')

const errorHandlers = require('../middlewares/errorHandlers')
const authen = require('../middlewares/authen')

router.get('/', (req, res) => {
    res.status(200).json({ message: "Server is Running..."})
})

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/payment/midtrans/notification', PaymentController.getMidtransNotification)

// router.use(authen)

router.get('/products', MainController.getAllProducts)  // home (tampilin semua product yang sold false)
router.post('/products', MainController.postProduct)    // tambah product
router.delete('/products/:productId', MainController.deleteProduct) // delete product

router.get('/products/:productId', MainController.getAllBid) // ambil semua bid dari suatu product (ambil pesan)
router.post('/products/:productId', MainController.chooseTheWinnerBid) // pilih pemenang lelang
router.post('/bid', MainController.sendBid) // kirim bid

router.get('/users/products', MainController.productsWinBid) // ambil semua product yang dimenangin oleh user

router.post('/payment/midtrans/token', PaymentController.getMidtransToken)

router.use(errorHandlers)


module.exports = router
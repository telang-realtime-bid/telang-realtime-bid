const midtransClient = require("midtrans-client")
const { User, Bid, OrderBid, Product } = require('../models');
class PaymentController {
    static async getMidtransToken(req, res, next) {
        try {
            let snap = new midtransClient.Snap({
                isProduction: false,
                serverKey: 'SB-Mid-server-Sr4BTgFXZD2obO4arnlKBetR'
            })

            let find = await OrderBid.findByPk(req.params.orderBidId)

            let lastOrder = await OrderBid.findOne({
                order: [["createdAt", "desc"]]
            })
            let lastId = lastOrder ? lastOrder.id + 1 : 1
            let OrderBidUpdate = await OrderBid.update({
                orderId: "ORD-SUBS-" + Date.now() + lastId,
            })
            let parameter = {
                "transaction_details": {
                    "order_id": OrderBidUpdate.orderId,
                    "gross_amount": find.amount
                },
                "customer_details": {
                    "first_name": req.user.fullname,
                    "email": req.user.email,
                },
                "item_details": [
                    {
                        "id": "TELANG-Product",
                        "price": find.amount,
                        "quantity": 1,
                        "name": "Telang Product",
                        "brand": "Telang Product",
                        "category": "Buy Product"
                    }
                ],
            }
            let response = await snap.createTransaction(parameter)
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }

    static async getMidtransNotification(req, res, next) {
        try {

        } catch (error) {

        }
    }
}

module.exports = PaymentController
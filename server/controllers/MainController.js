const { User, Product, Bid, OrderBid } = require("../models/index");

class MainController {
    static async getAllProducts(req, res, next) {
        try {
            const data = await Product.findAll({
                include: {
                    model: User,
                    attributes: {
                        exclude: ["password"],
                    },
                },
            });
            res.status(200).json({ message: `Successfully get the data`, data });
        } catch (error) {
            next(error);
        }
    }

    static async postProduct(req, res, next) {
        try {
            const { name, description, imageUrl, currentBid } = req.body;
            const data = await Product.create({
                name,
                description,
                imageUrl,
                currentBid,
                UserId: req.user.id
            });
            res.status(201).json(data);
        } catch (error) {
            next(error);
        }
    }

    static async deleteProduct(req, res, next) {
        try {
            const { productId } = req.params;

            if (!productId) {
                throw { name: 'invalidProductId' }
            }

            const data = await Product.findByPk(productId)

            if (!data) {
                throw { name: 'productNotFound' }
            }
            await data.destroy()
            res.status(200).json({ message: `Successfully Deleted Product` });
        } catch (error) {
            next(error)
        }
    }

    static async getProductById(req, res, next) {
        try {
            const { productId } = req.params;

            if (!productId) {
                throw { name: 'invalidProductId' }
            }

            const data = await Product.findOne({
                where: {
                    id: productId
                },
                include: {
                    model: User,
                    attributes: {
                        exclude: ["password"],
                    },
                },
            })

            if (!data) {
                throw { name: 'productNotFound' }
            }
            res.status(200).json(data);
        } catch (error) {
            next(error)
        }
    }

    static async getAllBid(req, res, next) {
        try {
            const productId = req.params.productId;

            const product = await Product.findByPk(productId);

            if (!product) {
                throw { name: 'productNotFound' }
            }

            const bids = await Bid.findAll({
                where: { ProductId: productId },
                include: [
                    {
                        model: User,
                        attributes: { exclude: ['password'] },
                    },
                ],
            });
            return res.status(200).json(bids);
        } catch (error) {
            next(error);
        }
    }

    static async chooseTheWinnerBid(req, res, next) {
        try {
            await Product.update({
                sold: true
            })
            let createOrderBid = await OrderBid.create({
                name,
                imageUrl,
                description,
                amount,
                UserId,
            })
            res.status(201).json(createOrderBid);
        } catch (error) {
            next(error)
        }
    }

    static async sendBid(req, res, next) {
        try {
            if (req.body.bidAmount === '') {
                throw { name: "inputYourAmount" }
            }
            let newBid = await Bid.create({
                UserId: req.user.id,
                ProductId: req.body.ProductId,
                bidAmount: req.body.bidAmount,
            })
            return res.status(201).json(newBid)
        } catch (error) {
            next(error)
        }
    }

    static async productsWinBid(req, res, next) {
        try {
            let data = await OrderBid.findAll({
                where: {
                    UserId: req.user.id
                }
            })
            res.status(201).json(data);
        } catch (error) {
            next(error)
        }
    }

    static async listByUserId(req, res, next) {
        try {
            const userId = req.params.userId; 
           
            const products = await Product.findAll({
              where: {
                UserId: userId,
              },
              include: {
                model: User, 
                attributes: {
                  exclude: ["password"],
                },
              },
            });
        
            res.status(200).json(products);
        } catch (error) {
            next(error)
        }
    }
}

module.exports = MainController;

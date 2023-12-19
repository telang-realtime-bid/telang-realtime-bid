const { Product, Bid, User } = require('../models');

class MainController {
    static async getAllProducts(req, res, next) {
        try {

        } catch (error) {

        }
    }

    static async postProduct(req, res, next) {
        try {

        } catch (error) {

        }
    }

    static async deleteProduct(req, res, next) {
        try {

        } catch (error) {

        }
    }

    static async getAllBid(req, res, next) {
        try {
            const productId = req.params.productId;

            const product = await Product.findByPk(productId);

            if (!product) {
                throw { name: 'Product not found' }
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
        
            if (!bids) {
              return res.status(404).json({ message: 'Bids not found' });
            }
        
            return res.status(200).json(bids);
          } catch (error) {
            next(error);
        }
    }

    static async chooseTheWinnerBid(req, res, next) {
        try {

        } catch (error) {

        }
    }

    static async sendBid(req, res, next) {
        try {

        } catch (error) {

        }
    }

    static async productsWinBid(req, res, next) {
        try {

        } catch (error) {

        }
    }
}

module.exports = MainController
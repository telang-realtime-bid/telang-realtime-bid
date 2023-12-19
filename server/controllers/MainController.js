const express = require("express");
const { User, Product, Bid } = require("../models/index");

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
      const { name, description, imageUrl } = req.body;
      const data = await Product.create({
        name,
        description,
        imageUrl,
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
            return res.status(400).json({ message: 'Invalid product ID' });
        }
        
        const data = await Product.findByPk(productId)
        
        if (!data) {
            return res.status(404).json({ message: 'Product not found' });
        }
        await data.destroy()
        res.status(200).json({ message: `Successfully Deleted Product` });
    } catch (error) {
        next(error)
    }
  }

  static async getAllBid(req, res, next) {
    try {
    } catch (error) { }
  }

  static async chooseTheWinnerBid(req, res, next) {
    try {
    } catch (error) { }
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
    } catch (error) { }
  }
}

module.exports = MainController;

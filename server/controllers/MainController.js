const express = require("express");
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
    const { id } = req.params;
    try {
    } catch (error) { }
  }

  static async getAllBid(req, res, next) {
    try {
    } catch (error) { }
  }

  static async chooseTheWinnerBid(req, res, next) {
    try {
      await Product.update({
        sold : true
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
    } catch (error) { }
  }
}

module.exports = MainController;

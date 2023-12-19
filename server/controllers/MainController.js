const express = require("express");
const { User, Product } = require("../models/index");

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
    } catch (error) {}
  }

  static async getAllBid(req, res, next) {
    try {
    } catch (error) {}
  }

  static async chooseTheWinnerBid(req, res, next) {
    try {
    } catch (error) {}
  }

  static async sendBid(req, res, next) {
    try {
    } catch (error) {}
  }

  static async productsWinBid(req, res, next) {
    try {
    } catch (error) {}
  }
}

module.exports = MainController;

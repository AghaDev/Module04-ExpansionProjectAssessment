import sequelize from "../config/connection.js";
import { DataTypes } from "sequelize";
import User from "../Models/userModel.js"


const Product = sequelize.define("Product", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,

  },

  description: {
    type: DataTypes.STRING,
    allowNull: false,

  },

  price: {
    type: DataTypes.STRING,
    allowNull: false,

  },

  supplier: {
    type: DataTypes.STRING,
    allowNull: false,

  },
});

User.hasMany(Product)
Product.belongsTo(User)

Product.sync();

export default Product;

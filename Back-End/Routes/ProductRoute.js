import ProductController from "../Controllers/ProductController.js";
import express from "express";

const Router = express.Router();

Router.get('/' , ProductController.getAllProducts);

Router.get('/:id' , ProductController.getProductById);

Router.post('/' , ProductController.createProduct);

Router.delete('/:id' , ProductController.deleteProduct);

Router.patch('/:id' , ProductController.updateProduct);

export default Router;





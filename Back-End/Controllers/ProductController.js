import Product from "../Models/ProductModel.js";
import User from "../Models/userModel.js";
class ProductsController{

    static async getAllProducts(req, res){
        try{
            const product = await Product.findAll(
                {
                    include: [{
                        model:User,
                    }
                    ]
            }
            );
            return res.status(200).json(product);
        }
        catch(err){
            return res.status(500).json(err.message);
        }
    } 

    static async getProductById(req, res){
        try{
        const product = await Product.findByPk(
            req.params.id,
            {include: [{
                model:User,
            }
            ]}
        );
        return res.status(200).json(product);
    }
    catch(err){
        return res.status(500).json(err.message);
    }
}

    static async createProduct(req, res){
        try{
            console.log("body ",req.body)
            const user = await User.findByPk(req.body.userId);
            const product = await Product.create(req.body);
            product.UserId = user.id;
            await product.save();
            return res.status(201).json(product);
        }   
        catch(err){
            return res.status(500).json(err.message);
        }
}

    static async deleteProduct(req, res){
        try{
            const product = await Product.findByPk(req.params.id);
            res.status(200).json(product);
            await product.destroy();
        }
        catch(err){
            return res.status(500).json(err.message);
        }
    }

    static async updateProduct(req, res){
        // console.log(req.body)
        try{
            const user = await User.findByPk(req.body.userId);
            const product = await Product.findByPk(req.params.id);
            product.UserId = user.id;
            await product.update(req.body); 
            return res.status(200).json(product);
            }
        
        catch(err){
            return res.status(500).json(err.message);
        }
    }
}

export default ProductsController;
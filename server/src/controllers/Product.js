import Product from "../models/Product"

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        products ? res.status(200).send(products) : res.status(404).send("Not found!")
    } catch (error) {
        res.status(500).send(error)
    }
}

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        product ? res.status(200).send(product) : res.status(404).send("Not found!")
    } catch (error) {
        res.status(500).send(error);
    }
}

export const insertProduct = async (req, res) => {
    try {
        const product = new Product({
            title: req.query.title
        })
        if(product) {
            await product.save()
            res.status(200).send("Category added!");
        } else {
            res.status(404).send("Not found!");
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

export const updateProductById = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id)
        if(product) {
            product.title = req.query.title
            await product.save()
            res.status(200).send("Category updated!");
        } else {
            res.status(404).send("Not found!");
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

export const deleteProductById = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id) ?
            res.status(200).send("Category deleted!") :
                res.status(404).send("Not found!")  
    } catch (error) {
        res.status(500).send(error);        
    }
}
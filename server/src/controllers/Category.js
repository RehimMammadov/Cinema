import Category from "../models/Category"

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find({})
        categories ? res.status(200).send(categories) : res.status(404).send("Not found!")
    } catch (error) {
        res.status(500).send(error)
    }
}

export const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id)
        category ? res.status(200).send(category) : res.status(404).send("Not found!")
    } catch (error) {
        res.status(500).send(error);
    }
}

export const insertCategory = async (req, res) => {
    try {
        const category = new Category({
            title: req.query.title
        })
        if(category) {
            await category.save()
            res.status(200).send("Category added!");
        } else {
            res.status(404).send("Not found!");
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

export const updateCategoryById = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id)
        if(category) {
            category.title = req.query.title
            await category.save()
            res.status(200).send("Category updated!");
        } else {
            res.status(404).send("Not found!");
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

export const deleteCategoryById = async (req, res) => {
    try {
        await Category.findByIdAndDelete(req.params.id) ?
            res.status(200).send("Category deleted!") :
                res.status(404).send("Not found!")  
    } catch (error) {
        res.status(500).send(error);        
    }
}
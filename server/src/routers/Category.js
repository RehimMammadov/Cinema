import express from "express"
import { deleteCategoryById, getCategories, getCategoryById, insertCategory, updateCategoryById } from "../controllers/Category"

const categoryRouter = express.Router()

categoryRouter.get("/", getCategories)
categoryRouter.get("/:id", getCategoryById)
categoryRouter.get("/", insertCategory)
categoryRouter.get("/:id", updateCategoryById)
categoryRouter.get("/:id", deleteCategoryById)


export default categoryRouter
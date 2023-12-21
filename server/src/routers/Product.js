import express from "express"
import { deleteProductById, getProductById, getProducts, insertProduct, updateProductById } from "../controllers/Product"

const productRouter = express.Router()

categoryRouter.get("/", getProducts)
categoryRouter.get("/:id", getProductById)
categoryRouter.get("/", insertProduct)
categoryRouter.get("/:id", updateProductById)
categoryRouter.get("/:id", deleteProductById)


export default productRouter
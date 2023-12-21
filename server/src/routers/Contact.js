import express from "express"
import { deleteContactById, getContactById, getContacts, insertContact, updateContactById } from "../controllers/Contact"

const contactRouter = express.Router()

contactRouter.get("/", getContacts)
contactRouter.get("/:id", getContactById)
contactRouter.post("/", insertContact)
contactRouter.put("/:id", updateContactById)
contactRouter.delete("/:id", deleteContactById)

export default contactRouter
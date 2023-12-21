import express from "express";
import { deleteUserById, getUserById, getUsers, insertUser, updateUserById } from "../controllers/User";

const userRouter = express.Router();

userRouter.get("/", getUsers)
userRouter.get("/:id", getUserById)
userRouter.post("/", insertUser)
userRouter.put("/:id", updateUserById)
userRouter.delete("/:id", deleteUserById)


module.exports = userRouter
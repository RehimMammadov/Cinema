import express from "express"
import { deleteActorById, getActorById, getActors, insertActor, updateActorById } from "../controllers/Actor";

const actorRouter = express.Router();

actorRouter.get("/", getActors)
actorRouter.get("/:id", getActorById)
actorRouter.post("/", insertActor)
actorRouter.put("/:id", updateActorById)
actorRouter.delete("/:id", deleteActorById)

export default actorRouter
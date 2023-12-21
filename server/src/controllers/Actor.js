import Actor from "../models/Actor";

export const getActors = async (req, res) => {
    try {
        const actors = await Actor.find({});
        actors ? res.status(200).send(actors) : res.status(404).send("Not Found!");
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getActorById = async (req, res) => {
    try {
        const actor = await Actor.findById(req.params.id);
        actor ? res.status(200).send(actor) : res.status(404).send("not Found!");
    } catch (error) {
        res.status(500).send(error);
    }
}

export const insertActor = async (req, res) => {
    try {
       const actor = new Actor({
            fullName: req.query.fullName
       }) 
       if (actor) {
        await actor.save();
        res.status(200).send("Actor added!");
       } else {
        res.status(404).send("Not Found!");
       }
    } catch (error) {
        res.status(500).send(error);
    }
}

export const updateActorById = async (req, res) => {
    try {
        const actor = await Actor.findByIdAndUpdate(req.params.id);
        if(actor) {
            actor.fullName = req.query.fullName
            await actor.save();
            res.status(200).send("Actor updated!");
        } else {
            res.status(404).send("Not Found!");
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

export const deleteActorById = async (req, res) => {
    try {
        await Actor.findByIdAndDelete(req.params.id) ?
            res.status(200).send("Actor deleted!") :
                res.status(404).send("Not Found!");
    } catch (error) {
        res.status(500).send(error)
    }
}
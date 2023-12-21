import Contact from "../models/Contact";

export const getContacts = async (req, res) => {
    try {
        const users = await Contact.find({});
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    };
};

export const getContactById = async (req, res) => {
    try {
        const user = await Contact.findById(req.params.id);
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    };
};

export const insertContact = async (req, res) => {
    try {
        const user = new Contact({
            userName: req.query.userName,
            message: req.query.message
        })
        user.save()
        res.status(200).send("Contact created!");
    } catch (error) {
        res.status(500).send(error);
    }
}

export const updateContactById = async (req, res) => {
    try {
        const user = await Contact.findByIdAndUpdate(req.params.id);
        if(user) {
            user.username = req.query.userName,
            user.message = req.query.message,
            await user.save();
            res.status(200).send("Contact updated");
        } else {
            res.status(404).send("Not Found!");
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

export const deleteContactById = async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id) ?
            res.status(200).send("Contact deleted!") :
                res.status(404).send("Not Found!");
        
    } catch (error) {
        res.status(500).send("User deleted!");
    }
}
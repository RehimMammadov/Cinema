import User from "../models/User"
import bcrypt from "bcrypt"

export const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    };
};

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    };
};

export const insertUser = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.query.password, 10)
        const user = new User({
            fullName: req.query.fullName,
            userName: req.query.userName,
            email: req.query.email,
            password: hashedPassword
        })
        user.save()
        res.status(200).send("User created!");
    } catch (error) {
        res.status(500).send(error);
    }
}

export const updateUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id);
        if(user) {
            user.fullName = req.query.fullName,
            user.username = req.query.userName,
            user.email = req.query.email,
            user.password = req.query.password
            await user.save();
            res.status(200).send("User updated");
        } else {
            res.status(404).send("Not Found!");
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

export const deleteUserById = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id) ?
            res.status(200).send("User deleted!") :
                res.status(404).send("Not Found!");
        
    } catch (error) {
        res.status(500).send("User deleted!");
    }
}
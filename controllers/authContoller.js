import UserModel from "../models/userSchema.js";
import HttpError from "../models/http-erro.js";
import sendSuccess from "../utils/SucessHandler.js";

export const createUser = async (req, res, next) => {
    const { name, email, password } = req.body;        // Inserting the user 
    try {
        const user = await UserModel.create({ name, email, password });
        sendSuccess(res, "User created sucessfully", {user}, 201)
    } catch (error) {
        console.error("Error creating user:", error);
        return next(new HttpError("Hey Man how is life", 404)) 
    }
};
 


export const getUser = async (req, res) => {                  // Getting data by user
    try {  
        const users = await UserModel.findAll();
        res.status(200).json({ msg: "Users retrieved successfully", users });
    } catch (error) {
        console.error("Error retrieving users:", error);
        res.status(500).json({ msg: "Internal server error", error: error.message });
    }
};



export const getUserById = async (req, res) => {
    const { id } = req.params; 
    try {
        const user = await UserModel.findByPk(id);       // pk stands for primary key hai
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        res.status(200).json({ msg: "User retrieved successfully", user });
    } catch (error) {
        console.error("Error retrieving user:", error);
        res.status(500).json({ msg: "Internal server error", error: error.message });
    }
};


export const deleteUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await UserModel.findByPk(id);
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        await user.destroy();         // for delet use deestroy

        res.status(200).json({ msg: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ msg: "Internal server error", error: error.message });
    }
};



export const updateUserById = async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;

    try {
        const user = await UserModel.findByPk(id);
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        user.name = name;
        user.email = email;
        user.password = password;

        await user.save();

        res.status(200).json({ msg: "User updated successfully", user });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ msg: "Internal server error", error: error.message });
    }
};

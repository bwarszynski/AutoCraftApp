import User from "../models/UserSchema.js";

export const updateUser = async (req, res) => {
    const id = req.params.id

    try {
        const updatedUser = await User.findByIdAndUpdate(id, {$set: req.body}, {new: true})

        res.status(200).json({success: true, message: "Pomyślnie zaktualizowano użytkownika", data: updatedUser})
    } catch (err) {
        res.status(500).json({success: false, message: "Nie udało się zaktualizować"})
    }
};

export const deleteUser = async (req, res) => {
    const id = req.params.id;

    try {
        await User.findByIdAndDelete(id);

        res.status(200).json({success: true, message: "Pomyślnie usunięto użytkownika"});

    } catch (err) {
        res.status(500).json({success: false, message: "Nie udało się usunąć"});
    }
};

export const getSingleUser = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await User.findById(id).select("-password");

        res.status(200).json({success: true, message: "Znaleziono użytkownika", data: user});

    } catch (err) {
        res.status(404).json({success: false, message: "Nie znaleziono użytkownika"})
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}).select("-password");

        res.status(200).json({success: true, message: "Znaleziono użytkowników", data: users});

    } catch (err) {
        res.status(404).json({success: false, message: "Nie znaleziono użytkowników"})
    }
};
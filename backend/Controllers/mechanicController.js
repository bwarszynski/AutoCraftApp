import Mechanic from "../models/MechanicSchema.js";

export const updateMechanic = async (req, res) => {
    const id = req.params.id

    try {
        const updatedMechanic = await Mechanic.findByIdAndUpdate(id, {$set: req.body}, {new: true})

        res.status(200).json({success: true, message: "Pomyślnie zaktualizowano mechanika", data: updatedMechanic})
    } catch (err) {
        res.status(500).json({success: false, message: "Nie udało się zaktualizować"})
    }
};

export const deleteMechanic = async (req, res) => {
    const id = req.params.id;

    try {
        await Mechanic.findByIdAndDelete(id);

        res.status(200).json({success: true, message: "Pomyślnie usunięto mechanika"});

    } catch (err) {
        res.status(500).json({success: false, message: "Nie udało się usunąć"});
    }
};

export const getSingleMechanic = async (req, res) => {
    const id = req.params.id;

    try {
        const mechanic = await Mechanic.findById(id).populate("reviews").select("-password");

        res.status(200).json({success: true, message: "Znaleziono mechanika", data: mechanic});

    } catch (err) {
        res.status(404).json({success: false, message: "Nie znaleziono mechanika"})
    }
};

export const getAllMechanics = async (req, res) => {
    try {
        const {query} = req.query;
        let mechanics;

        if (query) {
            mechanics = await Mechanic.find({
                isApproved: "approved",
                $or: [
                    {name: {$regex: query, $options: "i"}},
                    {specialization: {$regex: query, $options: "i"}},
                ],
            }).select("-password");
        } else {
            mechanics = await Mechanic.find({ isApproved: "approved" }).select("-password");
        }

        res.status(200).json({success: true, message: "Znaleziono mechaników", data: mechanics});

    } catch (err) {
        res.status(404).json({success: false, message: "Nie znaleziono mechaników"})
    }
};
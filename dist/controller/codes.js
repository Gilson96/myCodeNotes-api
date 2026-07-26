import Codes from "../model/code.js";
import {} from "express";
export const createTechnology = async (req, res) => {
    try {
        const create_technology = await Codes.findOneAndUpdate({}, { $push: { technologies: req.body } }, { new: true });
        res.status(200).json(create_technology);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
};
export const findTechnologies = async (req, res) => {
    try {
        const find_technologies = await Codes.findOne().lean();
        res.status(200).json(find_technologies);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
};
export const findTechnology = async (req, res) => {
    const technology_id = req.params.technology_id;
    try {
        const find_technology = await Codes.findOne({ _id: technology_id }).lean();
        res.status(200).json(find_technology);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
};
export const updateTechnology = async (req, res) => {
    const technology_id = req.params.technology_id;
    try {
        const update_technology = await Codes.findOneAndUpdate({ _id: technology_id }, req.body, { new: true });
        res.status(200).json(update_technology);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
};
export const deleteTechnology = async (req, res) => {
    const technology_id = req.params.technology_id;
    try {
        const delete_technology = await Codes.findByIdAndDelete({
            _id: technology_id,
        });
        res.status(200).json(delete_technology);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
};
export const createTechnologyCategory = async (req, res) => {
    const technology_id = req.params.technology_id;
    try {
        const create_technology_category = await Codes.findOneAndUpdate({ "technologies.technology_id": technology_id }, {
            $push: {
                "technologies.$.technology_category": req.body,
            },
        }, { new: true });
        res.status(200).json(create_technology_category);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
};
export const findTechnologyCategories = async (req, res) => {
    const technology_id = req.params.technology_id;
    try {
        const find_technology_categories = await Codes.findOne({
            "technologies.technology_id": technology_id,
        }, {
            "technologies.$": 1,
        }).lean();
        res.status(200).json(find_technology_categories);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
};
export const updateTechnologyCategory = async (req, res) => {
    const technology_id = req.params.technology_id;
    const category_id = req.params.category_id;
    try {
        const update_technology_category = await Codes.findOneAndUpdate({
            "technologies.technology_id": technology_id,
            "technologies.technology_category.technology_category_id": category_id,
        }, {
            $set: {
                "technologies.$.technology_category.$[category].technology_category_name": req.body.technology_category_name,
                "technologies.$.technology_category.$[category].technology_category_content": req.body.technology_category_content,
            },
        }, {
            new: true,
            arrayFilters: [
                {
                    "category.technology_category_id": category_id,
                },
            ],
        });
        res.status(200).json(update_technology_category);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
};
export const deleteTechnologyCategory = async (req, res) => {
    const technology_id = req.params.technology_id;
    const category_id = req.params.category_id;
    try {
        const deletedCategory = await Codes.findOneAndUpdate({
            "technologies.technology_id": technology_id,
        }, {
            $pull: {
                "technologies.$.technology_category": {
                    technology_category_id: category_id,
                },
            },
        }, { new: true });
        res.status(200).json(deletedCategory);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
};

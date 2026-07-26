import Task from "../model/task.js";
import {} from "express";
export const createTask = async (req, res) => {
    try {
        const create_task = await Task.create(req.body);
        res.status(200).json(create_task);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
};
export const findTasks = async (req, res) => {
    try {
        const find_tasks = await Task.find().lean();
        res.status(200).json(find_tasks);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
};
export const findTask = async (req, res) => {
    const task_id = req.params.task_id;
    try {
        const find_task = await Task.findOne({ _id: task_id }).lean();
        res.status(200).json(find_task);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
};
export const updateTask = async (req, res) => {
    const task_id = req.params.task_id;
    try {
        const updated_task = await Task.findOneAndUpdate({ _id: task_id }, req.body, { new: true });
        res.status(200).json(updated_task);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
};
export const deleteTask = async (req, res) => {
    const task_id = req.params.task_id;
    try {
        await Task.findByIdAndDelete({ _id: task_id });
        res.status(200).json(`task ${task_id} deleted`);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
};

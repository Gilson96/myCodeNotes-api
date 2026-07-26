import express from "express";
import {
  createTask,
  deleteTask,
  findTask,
  findTasks,
  updateTask,
} from "../controller/tasks.ts";
import {
  createTechnology,
  createTechnologyCategory,
  deleteTechnology,
  deleteTechnologyCategory,
  findTechnologies,
  findTechnology,
  findTechnologyCategories,
  updateTechnology,
  updateTechnologyCategory,
} from "../controller/codes.ts";

const router = express.Router();

router.get("/tasks", findTasks);
router.get("/tasks/:task_id", findTask);
router.post("/tasks", createTask);
router.put("/tasks/:task_id", updateTask);
router.delete("/tasks/:task_id", deleteTask);

router.get("/codes", findTechnologies);
router.get("/codes/:technology_id", findTechnology);
router.post("/codes", createTechnology);
router.put("/codes/:technology_id", updateTechnology);
router.delete("/codes/:technology_id", deleteTechnology);

router.get("/codes/:technology_id", findTechnologyCategories);
router.post("/codes/:technology_id", createTechnologyCategory);
router.put("/codes/:technology_id/:category_id", updateTechnologyCategory);
router.delete("/codes/:technology_id/:category_id", deleteTechnologyCategory);

export default router;

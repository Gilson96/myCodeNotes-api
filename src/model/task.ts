import mongoose, { Types } from "mongoose";
const { Schema } = mongoose;

type TasksTypes = {
  task_id: Types.ObjectId;
  ticket: string;
  state: string;
  where_im_at: string;
  temp_solution: string;
  repo: string;
  further_actions: string;
};

const taskSchema = new Schema<TasksTypes>({
  task_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  ticket: {
    type: String,
    required: true,
    unique: true,
  },
  state: {
    type: String,
    required: true,
  },
  where_im_at: {
    type: String,
    required: true,
  },
  temp_solution: {
    type: String,
    required: true,
  },
  further_actions: {
    type: String,
    required: true,
  },
});

const Task = mongoose.model("Task", taskSchema);
export default Task;

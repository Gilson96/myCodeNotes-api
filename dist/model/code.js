import mongoose from "mongoose";
const { Schema } = mongoose;
const codeSchema = new Schema({
    technologies: [
        {
            technology_id: {
                type: mongoose.Types.ObjectId,
                required: true,
            },
            technology_name: {
                type: String,
                required: true,
            },
            technology_category: [
                {
                    technology_category_id: {
                        type: mongoose.Types.ObjectId,
                        required: true,
                    },
                    technology_category_name: {
                        type: String,
                        required: true,
                    },
                    technology_category_content: {
                        type: String,
                        required: true,
                    },
                },
            ],
        },
    ],
});
const code = mongoose.model("Code", codeSchema);
export default code;

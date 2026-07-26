import mongoose from "mongoose";
const { Schema } = mongoose;

type TechnologyCategory = {
  technology_category_id: mongoose.Types.ObjectId;
  technology_category_name: string;
  technology_category_content: string;
};

type Technology = {
  technology_id: mongoose.Types.ObjectId;
  technology_name: string;
  technology_category: TechnologyCategory[];
};

type CodeTypes = {
  technologies: Technology[];
};

const codeSchema = new Schema<CodeTypes>({
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

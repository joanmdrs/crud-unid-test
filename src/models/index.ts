import {Schema, model} from "mongoose";

export interface IProject {
  title: String;
  description: String;
  completed: Boolean;
  created_at: Date;
}

const ProjectSchema = new Schema<IProject>({
    title: {
      type: String,
      required: true,
    },
    description: String,
    completed: Boolean,
    created_at: { type: Date, default: Date.now },
});

export const Project = model<IProject>('Project', ProjectSchema);
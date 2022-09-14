import {Project} from '../models';

export const saveProject = async <IProject> ( project : IProject) => {
    const newProject = new Project(project);
    return await newProject.save();

}

export const findProjects = async () => {
    return await Project.find();
}

export const deleteOneProject = async (title: String) => {
    return await Project.deleteOne(
        {
            title: title
        }
    )
}
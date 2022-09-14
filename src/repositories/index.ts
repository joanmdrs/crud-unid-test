import {Project} from '../models';

export const createProject = async <IProject> ( project : IProject) => {
    const newProject = new Project(project);
    return await newProject.save();

}

export const listProjects = async () => {
    return await Project.find();
}
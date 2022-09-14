import { Request, Response } from "express";
import { createProject, listProjects } from "../repositories";

export const insertProject = async (req: Request, res: Response) => {

    const {title, description, completed, created_at} = req.body;

    const projectBody = { 
        title: title,
        description: description,
        completed: completed,
        created_at: created_at
    };

    try {
        const project = await createProject(projectBody);
        return res.status(200).json({msg: 'Projeto criado com sucesso', project});

    } catch (error) {
        return res.status(500).json(error)
        
    }

    
}

export const selectAllProjects = async (req: Request, res: Response) => {
    try {
        const projects = await listProjects();
        return res.status(200).json({msg: "Projetos encontrados: ", projects});

    } catch (error) {
        return res.status(500).json(error)

    }
    
}
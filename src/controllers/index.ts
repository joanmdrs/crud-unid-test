import { Request, Response } from "express";
import { saveProject, findProjects, deleteOneProject, updateOneProject } from "../repositories";

export const insertProject = async (req: Request, res: Response) => {

    const {title, description, completed, created_at} = req.body;

    const projectBody = { 
        title: title,
        description: description,
        completed: completed,
        created_at: created_at
    };

    try {
        const project = await saveProject(projectBody);
        return res.status(200).json({msg: 'Projeto criado com sucesso', project});

    } catch (error) {
        return res.status(500).json({msg: 'Ocorreu um erro ao tentar salvar um novo projeto', error})
        
    }

    
}

export const selectAllProjects = async (req: Request, res: Response) => {

    try {
        const projects = await findProjects();
        return res.status(200).json({msg: "Projetos encontrados: ", projects});

    } catch (error) {
        return res.status(500).json({msg: 'Ocorreu um erro ao tentar pegar todos os projetos', error})

    }
    
}

export const deleteProject = async (req: Request, res: Response) => {

    const {title} = req.params;

    try {

        const deletedProject = await deleteOneProject(title);
        return res.status(200).json({msg: "Projeto excluído com sucesso: ", deletedProject});

    } catch (error) {
        return res.status(500).json({msg: 'Ocorreu um erro ao tentar excluir um projeto', error})        
    }
}

export const updateProject = async (req: Request, res: Response) => {
    const {title} = req.params;
    const {completed} = req.body;

    try {
        const updatedProject = await updateOneProject(title, completed)
        return res.status(200).json({msg: "Projeto atualizado com sucesso", updatedProject});
        
    } catch (error) {
        return res.status(500).json({msg: 'Ocorreu um erro ao tentar atualizar o projeto', error})    
    }
}
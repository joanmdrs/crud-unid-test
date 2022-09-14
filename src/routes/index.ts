import { Router, Request, Response } from "express";
import { deleteProject, insertProject, selectAllProjects, updateProject } from "../controllers";

const routes = Router();

routes.post("/register", insertProject);
routes.get("/getAll",  selectAllProjects);
routes.delete("/:title", deleteProject);
routes.put("/:title", updateProject);

export default routes;
import { Router, Request, Response } from "express";
import { deleteProject, insertProject, selectAllProjects } from "../controllers";

const routes = Router();

routes.post("/register", insertProject);
routes.get("/getAll",  selectAllProjects);
routes.delete("/:title", deleteProject);

export default routes;
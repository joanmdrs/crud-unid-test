import { Router, Request, Response } from "express";
import { insertProject, selectAllProjects } from "../controllers";

const routes = Router();

routes.post("/register", insertProject);
routes.get("/getAll",  selectAllProjects);

export default routes;
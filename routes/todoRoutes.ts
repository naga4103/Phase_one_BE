import { Router } from "express";
import { TodoController } from "../controller/todoController";

import { productValidation } from "../validations/todoValidation";

export const todoRoute = Router();

const controllers = new TodoController();

todoRoute.post(
  "/createTodo",
  productValidation.dummyProducts,
  controllers.createNewTodo
);

todoRoute.post(
  "/fetchTodo",

  controllers.fetchTodo
);

todoRoute.post("/updateTodo", controllers.updateTodo);

todoRoute.post("/deleteTodo", controllers.deleteTodo);

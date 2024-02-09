import { Request, Response } from "express";
import { TodoServices } from "../services/todoServices";
const services = new TodoServices();
export class TodoController {
  public async createNewTodo(req: Request, res: Response) {
    try {
      const { id, name } = req.body;

      const newTodoObj = {
        id: id,
        name: name,
      };

      const createTodo = await services.createNewTodo(newTodoObj);

      let response = {
        success: 1,
        data: createTodo,
        message: "Todo Created Successfully...",
      };

      return res.send(response);
    } catch (error: any) {
      return res.send({
        success: 0,
        data: [],
        message: error.message,
      });
    }
  }

  public async fetchTodo(req: Request, res: Response) {
    try {
      const { name } = req.body;

      const todoData: any = await services.fetchTodo(name);

      let response = {
        success: 1,
        data: todoData,
        message: "Todos Fetched Successfully...",
      };

      return res.send(response);
    } catch (error: any) {
      return res.send({
        success: 0,
        data: [],
        message: error.message,
      });
    }
  }

  public async updateTodo(req: Request, res: Response) {
    try {
      const { id, name, newName } = req.body;

      let filter: any = {
        id,
        name,
      };

      const todoData: any = await services.fetchTodo(name);

      if (todoData.length == 0) {
        throw new Error("Todo Data Not Found");
      }

      const updateTodo = await services.updateTodo({ name }, { name: newName });

      if (!updateTodo) {
        throw new Error("failed to update todo data");
      }

      res.send({
        success: 1,
        data: [],
        message: "Update todo completed successfully",
      });
    } catch (error: any) {
      res.send({
        success: 0,
        data: [],
        message: error.message,
      });
    }
  }

  public async deleteTodo(req: Request, res: Response) {
    try {
      const { name } = req.body;

      let filter: any = {
        name: name,
      };

      const select = {};

      await services.deleteTodo(filter);

      res.send({
        success: 1,
        data: [],
        message: "Delete todo completed successfully",
      });
    } catch (error: any) {
      res.send({
        success: 0,
        data: [],
        message: error.message,
      });
    }
  }
}

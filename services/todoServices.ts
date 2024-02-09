import { todoModel } from "../models/todoModel";

export class TodoServices {
  public async createNewTodo(todoObj: any): Promise<Object> {
    const { id, name } = todoObj;
    const todoDoc = new todoModel({
      id: id,
      name: name,
    });
    const newTodoDoc = await todoDoc.save();
    return newTodoDoc;
  }

  public async fetchTodo(name: string): Promise<Object> {
    return await todoModel.find({ name });
  }

  public async updateTodo(filter: Object, update: Object): Promise<any> {
    return await todoModel
      .findOneAndUpdate(
        filter,
        {
          $set: {
            ...update,
          },
        },
        { new: true }
      )
      .lean();
  }

  public async deleteTodo(filter: object): Promise<any> {
    return await todoModel.deleteOne(filter);
  }
}

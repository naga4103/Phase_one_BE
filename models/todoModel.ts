import { Schema, model, InferSchemaType } from "mongoose";
import { ConnectDatabase } from "../config/dbconfig";
import { config } from "../config/configEnv";
import { ITodo } from "../interfaces/todoInterfaces";

const uri: string = `${config.MONGO_URI_USER}`;
new ConnectDatabase(uri).connectDB(); // Calling db connection

const todoSchema = new Schema<ITodo>({
  id: { type: String, trim: true },
  name: { type: String, trim: true },
});

export type IDummyTodo = InferSchemaType<typeof todoSchema>;
export const todoModel = model<IDummyTodo>("todos", todoSchema);

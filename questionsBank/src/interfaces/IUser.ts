import { Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  scores: any[];
  role: "user" | "admin" | "contributor";
  accessKey: string;
}

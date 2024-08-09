import { IUser } from "@/interfaces";
import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    scores: { type: Array, required: true },
    accessKey: { type: String, unique: true },
    role: {
      type: String,
      required: true,
      enum: ["admin", "user", "contributor"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

console.log("Checking existing models:", mongoose.models);
const BBFUser =
  mongoose.models.BBFUser || mongoose.model("BBFUser", UserSchema);

export default BBFUser;

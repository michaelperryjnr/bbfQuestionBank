import { addQuestion } from "./questionController";
import {
  updateUserScores,
  addUser,
  getUserScores,
  generateAccessKey,
  getUsers,
  verifyAccessKey
} from "./userControllers";

const User = {
  addQuestion,
  updateUserScores,
  addUser,
  getUserScores,
  generateAccessKey,
  getUsers,
  verifyAccessKey
};

export { User };

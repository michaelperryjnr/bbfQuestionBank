import { BBFUser } from "@/models";
import { v4 as uuidv4 } from "uuid";

export async function addUser(body: any) {
  try {
    const user = await BBFUser.create(body);
    return { success: true, message: "User added successfully" };
  } catch (error: any) {
    console.error("Error adding user:", error);
    return { success: false, message: "Failed to add user" };
  }
}

async function generateUniqueAccessKey() {
  const accessKey = `bbfLabs${uuidv4()}`;

  const existingUser = await BBFUser.findOne({ accessKey });

  if (existingUser) {
    return await generateUniqueAccessKey();
  }

  return accessKey;
}

export async function generateAccessKey(username: string) {
  try {
    const accessKey = await generateUniqueAccessKey();

    const user = await BBFUser.findOneAndUpdate(
      { username },
      { accessKey },
      { new: true }
    );

    if (!user) {
      return { sucess: false, message: "User not found" };
    }

    return { sucess: true, accessKey };
  } catch (error) {
    return { success: false, message: "Failed to generate access key" };
  }
}

export async function updateUserScores(username: string, score: number) {
  try {
    const user = await BBFUser.findOne({ username });
    user.scores.push(score);
    await user.save();
    return { success: true, message: "User scores updated successfully" };
  } catch (err: any) {
    console.error("Error updating user scores:", err);
    return { success: false, message: "Failed to update user scores" };
  }
}

export async function getUserScores(username: string) {
  try {
    const user = await BBFUser.findOne({ username });
    return user.scores;
  } catch (error: any) {
    console.error("Error getting user scores:", error);
    return { success: false, message: "Failed to get user scores" };
  }
}

export async function verifyAccessKey(username: string, key: string) {
  try {
    const user = await BBFUser.findOne({ username: username, accessKey: key });

    if (!user) {
      return { isValid: false, validated: false };
    }

    return { isValid: true, validated: true };
  } catch (error: any) {
    console.error("Error verifying access key:", error);
    return { success: false, message: "Failed to verify access key" };
  }
}

export async function getUsers() {
  try {
    const user = await BBFUser.find(
      {},
      { __v: 0, _id: 0, createdAt: 0, updatedAt: 0, scores: 0 }
    );
    return user;
  } catch (error: any) {
    return { success: false, message: "Failed to get users" };
  }
}

import { BBFUser } from "@/models";
import { User } from "@/controllers";
import { connectToDb } from "@/db";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  await connectToDb();
  try {
    const { username, key } = await request.json();
    const user = await User.verifyAccessKey(username, key);

    return NextResponse.json(user);
  } catch (err: any) {
    console.error("Error verifying user access key:", err);
    return NextResponse.json(
      { error: "Failed to verify access key" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { User } from "@/controllers";
import { connectToDb } from "@/db";

export async function POST(request: Request) {
  await connectToDb();
  try {
    const body = await request.json();
    const user = await User.addUser(body);
    return NextResponse.json({ sucees: true, message: user.message });
  } catch (err: any) {
    return NextResponse.json({ error: "User not added" });
  }
}

export async function GET(request: Request) {
  await connectToDb();
  try {
    const user = await User.getUsers();
    return NextResponse.json({ sucees: true, message: user });
  } catch (err: any) {
    return NextResponse.json({ error: "User not added" });
  }
}

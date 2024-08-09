import { NextResponse, NextRequest } from "next/server";
import { BBFUser } from "@/models";
import { User } from "@/controllers";

export async function GET(
  request: NextRequest,
  { params }: { params: { username: string } }
) {
  try {
    const { username } = params;

    const user = await BBFUser.findOne({ username });

    if (!user) {
      return NextResponse.json({ isValid: false }, { status: 404 });
    }

    return NextResponse.json({ isValid: true }, { status: 200 });
  } catch (error) {
    console.error("Error validating user:", error);
    return NextResponse.json(
      { success: false, message: "Failed to validate user" },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { username: string } }
) {
  try {
    const { username } = params;

    const user = await BBFUser.findOne({ username });

    if (!user) {
      return NextResponse.json({ isValid: false }, { status: 404 });
    }

    const token = User.generateAccessKey(username);

    return NextResponse.json({ isValid: true, acessKey: token });
  } catch (error) {
    console.error("Error validating user:", error);
    return NextResponse.json(
      { success: false, message: "Failed to validate user" },
      { status: 500 }
    );
  }
}

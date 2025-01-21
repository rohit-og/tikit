import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcrypt";
export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const { firstName, lastName, email, password } = await request.json();
    console.log("Received data:", { firstName, lastName, email }); // Debug log

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }
    // Hash password with bcrypt
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword, // Store the hashed password
    });

    console.log("Created user:", user); // Debug log

    return NextResponse.json(
      {
        message: "User registered successfully",
        user: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Detailed error:", error); // Debug log
    return NextResponse.json(
      { message: `Registration failed: ${error.message}` },
      { status: 500 }
    );
  }
}

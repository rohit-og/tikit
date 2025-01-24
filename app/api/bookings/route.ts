import { NextResponse } from "next/server";
import Booking from "@/models/Booking";
import { dbConnect } from "@/lib/mongodb";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/options";
export async function POST(request: Request) {
  try {
    await dbConnect();

    const session = await getServerSession(options);

    if (!session?.user?.id) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }
    const booking = await Booking.create({
      hotel_id: "hotel_123", // Replace with actual hotel ID from context
      check_in_date: new Date("2024-02-01"),
      check_out_date: new Date("2024-02-03"),
      ticket_number: "TK" + Math.random().toString(36).substr(2, 9),
      user_id: session.user.id,
      booking_properties: {
        rooms: 1,
        adults: 2,
        children: 0,
      },
    });

    return NextResponse.json({ success: true, booking });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Booking creation failed" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    await dbConnect();

    const session = await getServerSession(options);

    if (!session?.user?.id) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const bookings = await Booking.find({ user_id: session.user.id });
    return NextResponse.json({ success: true, bookings });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch bookings" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get("location");
  const checkInDate = searchParams.get("check_in_date") || "2024-01-31"; // Default date if none provided
  const checkOutDate = searchParams.get("check_out_date") || "2024-02-01"; // Default date if none provided
  const adults = searchParams.get("adults") || "2";

  const apiUrl = `https://serpapi.com/search.json?engine=google_hotels&q=${location}&check_in_date=${checkInDate}&check_out_date=${checkOutDate}&adults=${adults}&api_key=bdfa00201a49e15d05bdf30980041a750038d972d74a4be32da46fe0fae2a6e3`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

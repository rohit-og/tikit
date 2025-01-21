import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get("location");
  const checkInDate = searchParams.get("check_in_date") || "2024-01-31"; // Default date if none provided
  const checkOutDate = searchParams.get("check_out_date") || "2024-02-01"; // Default date if none provided
  const adults = searchParams.get("adults") || "2";
  const propertyToken =
    searchParams.get("property_token") ||
    "ChoI84KEy5HjiaeGARoNL2cvMTFkeGp4MnEyXxAB";
  // Access the API key from the environment variable
  const apiKey = process.env.SERP_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "API key not found in environment variables" },
      { status: 500 }
    );
  }
  const apiUrl = `https://serpapi.com/search.json?engine=google_hotels&q=${location}&check_in_date=${checkInDate}&check_out_date=${checkOutDate}&adults=${adults}&currency=INR&gl=us&hl=en&property_token=${propertyToken}&api_key=${apiKey}`;

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

import { API_KEY, API_URL } from "@/lib/api";
import { NextResponse } from "next/server";

export async function POST(request, { params }) {
  const { id } = params
  const body = await request.json();
  const token = request.cookies.get("token")?.value;

  const response = await fetch(API_URL + "/update-food/" + id, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apiKey": API_KEY,
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(body)
  })

  const responseData = await response.json();

  return NextResponse.json(JSON.stringify(responseData), {
    status: response.status
  })
}
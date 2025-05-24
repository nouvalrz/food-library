import { API_KEY, API_URL } from "@/lib/api";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const response = await fetch(API_URL + "/login", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      "apiKey": API_KEY,
    }
  });

  const responseData = await response.json();

  const nextResponse = new NextResponse(JSON.stringify(responseData), {
    status: response.status,
    headers: {
      "Content-Type": "application/json",
    },
  })

  if (response.ok && responseData.token) {
    nextResponse.cookies.set("token", responseData.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 30
    })
  }

  return nextResponse
}
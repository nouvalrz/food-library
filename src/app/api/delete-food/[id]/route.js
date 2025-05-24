import { NextResponse } from "next/server";
import { API_URL, API_KEY } from "@/lib/api";

export async function DELETE(request, { params }) {
  const { id } = await params

  const token = request.cookies.get("token")?.value;

  const response = await fetch(API_URL + "/delete-food/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "apiKey": API_KEY,
      "Authorization": `Bearer ${token}`
    }
  })

  const responseData = await response.json();

  return NextResponse.json(JSON.stringify(responseData), {
    status: response.status
  })
}
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  try {
    const response = await axios.post("https://api-bootcamp.do.dibimbing.id/api/v1/login", body)
    return NextResponse.json(response.data)
  } catch (error) {
    return NextResponse.json({ message: error.response.data.message }, { status: error.response.status })
  }
}
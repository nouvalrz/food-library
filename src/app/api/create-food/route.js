import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  try {
    const response = await axios.post("https://api-bootcamp.do.dibimbing.id/api/v1/create-food", body, {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
        "apiKey": "w05KkI9AWhKxzvPFtXotUva-"
      }
    })
    return NextResponse.json(response.data)
  } catch (error) {
    return NextResponse.json(error.response.data, { status: error.response.status })
  }
}
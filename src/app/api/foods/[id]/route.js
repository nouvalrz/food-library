import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params
  try {
    const response = await axios.get("https://api-bootcamp.do.dibimbing.id/api/v1/foods/" + id, {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
        "apiKey": "w05KkI9AWhKxzvPFtXotUva-"
      }
    })
    return NextResponse.json(response.data)
  } catch (error) {
    return NextResponse.json({ message: error.response.data.message }, { status: error.response.status })
  }
}
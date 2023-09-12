import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { email, password } = await body;
  if (email !== "admin" || password !== "admin") {
    return NextResponse.json({
      status: 401,
      body: { error: "Invalid credentials" },
    });
  }

  const secret = "secret";
  const token = sign({ email }, secret, { expiresIn: "1h" });

  const cookie = serialize("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    maxAge: 3600,
    sameSite: "strict",
    path: "/",
  });

  const response = {
    message: "Authentication successful!",
  };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { "Set-Cookie": cookie },
  });
}

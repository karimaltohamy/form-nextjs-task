import { NextRequest, NextResponse } from "next/server";
import Cookies from "universal-cookie";

export function middleware(req: NextRequest) {
  const cookies = new Cookies(req.headers.get("cookie") || "");
  const token = cookies.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard", "/profile", "/settings"],
};

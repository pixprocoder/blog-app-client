import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  console.log("server", request.url);
  return NextResponse.redirect(new URL("/home", request.url));
}

export const config = {
  matcher: "/dashboard",
};

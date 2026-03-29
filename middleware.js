import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const token = request.cookies.get("refreshToken")?.value;
  if (!token) return NextResponse.redirect(new URL("/login", request.url));

  try {
    const secretCode = new TextEncoder().encode(
      process.env.REFRESH_TOKEN_SECRET,
    );
    const { payload } = await jwtVerify(token, secretCode);
    const { pathname } = request.nextUrl;

    if (!payload?.role) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    if (pathname.startsWith("/admin") && !(payload?.role === "admin")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    if (pathname.startsWith("/client") && !(payload?.role === "client")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.log("middleware error: ", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/client/:path*", "/admin/:path*"],
};

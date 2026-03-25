import { NextResponse } from "next/server";

export async function middleware(request) {
  try {
    const refreshToken = request.cookies.get("refreshToken")?.value;

    if (!refreshToken)
      return NextResponse.redirect(new URL("/login", request.url));

    return NextResponse.next();
  } catch (error) {
    console.log("middleware error: ", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/my-booking/:path*", "/dashboard/:path*", "/profile/:path*"],
};

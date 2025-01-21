import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { routes } from "./app/routes";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const { pathname } = request.nextUrl;

  const matchedRoute = Object.values(routes).find(
    (route) => pathname.startsWith(route.path) && route.protected
  );

  if (matchedRoute?.protected && !token) {
    return NextResponse.redirect(new URL(routes.auth.path, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/hotels/:path*", "/profile/:path*"],
};

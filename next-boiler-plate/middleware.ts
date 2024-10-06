import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
  const userToken = req.cookies.get("user-token");
  const adminToken = req.cookies.get("admin-token");
  const currentPath = new URL(req.url).pathname;

  if (userToken && currentPath === "/") {
    return NextResponse.next();
  }

  if (userToken) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (adminToken && (currentPath === "/" || currentPath === "/admin")) {
    return NextResponse.next();
  }

  if (adminToken) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return NextResponse.redirect(new URL("/login", req.url));
};

export const config = {
  matcher: ["/admin", "/"],
};

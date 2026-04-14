import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const sessionData = await auth.api.getSession({
    headers: await headers(),
  });

  const isAuthenticated = !!sessionData?.session;
  const user = sessionData?.user;
  const isProfileComplete = user ? !!user.slug : false;

  const authRoutes = [
    "/sign-in",
    "/sign-up",
    "/reset-password",
    "/new-password",
    "/verify-email",
  ];
  const isAuthRoute = authRoutes.includes(pathname);
  const isCompleteProfileRoute = pathname === "/complete-profile";

  // Prevent authenticated users from accessing auth routes
  if (isAuthRoute && isAuthenticated) {
    if (!isProfileComplete) {
      return NextResponse.redirect(new URL("/complete-profile", request.url));
    }
    return NextResponse.redirect(new URL("/", request.url));
  }

  // A user who hasn't completed their profile can ONLY go to /complete-profile
  if (isAuthenticated && !isProfileComplete && !isCompleteProfileRoute) {
    return NextResponse.redirect(new URL("/complete-profile", request.url));
  }

  // A user who has completed their profile cannot go to /complete-profile
  if (isAuthenticated && isProfileComplete && isCompleteProfileRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // A guest user cannot visit /[user_slug] and its subroutes
  // This means any path that is not an authroute, not root or public assets.
  const isPublicRoute = ["/", "/privacy-terms", "/help"].includes(pathname);

  if (!isAuthenticated && !isAuthRoute && !isPublicRoute) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // Prevent a patient from visiting /[user_slug]/posts
  // Patient is role="patient"
  // if (isAuthenticated && user?.role === "patient") {
  //   // pathname match: /john-doe/posts or /john-doe/posts/...
  //   if (pathname.match(/^\/[^\/]+\/posts(\/.*)?$/)) {
  //     return NextResponse.redirect(new URL("/", request.url));
  //   }
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};

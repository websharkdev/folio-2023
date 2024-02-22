import { authMiddleware } from "@clerk/nextjs";

// Set the paths that don't require the user to be signed in
const publicRoutes = ["/", "/fake"];

export default authMiddleware({
  publicRoutes,
  ignoredRoutes: ["/dashboard"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

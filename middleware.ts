import { authMiddleware } from "@clerk/nextjs";

// Set the paths that don't require the user to be signed in
const publicRoutes = ["/", "/fake"];

export default authMiddleware({
  publicRoutes,
});

export const config = {
  matcher: ["/dashboard"],
};

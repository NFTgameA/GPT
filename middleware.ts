import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // publicRoutes: ["/", "/api/webhook","/dashboard","/conversation","/api/conversation"],
  publicRoutes: ["/", "/api/webhook","/dex"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
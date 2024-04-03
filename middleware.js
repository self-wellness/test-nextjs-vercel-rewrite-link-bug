import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware';

export default authMiddleware({
  beforeAuth: async (req) => {

    // Locales translations (next-intl)
    const intlMiddleware = createMiddleware({
      locales: ['en', 'de'],
      defaultLocale: 'en'
    });
    return intlMiddleware(req);
  },
  afterAuth(auth, req, evt) {
    // Allow users visiting public routes to access them
    return NextResponse.next();
  },

  // A list of routes that should be accessible without authentication. You can use glob patterns to match multiple routes or a function to match against the request object. For example: ['/foo', '/bar(.*)'] or [/^/foo/.*$/] The sign in and sign up URLs are included by default, unless a function is provided.
  publicRoutes: [
    "/:locale",
    "/:locale/(.*)",
  ],
  // ignoredRoutes: A list of routes that should be ignored by the middleware. This list typically includes routes for static files or Next.js internals. For improved performance, these routes should be skipped using the default config.matcher instead.
  ignoredRoutes: []
});

export const config = {
  matcher: [
    '/', // include in middleware
    '/(trpc|monitoring)(.*)', // include in middleware
    '/((?!.+\\.[\\w]+$|_next|api|studio|_next-video).*)', // exclude all these from middleware
  ],
};

// export const config = {
//   // Match only internationalized pathnames
//   matcher: ['/', '/(de|en)/:path*']
// };

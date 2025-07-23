// middleware.ts
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

// import authMiddleware from 'next-auth/middleware';
// import authConfig from './auth.config';

// export default authMiddleware(authConfig);

// export const config = {
//   matcher: ['/dashboard/:path*'],
// };
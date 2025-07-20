import type { NextRequest } from 'next/server';
import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request }: { auth: any; request: NextRequest }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = request.nextUrl.pathname.startsWith('/dashboard');

      if (isOnDashboard) {
        return isLoggedIn;
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', request.nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
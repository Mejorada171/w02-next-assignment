import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;


// import type { NextAuthConfig } from 'next-auth';
// import { NextResponse } from 'next/server';

// export const authConfig = {
//   pages: {
//     signIn: '/login',
//   },
//   callbacks: {
//     authorized({ auth, request }) {
//       const isLoggedIn = !!auth?.user;
//       const isOnDashboard = request.nextUrl.pathname.startsWith('/dashboard');

//       if (isOnDashboard) {
//         return isLoggedIn;
//       }

//       if (isLoggedIn) {
//         return NextResponse.redirect(new URL('/dashboard', request.nextUrl));
//       }

//       return true;
//     },
//   },
//   providers: [],
// } satisfies NextAuthConfig;

// export default authConfig;
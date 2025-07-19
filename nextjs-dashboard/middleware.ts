import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

// AGREGADO
export const runtime = 'nodejs';
//FIN

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: [
    //'/((?!api|_next/static|_next/image|.*\\.png$).*)'], ORIGINAL
    '/((?!api|_next/static|_next/image|.*\\.png$|favicon.ico|login).*)'],

};
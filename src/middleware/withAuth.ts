import { getToken } from 'next-auth/jwt';
import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from 'next/server';

export default function withAuth(
  middleware: NextMiddleware,
  requireAuth: string[] = []
) {
  const redirectLogin = ['/login', '/register'];
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;
    if (requireAuth.includes(pathname)) {
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
      });
      if (!token && !redirectLogin.includes(pathname)) {
        const url = new URL('/login', req.url);
        url.searchParams.set('callbackUrl', encodeURI(req.url));
        return NextResponse.redirect(url);
      }
      if (token) {
        if (redirectLogin.includes(pathname)) {
          return NextResponse.redirect(new URL('/', req.url));
        }
        if (token.role !== 'admin' && requireAuth.includes(pathname)) {
          return NextResponse.redirect(new URL('/', req.url));
        }
      }
    }
    return middleware(req, next);
  };
}

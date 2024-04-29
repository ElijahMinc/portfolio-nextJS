import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from 'next/server';
import { MiddlewareFactory } from './stackMiddlewares';

export const withCORS: MiddlewareFactory = (nextMiddleware: NextMiddleware) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const res = NextResponse.next();

    // add the CORS headers to the response
    res.headers.append('Access-Control-Allow-Credentials', 'true');
    res.headers.append('Access-Control-Allow-Origin', '*'); // replace this your actual origin
    res.headers.append(
      'Access-Control-Allow-Methods',
      'GET,DELETE,PATCH,POST,PUT',
    );
    res.headers.append(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
    );
    return nextMiddleware(request, _next);
  };
};

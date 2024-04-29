import { MiddlewareFactory } from './stackMiddlewares';

export const withLogs: MiddlewareFactory =
  (nextMiddleware) => (request, _next) => {
    if (request.method !== 'POST') {
      return nextMiddleware(request, _next);
    }

    console.log(
      `Received ${request.method} request to ${request.url} at ${new Date()}`,
    );
    return nextMiddleware(request, _next);
  };

import { createMiddleware, createStart } from "@tanstack/react-start";
import { setResponseHeaders } from "@tanstack/react-start/server";

// Replaces the `headers()` block from next.config.mjs
const securityHeaders = createMiddleware().server(({ next }) => {
  setResponseHeaders(
    new Headers({
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    }),
  );
  return next();
});

export const startInstance = createStart(() => ({
  requestMiddleware: [securityHeaders],
}));

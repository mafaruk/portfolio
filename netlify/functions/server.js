import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const server = require('../../dist/server/server.js').default;

export const handler = async (event) => {
  const request = new Request(`https://${event.headers.host || 'localhost'}${event.path || '/'}`, {
    method: event.httpMethod || 'GET',
    headers: event.headers,
    body: event.body,
  });

  const response = await server.fetch(request, {}, {});

  return {
    statusCode: response.status,
    headers: Object.fromEntries(response.headers.entries()),
    body: await response.text(),
  };
};

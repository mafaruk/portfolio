import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const server = require('../../dist/server/server.js').default;

function getRequestUrl(event) {
  const protocol = event.headers['x-forwarded-proto'] || 'https';
  const host = event.headers['x-forwarded-host'] || event.headers.host || 'localhost';
  const path = event.path || '/';
  return `${protocol}://${host}${path}`;
}

function getHeaders(event) {
  return Object.entries(event.headers || {}).reduce((acc, [key, value]) => {
    if (typeof value === 'string') acc[key] = value;
    return acc;
  }, {});
}

export const handler = async (event) => {
  const request = new Request(getRequestUrl(event), {
    method: event.httpMethod || 'GET',
    headers: getHeaders(event),
    body: event.body || undefined,
  });

  const response = await server.fetch(request, {}, {});

  const headers = Object.fromEntries(response.headers.entries());
  const body = await response.text();

  return {
    statusCode: response.status,
    headers,
    body,
  };
};

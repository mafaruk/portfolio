import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const server = require('../../dist/server/server.js').default;

function toHeaders(headers) {
  const result = {};
  for (const [key, value] of headers.entries()) {
    result[key] = value;
  }
  return result;
}

export async function handler(event) {
  const url = new URL(event.path || '/', `https://${event.headers.host || 'localhost'}`);
  const request = new Request(url, {
    method: event.httpMethod || 'GET',
    headers: event.headers || {},
    body: event.body || undefined,
  });

  const response = await server.fetch(request, {}, {});
  const body = await response.text();

  return {
    statusCode: response.status,
    headers: toHeaders(response.headers),
    body,
  };
}

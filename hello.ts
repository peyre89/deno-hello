import { HTTPOptions, serve, Server, ServerRequest, Response } from "https://deno.land/std@0.99.0/http/server.ts";

const port: number = 8000;

const s: Server = serve({ port } as string | HTTPOptions);

console.log(`HTTP server running. Access it at: http://localhost:${port} 🚀`);

const response: Response = {};

response.body = 'Hello World';

for await (const req: ServerRequest of s) {
  req.respond(response);
}

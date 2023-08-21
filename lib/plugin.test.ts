import fastify, { FastifyInstance } from "fastify";
import fastifyResourcify from "./plugin";

let app: FastifyInstance;

beforeEach(() => app = fastify());
afterEach(async () => await app.close());

describe("Dev registers @bycoode/fastify-resourcify plugin to Fastify", () => {

  test("should be available through Fastify instance", async () => {

    app.register(fastifyResourcify);

    await app.ready();

    expect(app.hasPlugin("fastify-resourcify")).toBe(true);

  });

});

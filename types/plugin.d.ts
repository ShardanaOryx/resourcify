/// <reference types='node' />

import {FastifyPluginAsync} from "fastify";

type FastifyResourcifyPlugin = FastifyPluginAsync<
    fastifyResourcify.FastifyResourcifyOptions
>;

declare namespace fastifyResourcify {

  export interface FastifyResourcifyOptions {
    strategy: "availability";
  }

  export interface FastifyResourcify extends FastifyResourcifyPlugin { }

  export const fastifyResourcify: FastifyResourcify;

  export { fastifyResourcify as default };

}

declare function fastifyResourcify(...params: Parameters<FastifyResourcifyPlugin>): ReturnType<FastifyResourcifyPlugin>;

export = fastifyResourcify;

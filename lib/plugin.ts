import fp from "fastify-plugin";
import { FastifyResourcify } from "../types/plugin";

const plugin: FastifyResourcify = async (fastify, options) => {

};

export default fp(plugin, {
  fastify: "4.x",
  name: "resourcify",
});

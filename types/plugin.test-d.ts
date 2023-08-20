import { expectType } from "tsd";
import fastifyResourceVersioning from "../lib/plugin";
import { FastifyResourcify } from "./plugin";

expectType<FastifyResourcify>(fastifyResourceVersioning);

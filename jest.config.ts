import { JestConfigWithTsJest } from "ts-jest";

export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: [
    'lib/plugin.ts'
  ],
  displayName: 'Fastify Resource Versioning'
} as JestConfigWithTsJest;

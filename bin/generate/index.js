#!/usr/bin/env node
import path from "node:path";
import minimist from "minimist";
import { Plop, run } from "plop";
import { powerPlopPathUtils } from "../../utils/pathUtils.js";

const args = process.argv.slice(2);
const argv = minimist(args);

Plop.prepare(
  {
    cwd: argv.cwd,
    configPath: path.join(
      powerPlopPathUtils.rootPath,
      "scripts",
      "generate",
      "plopfile.js",
    ),
    preload: argv.preload || [],
    completion: argv.completion,
  },
  (env) => Plop.execute(env, run),
);

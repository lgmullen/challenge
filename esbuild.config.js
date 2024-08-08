const esbuild = require("esbuild");
require("dotenv").config();

const clientEnv = { "process.env.NODE_ENV": `'dev'` };

Object.keys(process.env).forEach((key) => {
  if (key.indexOf("CLIENT_") === 0) {
    clientEnv[`process.env.${key}`] = `'${process.env[key]}'`;
  }
});

// Build with esbuild
esbuild
  .build({
    entryPoints: ["./framework/client/index.js"], // Path to your entry point
    bundle: true,
    minify: true,
    outfile: "dist/client.js",
    define: clientEnv,
    platform: "browser",
  })
  .catch(() => process.exit(1));

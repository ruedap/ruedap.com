const { build } = require("esbuild");

build({
  define: { "process.env.NODE_ENV": process.env.NODE_ENV },
  entryPoints: ["src/index.jsx"],
  outdir: "public",
  bundle: true,
  minify: true,
  target: "es2015",
  platform: "browser",
}).catch((err) => console.log("Error: " + err));

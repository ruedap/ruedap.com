import { build } from 'esbuild';
import { sassPlugin } from './esbuild-plugin-sass';

build({
  define: { 'process.env.NODE_ENV': process.env.NODE_ENV as string },
  entryPoints: ['src/main.tsx'],
  outdir: 'public',
  minify: true,
  bundle: true,
  sourcemap: false,
  target: 'es2015',
  platform: 'browser',
  plugins: [sassPlugin()],
})
  .then(() => console.log('Done!'))
  .catch((err) => console.log(`Error: ${err}`));


import { Plugin } from 'esbuild';
import { render, Options } from 'sass';

export const sassPlugin = (options?: Options): Plugin => ({
  name: 'esbuild-plugin-sass',
  setup(build) {
    build.onLoad({ filter: /\.s?css$/ }, ({ path }) => {
      return new Promise((resolve) => {
        render({ ...options, file: path }, (err, result) => {
          resolve({
            contents: result ? result.css : undefined,
            loader: 'css',
            errors: err ? [{ text: err.message }] : undefined,
          });
        });
      });
    });
  },
});

const gulp = require('gulp');
const rollup = require('rollup');
const fs = require('fs-extra');
const { rollupConfig } = require('./build/rollup.config');

gulp.task('build', async function () {
  const bundle = await rollup.rollup({
    input: rollupConfig.input,
    plugins: rollupConfig.plugins
  });

  for (let i = 0; i < rollupConfig.output.length; i++) {
    await bundle.write(rollupConfig.output[i]);
  }

  fs.removeSync('./lib/test');
});

const watchOptions = {
  input: rollupConfig.input,
  output: rollupConfig.output,
  plugins: rollupConfig.plugins
};
gulp.task('start', async function () {
  const watcher = rollup.watch(watchOptions);

  await new Promise((resolve, reject) => {
    watcher.on('event', event => {
      fs.removeSync('./lib/test');
    })
  });
});

require('esbuild')
  .build({
    entryPoints: ['src/index.js'],
    outfile: './build/bundle.js',
    bundle: true,
    platform: 'node',
    loader: {
      '.js': 'jsx'
    },
    external: [/node_modules/],
    logLevel: 'info',
    watch: true
  })
  .catch(() => process.exit(1));

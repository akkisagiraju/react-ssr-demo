require('esbuild')
  .build({
    entryPoints: ['src/client/client.js'],
    outfile: './public/bundle.js',
    bundle: true,
    minify: true,
    loader: {
      '.js': 'jsx'
    },
    logLevel: 'info',
    watch: true
  })
  .catch(() => process.exit(1));

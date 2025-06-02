const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/index.js'],
  bundle: true,
  outfile: 'dist/bundle.js',
  external: ['three'], // Ajoutez 'three' comme dépendance externe
}).catch(() => process.exit(1));

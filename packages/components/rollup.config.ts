// export default config;
import { readFileSync } from 'node:fs';

import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import autoprefixer from 'autoprefixer';
import { RollupOptions } from 'rollup';
import del from 'rollup-plugin-delete';
import filesize from 'rollup-plugin-filesize';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2'; // For TS and .d.ts files
// import { visualizer } from 'rollup-plugin-visualizer';
// Load package.json
const packageJson = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));

// Check environment
const isProd = process.env.NODE_ENV === 'production';

// Set up output globals (for external dependencies like React)
const outputGlobals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

const config: RollupOptions = {
  // Main build configuration
  input: './src/index.tsx', // Entry file
  output: [
    // CommonJS output (single file build)
    {
      file: isProd ? packageJson.main.replace('.js', '.min.js') : packageJson.main, // Output file
      format: 'cjs', // CommonJS format
      sourcemap: isProd ? false : 'inline', // Sourcemaps
      globals: outputGlobals,
    },
    // ES Module output (single file build)
    {
      file: isProd ? packageJson.module.replace('.js', '.min.js') : packageJson.module, // Output file
      format: 'esm', // ES Module format
      sourcemap: isProd ? false : 'inline', // Sourcemaps
      globals: outputGlobals,
    },
  ],
  external: [...Object.keys(packageJson.peerDependencies || {})], // Externalize peer dependencies like React
  plugins: [
    del({ targets: 'dist/*' }), // Clear the dist folder before each build
    resolve({ browser: true }), // Resolve dependencies from node_modules
    commonjs(), // Convert CommonJS modules to ES6
    typescript({
      tsconfig: './tsconfig.json', // Use project's tsconfig.json
      useTsconfigDeclarationDir: true, // Output .d.ts files
      tsconfigOverride: {
        compilerOptions: {
          sourceMap: !isProd, // Generate source maps only in development
          declaration: true, // Generate .d.ts files
          declarationDir: 'dist/types', // Output directory for .d.ts files
        },
      },
    }),
    babel({
      babelHelpers: 'runtime', // Use the Babel runtime helpers
      extensions: ['.ts', '.tsx'], // Specify file extensions
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'], // React preset
      plugins: ['@babel/plugin-transform-runtime'], // Add the plugin-transform-runtime
    }),
    postcss({
      extensions: ['.css', '.scss'], // Handle CSS/SCSS files
      plugins: [autoprefixer()], // Add vendor prefixes using Autoprefixer
      extract: 'components.css', // Output a single CSS file
      minimize: isProd, // Minify CSS only in production
      modules: true, // Enable CSS modules
      use: ['sass'], // Use Sass for SCSS files
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(isProd ? 'production' : 'development'), // Replace NODE_ENV
      preventAssignment: true, // Avoid deprecated warning
    }),
    isProd && terser(), // Minify code only in production
    filesize(), // Show the final file sizes
    // visualizer({ filename: 'bundle-stats.html', open: true }), // Generate and open bundle visualization
    json(),
  ],
};

export default config;

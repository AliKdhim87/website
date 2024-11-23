export default {
  '**/*.{ts, tsx}?(x)': () => 'pnpm type-check',
  '**/*.{ts, tsx, js, scss, css, html, json}?(x)': () => 'npm run lint',
};

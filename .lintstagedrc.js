export default {
  "**/*.{ts,tsx}": () => "pnpm type-check",
  "**/*.{ts,tsx,js,scss,css,html,json}": () => "pnpm run lint",
};

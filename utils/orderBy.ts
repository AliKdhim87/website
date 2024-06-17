export const orderBy = (items: any[]) =>
  Array.isArray(items) ? items.slice().sort((a, b) => parseInt(b?.publishedAt) - parseInt(a?.publishedAt)) : [];

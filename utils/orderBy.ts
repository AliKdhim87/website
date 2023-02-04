export const orderBy = (arr: any[]) =>
  arr && arr.length > 0 ? arr.slice().sort((a, b) => Number(b?.publishedAt) - Number(a?.publishedAt)) : [];

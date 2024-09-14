export const formattedDate = (date: string) =>
  new Date(date).toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

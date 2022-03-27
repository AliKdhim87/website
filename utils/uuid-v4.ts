export const uuidv4 = () => {
  const initialValue = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  return initialValue.replace(/[xy]/g, (c) => {
    let r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

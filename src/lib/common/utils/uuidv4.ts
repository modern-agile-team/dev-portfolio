function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const random = (Math.random() * 16) | 0;
    const result = c == 'x' ? random : (random & 0x3) | 0x8;
    return result.toString(16);
  });
}

export default uuidv4;

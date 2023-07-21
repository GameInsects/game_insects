export default milliseconds => {
    const seconds = Math.floor(milliseconds / 1000);
    return `${seconds < 10 ? '0' : ''}${seconds}`;
  }
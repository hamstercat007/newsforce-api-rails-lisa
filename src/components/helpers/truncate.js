const truncate = (str) => {
  return str.length > 90 ? str.substring(0, 90) + "..." : str;
};

export default truncate;

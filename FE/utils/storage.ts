const setItem = (key: string, value: string) => {
  localStorage.setItem(buildKey(key), value);
};

const getItem = (key: string) => {
  return localStorage.getItem(buildKey(key));
};

const removeItem = (key: string) => {
  localStorage.removeItem(buildKey(key));
};

const clear = (item: string) => {
  removeItem(item);

  window.location.href = "/";
};

const buildKey = (key: string) => {
  return "mctest" + "." + key;
};

export { setItem, getItem, removeItem, clear, buildKey };

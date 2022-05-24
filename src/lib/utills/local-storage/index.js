const LOCAL_STORAGE_KEYS = {
  authToken: "accessToken",
};

const setItem = (key, value) => {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (err) {
    return false;
  }
};

const getItem = (key) => {
  try {
    let serializedItem = localStorage.getItem(key);
    if (serializedItem !== undefined || serializedItem !== null) {
      return serializedItem;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
};

const clearAllLocalData = () => {
  localStorage.clear();
};

export { LOCAL_STORAGE_KEYS, setItem, getItem, clearAllLocalData };

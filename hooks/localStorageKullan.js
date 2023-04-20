import { useState } from "react";
export function localStorageKullan(key, innitualValue) {
  const [state, setState] = useState(() => {
    const storage = JSON.parse(localStorage.getItem(key));
    return storage ? storage : innitualValue;
  });

  const updateStorage = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  };

  return [state, updateStorage];
}

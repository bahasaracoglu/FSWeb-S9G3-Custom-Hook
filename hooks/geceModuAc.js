import { useEffect, useState } from "react";
import { localStorageKullan } from "./localStorageKullan";
export function geceModuAc() {
  const initial = false;

  const [storage, setStorage] = localStorageKullan("geceModu", initial);

  const [geceModu, setGeceModu] = useState(storage);

  useEffect(() => {
    setStorage(geceModu);
  }, [geceModu]);

  // localStorage.clear();

  //console-------------------------------------------------
  console.log("geceModu", geceModu);
  console.log("localStorage", localStorage);
  console.log("storage", storage);

  return [geceModu, setGeceModu];
}

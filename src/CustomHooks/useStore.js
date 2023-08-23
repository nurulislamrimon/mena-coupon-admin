import { useEffect, useState } from "react";
import apiUrl from "../Utils/apiUrl";

const useStore = () => {
  const [store, setStore] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/api/v1/store`)
      .then((res) => res.json())
      .then((data) => setStore(data));
  }, []);

  return { store, setStore };
};

export default useStore;


// provide a reusable custom React Hook
import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);  
    };

    fetchData();
  }, [url]);

  return { data };
}
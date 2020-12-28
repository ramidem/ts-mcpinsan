import { useEffect, useState } from "react";

export const useInnerWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return width;
};

export const arr2D = (arr: any) => {
  let newArr = [];
  while (arr.length) newArr.push(arr.splice(0, 2));
  return newArr;
};

import { useEffect, useRef } from "react";

export const useInterval = (callback: () => void, delay?: number) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === undefined) return;

    const id = window.setInterval(() => savedCallback.current(), delay);

    return () => clearInterval(id);
  }, [delay]);
};

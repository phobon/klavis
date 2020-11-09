import { useState, useEffect } from "react";

export interface WindowSize {
  innerWidth?: number;
  innerHeight?: number;
  outerWidth?: number;
  outerHeight?: number;
}

export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>(() => ({
    innerWidth: -1,
    innerHeight: -1,
    outerWidth: -1,
    outerHeight: -1,
  }));

  useEffect(() => {
    const handleResize = () => {
      if (window == null) {
        throw Error("window is undefined");
      }

      setWindowSize({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        outerWidth: window.outerWidth,
        outerHeight: window.outerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

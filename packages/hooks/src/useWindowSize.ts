import { useState, useEffect } from "react";

export interface WindowSize {
  innerWidth?: number;
  innerHeight?: number;
  outerWidth?: number;
  outerHeight?: number;
}

export const useWindowSize = (): WindowSize | null => {
  const [windowSize, setWindowSize] = useState<WindowSize | null>(null);

  useEffect(() => {
    setWindowSize({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      outerWidth: window.outerWidth,
      outerHeight: window.outerHeight,
    });

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

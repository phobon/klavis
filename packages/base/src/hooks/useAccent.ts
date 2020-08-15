import { useEffect } from 'react';
import { useCachedState } from '@phobon/hooks';

import { colour, PaletteType } from '../tokens/palettes';

type UseAccentType = [PaletteType, React.Dispatch<React.SetStateAction<PaletteType>>];
export const useAccent = (initial: PaletteType = 'greens', accentFunction: ((key: PaletteType) => string[]) | null = null): UseAccentType => {
  const [accent, setAccent] = useCachedState<PaletteType>('phobon__base:accent', initial);

  useEffect(() => void requestAnimationFrame(() => {
    const root: HTMLElement | null = document.querySelector(':root');
    if (!root) {
      throw Error(':root element not found');
    }

    const newColours = (accentFunction && accentFunction(accent as PaletteType)) || [...colour[accent as PaletteType]] as string[];
    newColours.forEach((c, i) => {
      root.style.setProperty(`--c-accent-${i}`, c);
    });
  }), [accent]);

  return [accent, setAccent] as UseAccentType;
};
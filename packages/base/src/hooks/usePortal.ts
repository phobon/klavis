import { useState } from 'react';
import { createPortal } from 'react-dom';

export const usePortal = (child: React.ReactNode, selector: string = '#base__portal'): null | React.ReactPortal => {
  const [container, setContainer] = useState<Element | null>(null);

  if (!container) {
    let element: HTMLElement | null = document.querySelector(selector);
    if (!element) {
      element = document.createElement('div');
      element.setAttribute('id', selector.startsWith('#') ? selector.slice(1) : selector);
      element.style.cssText = 'left:0;top:0;right:0;bottom:0;position:fixed;pointer-events:none;display:flex;';
      const body = document.querySelector('body');
      if (!body) {
        throw Error('body element not found');
      }
      body.appendChild(element);
    }
    
    setContainer(element);
  }

  return container && createPortal(child, container);
};
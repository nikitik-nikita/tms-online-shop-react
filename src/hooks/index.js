import { useRef, useEffect } from 'react';

export const useDidiUpdateEffect = (effect, inputs = []) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      effect();
    } else {
      didMountRef.current = true;
    }
  },
  inputs);
};

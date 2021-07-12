import { useEffect } from 'react';

export const useEffectOnMount = (effect: React.EffectCallback) => {
  useEffect(effect, []);
};

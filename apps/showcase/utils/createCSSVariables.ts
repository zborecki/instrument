import { CSSProperties } from 'react';

type CSSVariables = Record<string, string | number | undefined>

export const createCSSVariables = (variables: CSSVariables): CSSProperties => Object.fromEntries(
  Object.entries(variables).map(([name, value]) => [`--${name}`, value])
) as CSSProperties;

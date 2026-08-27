import { Children } from '@/types/common';

export interface IBaseProps {
  className?: string;
}

export type ChildrenProps<TMandatory extends 'optional' | 'required' = 'required'> = TMandatory extends 'required'
  ? { children: Children }
  : { children?: Children };

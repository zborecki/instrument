import { INextFetchOptions } from './nextjs';

export interface IFetchRequestInit extends RequestInit {
  next?: Omit<INextFetchOptions, 'cache'>
};

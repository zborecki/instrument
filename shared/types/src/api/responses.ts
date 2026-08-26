import { Identifier } from '../common';

export interface IResponseAPI<T> {
  data: T;
}

export type ResponseItemAPI<TData extends object, TIdentifier extends 'optional' | 'required' = 'required'> = TIdentifier extends 'required'
  ? { id: Identifier } & TData
  : { id?: Identifier } & TData;

import { HttpMethod } from './http';
import { INextFetchOptions } from './nextjs';
import { QueryParams, PathParams } from './params';

/**
 * Base options shared across all HTTP methods.
 */
export interface IBaseFetchOptions extends INextFetchOptions {
  headers?: Record<string, string>;
  signal?: AbortSignal;
}

export interface IRequestFetchOptions<TBody = unknown> extends IBaseFetchOptions {
  body?: TBody;
  method: HttpMethod;
  query?: QueryParams;
  params?: PathParams;
}

export interface IGetOptions extends IBaseFetchOptions {
  query?: QueryParams;
  params?: PathParams;
}

export interface IPostOptions extends IBaseFetchOptions {
  params?: PathParams
}

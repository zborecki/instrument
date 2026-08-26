import { IGetOptions, IPostOptions, IRequestFetchOptions } from './types/options';
import { PathParams, QueryParams } from './types/params';
import { IFetchRequestInit } from './types/requests';

class HttpClient<TEndpoint extends string> {
  constructor(private baseURL: string = '') { }

  private buildURL(endpoint: TEndpoint, query?: QueryParams, params?: PathParams): string {
    let path = endpoint as string;

    if (params) {
      for (const [key, value] of Object.entries(params)) {
        path = path.replaceAll(`:${key}`, String(value));
      }
    }

    const url = new URL(path, this.baseURL);

    if (query) {
      for (const [key, value] of Object.entries(query)) {
        if (value !== undefined && value !== '') {
          url.searchParams.append(key, String(value));
        }
      }
    }

    return url.toString();
  }

  private async request<TResponse, TBody = unknown>(endpoint: TEndpoint, options: IRequestFetchOptions<TBody>): Promise<TResponse> {
    const { method, headers, body, query, params, signal, cache, revalidate, tags } = options;

    if (cache && revalidate !== undefined) throw new Error('Do not use cache and revalidate together.');

    const requestOptions: IFetchRequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: body ? JSON.stringify(body) : undefined,
      signal,
      cache: cache ?? 'no-store',
      next: {
        revalidate,
        tags
      }
    };

    const response = await fetch(this.buildURL(endpoint, query, params), requestOptions as RequestInit);

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`HTTP ${response.status}: ${text}`);
    }

    return (await response.json()) as TResponse;
  }

  get<TResponse>(endpoint: TEndpoint, options: IGetOptions = {}): Promise<TResponse> {
    const { query, params, ...config } = options;

    return this.request<TResponse>(endpoint, {
      method: 'GET',
      query,
      params,
      ...config
    });
  }

  post<TResponse, TBody>(endpoint: TEndpoint, body: TBody, options: IPostOptions = {}): Promise<TResponse> {
    const { params, ...config } = options;

    return this.request<TResponse, TBody>(endpoint, {
      method: 'POST',
      body,
      params,
      ...config
    });
  }

  put<TResponse, TBody>(endpoint: TEndpoint, body: TBody, options: IPostOptions = {}): Promise<TResponse> {
    const { params, ...config } = options;

    return this.request<TResponse, TBody>(endpoint, {
      method: 'PUT',
      body,
      params,
      ...config
    });
  }

  patch<TResponse, TBody>(endpoint: TEndpoint, body: TBody, options: IPostOptions = {}): Promise<TResponse> {
    const { params, ...config } = options;

    return this.request<TResponse, TBody>(endpoint, {
      method: 'PATCH',
      body,
      params,
      ...config
    });
  }

  delete<TResponse>(endpoint: TEndpoint, options: IPostOptions = {}): Promise<TResponse> {
    const { params, ...config } = options;

    return this.request<TResponse>(endpoint, {
      method: 'DELETE',
      params,
      ...config
    });
  }
}

export default HttpClient;

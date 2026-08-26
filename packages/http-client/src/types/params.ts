/**
 * Query string parameters appended to URL.
 * Example: /articles?page=1&category=recommended
 */
export type QueryParams = Record<string, string | number | boolean | undefined>;

/**
 * Dynamic path parameters used for URL interpolation.
 * Example: /articles/:id + { id: 1 } → /articles/1
 */
export type PathParams = Record<string, string | number>;

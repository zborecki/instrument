/**
  * Incremental Static Regeneration (ISR) revalidation time.
  * - number → cache for X seconds
  * - false → disable revalidation
  */
export type Revalidate = number | false;

/**
 * Controls caching and Incremental Static Regeneration (ISR) behavior.
 */
export interface INextFetchOptions {
  cache?: RequestCache;
  revalidate?: Revalidate;
  tags?: string[];
}

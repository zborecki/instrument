import { PageParams } from '@/types/props/pages';

export const buildSlug = (slug: PageParams['slug']): string => {
  if (slug === undefined) return '/';

  return slug.join('/');
};

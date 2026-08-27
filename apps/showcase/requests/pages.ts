import { PageAPI, PageResponseAPI } from '@instrument/types/api/pages';

import { cmsHttpClient } from '@/helpers/cms-http-client';
import { PageParams } from '@/types/props/pages';
import { buildSlug } from '@/utils/buildSlug';

export const getPage = async (slug: PageParams['slug']): Promise<PageAPI> => {
  const normalizedSlug = buildSlug(slug);

  try {
    const response = await cmsHttpClient.get<PageResponseAPI>('api/v1/pages', {
      params: {
        slug: normalizedSlug
      },
      revalidate: 60,
      tags: [`page:${normalizedSlug}`]
    });

    return response.data;
  } catch {
    return ({
      blocks: null,
      metadata: null
    });
  }
};

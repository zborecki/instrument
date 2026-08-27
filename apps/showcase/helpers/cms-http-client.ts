import HttpClient from '@instrument/http-client';

type Endpoint = 'api/v1/settings' | 'api/v1/pages';

export const cmsHttpClient = new HttpClient<Endpoint>(process.env.NEXT_PUBLIC_CMS_BASE_API_URL);

import { SettingsAPI, SettingsResponseAPI } from '@instrument/types/api/settings';

import { cmsHttpClient } from '@/helpers/cms-http-client';

export const getSettings = async (): Promise<SettingsAPI> => {
  try {
    const response = await cmsHttpClient.get<SettingsResponseAPI>('api/v1/settings');

    return response.data;
  } catch {
    return ({
      logo: null
    });
  }
};

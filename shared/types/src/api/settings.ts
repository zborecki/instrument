import { ImageAPI } from './common';
import { IResponseAPI } from './responses';

import { Nullable } from '../common';

export type SettingsAPI = {
  logo: Nullable<ImageAPI>;
}

export type SettingsResponseAPI = IResponseAPI<SettingsAPI>;


import { LinkAPI } from './common';
import { ResponseItemAPI } from './responses';

import { Keywords, Nullable } from '../common';

export type PageHeaderBlockAPI = ResponseItemAPI<{
  colors: {
    [color in 'background' | 'text']: string;
  }
  title: string;
  description: Nullable<string>;
  keywords: Keywords;
  links: Nullable<Array<LinkAPI>>;
  type: 'PAGE_HEADER';
}>

export type BlockAPI = PageHeaderBlockAPI;

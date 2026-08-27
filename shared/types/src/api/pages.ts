import { BlockAPI } from './blocks';
import { IResponseAPI, ResponseItemAPI } from './responses';

import { IMetadata, Nullable } from '../common';

export type PageAPI = ResponseItemAPI<{
  blocks: Nullable<Array<BlockAPI>>;
  metadata: Nullable<IMetadata>;
}, 'optional'>

export type PageResponseAPI = IResponseAPI<PageAPI>;

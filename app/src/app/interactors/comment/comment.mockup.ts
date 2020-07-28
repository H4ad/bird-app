//#region Imports

import { StorageAsyncResult } from '../../models/interfaces/storage-async-result';
import { CommentProxy, getFakeCommentProxy } from '../../models/proxies/comment.proxy';

//#endregion

/**
 * Método que retorna os meus comentários criados
 */
export async function getMyCommentsMockup(): Promise<StorageAsyncResult<CommentProxy[]>> {
  return Promise.resolve({
    error: undefined,
    success: [
      getFakeCommentProxy(),
      getFakeCommentProxy(),
      getFakeCommentProxy(),
      getFakeCommentProxy(),
    ],
  });
}

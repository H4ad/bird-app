//#region Imports

import { delay } from 'rxjs/operators';
import { HttpAsyncResult } from '../../models/interfaces/http-async-result';
import { StorageAsyncResult } from '../../models/interfaces/storage-async-result';
import { CreateCommentPayload } from '../../models/payloads/create-comment.payload';
import { CommentProxy, getFakeCommentProxy } from '../../models/proxies/comment.proxy';
import { PaginatedCommentProxy } from '../../models/proxies/paginated-comment.proxy';

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

/**
 * Método que retorna todos os comentários paginados mockados
 *
 * @param currentPage A página atual
 * @param maxItens A quantidade máxima de itens que deve vir por paginação
 */
export async function getAllCommentsMockup(currentPage: number, maxItens: number): Promise<HttpAsyncResult<PaginatedCommentProxy>> {
  const paginated = {
    pageCount: 5,
    currentPage,
    items: [],
    maxItens,
  };

  for (let i = 0; i < maxItens; i++)
    paginated.items.push(getFakeCommentProxy());

  return {
    success: paginated,
  };
}

/**
 * Método que retorna os comentários de uma categoria paginados mockados
 *
 * @param categoryId A identificação da categoria
 * @param currentPage A página atual
 * @param maxItens A quantidade máxima de itens que deve vir por paginação
 */
export async function getCommentsByCategoryIdMockup(categoryId: number, currentPage: number, maxItens: number): Promise<HttpAsyncResult<PaginatedCommentProxy>> {
  const paginated = {
    pageCount: 5,
    currentPage,
    items: [],
    maxItens,
  };

  for (let i = 0; i < maxItens; i++)
    paginated.items.push(getFakeCommentProxy());

  return {
    success: paginated,
  };
}

/**
 * Método que retorna as informações de um comentário criado com sucesso
 *
 * @param payload As informações para a criação do comentário
 */
export async function createCommentMockup(payload: CreateCommentPayload): Promise<HttpAsyncResult<CommentProxy>> {
  await new Promise(resolve => setTimeout(resolve, 2_000));

  return {
    success: getFakeCommentProxy(),
  }
}

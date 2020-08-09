//#region Imports

import { CommentProxy } from './comment.proxy';

//#endregion

/**
 * A interface que representa os resultados paginados dos comentários
 */
export interface PaginatedCommentProxy {
  /**
   * O indice atual da paginação
   */
  currentPage: number;

  /**
   * O total de paǵinas dessa paginação
   */
  pageCount: number;

  /**
   * O total de itens por página
   */
  maxItens: number;

  /**
   * Os itens dessa páginação
   */
  items: CommentProxy[];
}

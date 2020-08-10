//#region Imports

import { HttpAsyncResult } from '../../models/interfaces/http-async-result';
import { getFakeCategoryProxy } from '../../models/proxies/category.proxy';
import { PaginatedCategoryProxy } from '../../models/proxies/paginated-category.proxy';

//#endregion

/**
 * Método que retorna os valores mockados da função getCategories
 *
 * @param currentPage A página atual
 * @param maxItens A quantidade máxima de itens que deve vir por paginação
 */
export async function getCategoriesMockup(currentPage: number, maxItens: number): Promise<HttpAsyncResult<PaginatedCategoryProxy>> {
  const paginated = {
    pageCount: 5,
    currentPage,
    items: [],
    maxItens,
  };

  for (let i = 0; i < maxItens; i++)
    paginated.items.push(getFakeCategoryProxy());

  return {
    success: paginated,
  };
}

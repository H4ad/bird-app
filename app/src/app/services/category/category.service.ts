//#region Imports

import { Injectable } from '@angular/core';

import { CategoryInteractor } from '../../interactors/category/category.interactor';
import { PaginatedCategoryProxy } from '../../models/proxies/paginated-category.proxy';

//#endregion

/**
 * A classe que representa o serviço que lida com as categorias do aplicativo
 */
@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    private readonly interactor: CategoryInteractor,
  ) { }

  //#endregion

  //#region Public Methods

  /**
   * Método que retorna todas as categorias
   *
   * @param currentPage A página atual
   * @param maxItens A quantidade máxima de itens que deve vir por paginação
   */
  public async getCategories(currentPage: number, maxItens: number): Promise<PaginatedCategoryProxy> {
    const { error, success } = await this.interactor.getCategories(currentPage, maxItens);

    if (error)
      return {
        pageCount: 1,
        currentPage: 1,
        items: [],
        maxItens,
      };

    return success;
  }

  //#endregion

}

//#region Imports

import { Injectable } from '@angular/core';

import { CategoryInteractor } from '../../interactors/category/category.interactor';
import { CreateCategoryPayload } from '../../models/payloads/create-category.payload';
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

  /**
   * Método que cria uma nova categoria
   *
   * @param payload As informações necessárias para a criação de uma nova categoria
   */
  public async createCategory(payload: CreateCategoryPayload): Promise<[boolean, string]> {
    const { error } = await this.interactor.createCategory(payload);

    if (error)
      return [false, 'Ocorreu um erro ao criar, por favor, tente novamente.'];

    return [true, 'A categoria foi criada com sucesso!'];
  }

  //#endregion

}

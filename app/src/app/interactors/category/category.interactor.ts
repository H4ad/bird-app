//#region Imports

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { HttpAsyncResult } from '../../models/interfaces/http-async-result';
import { PaginatedCategoryProxy } from '../../models/proxies/paginated-category.proxy';
import { getCategoriesMockup } from './category.mockup';

//#endregion

/**
 * A classe que representa o interactor que lida com as rotas e cache das categorias
 */
@Injectable({
  providedIn: 'root',
})
export class CategoryInteractor {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    private readonly http: HttpClient,
  ) { }

  //#endregion

  //#region Public Methods

  /**
   * Método que retorna todos as categorias paginadas
   *
   * @param currentPage A página atual
   * @param maxItens A quantidade máxima de itens que deve vir por paginação
   */
  public async getCategories(currentPage: number, maxItens: number): Promise<HttpAsyncResult<PaginatedCategoryProxy>> {
    if (environment.mockupEnabled)
      return await getCategoriesMockup(currentPage, maxItens);

    const url = environment.api.categories.list
      .replace('{currentPage}', currentPage.toString())
      .replace('{maxItens}', maxItens.toString());

    return await this.http.get<PaginatedCategoryProxy>(url)
      .toPromise()
      .then(success => ({ success, error: undefined }))
      .catch(error => ({ success: undefined, error  }));
  }

  //#endregion

}

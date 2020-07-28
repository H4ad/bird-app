//#region Imports

import { Injectable } from '@angular/core';

import { CommentInteractor } from '../../interactors/comment/comment.interactor';
import { CommentProxy } from '../../models/proxies/comment.proxy';

//#endregion

/**
 * A classe que representa o serviço que lida com os comentários da aplicação
 */
@Injectable({
  providedIn: 'root',
})
export class CommentService {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    private readonly interactor: CommentInteractor,
  ) { }

  //#endregion

  //#region Public Methods

  /**
   * Método que retorna os meus comentários criados
   */
  public async getMyComments(): Promise<CommentProxy[]> {
    const { error, success } = await this.interactor.getMyComments();

    if (error)
      return [];

    if (!Array.isArray(success))
      return [];

    return success;
  }

  //#endregion

}

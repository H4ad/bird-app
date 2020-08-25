//#region Imports

import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

import { CommentInteractor } from '../../interactors/comment/comment.interactor';
import { CreateCommentPayload } from '../../models/payloads/create-comment.payload';
import { CommentProxy } from '../../models/proxies/comment.proxy';
import { PaginatedCommentProxy } from '../../models/proxies/paginated-comment.proxy';

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

  /**
   * Método que retorna todos os comentários criados na aplicação
   *
   * @param currentPage A página atual
   * @param maxItens A quantidade máxima de itens que deve vir por paginação
   */
  public async getAllComments(currentPage: number, maxItens: number): Promise<PaginatedCommentProxy> {
    const { error, success } = await this.interactor.getAllComments(currentPage, maxItens);

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
   * Método que retorna os comentários de uma categoria em especifico
   *
   * @param categoryId A identificação da categoria
   * @param currentPage A página atual
   * @param maxItens A quantidade máxima de itens que deve vir por paginação
   */
  public async getCommentsByCategoryId(categoryId: number, currentPage: number, maxItens: number): Promise<PaginatedCommentProxy> {
    const { error, success } = await this.interactor.getCommentsByCategoryId(categoryId, currentPage, maxItens);

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
   * Método que cria um novo comentário
   *
   * @param payload As informações para a criação do comentário
   */
  public async createComment(payload: CreateCommentPayload): Promise<[boolean, string]> {
    const { error, success } = await this.interactor.createComment(payload);

    if (error)
      return [false, 'Ocorreu um erro ao criar, por favor, tente novamente.'];

    const { error: errorOnSave } = await this.interactor.saveCommentCreated(success);

    if (errorOnSave)
      console.error(errorOnSave);

    return [true, 'Comentário criado com sucesso!'];
  }

  //#endregion

}

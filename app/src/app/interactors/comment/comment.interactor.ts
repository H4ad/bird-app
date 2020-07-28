//#region Imports

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

import { environment } from '../../../environments/environment';
import { StorageAsyncResult } from '../../models/interfaces/storage-async-result';
import { CommentProxy } from '../../models/proxies/comment.proxy';
import { getMyCommentsMockup } from './comment.mockup';

//#endregion

/**
 * A classe que representa o interactor que lida com as rotas e cache dos comentários
 */
@Injectable({
  providedIn: 'root',
})
export class CommentInteractor {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    private readonly http: HttpClient,
    private readonly storage: Storage,
  ) { }

  //#endregion

  //#region Storage Methods

  /**
   * Método que retorna os meus comentários criados
   */
  public async getMyComments(): Promise<StorageAsyncResult<CommentProxy[]>> {
    if (environment.mockupEnabled)
      return await getMyCommentsMockup();

    await this.storage.ready().catch(console.error);

    return this.storage.get(environment.keys.myComments)
      .then(success => ({ success, error: undefined }))
      .catch(() => ({ success: undefined, error: 'Ocorreu um erro ao buscar do cache, por favor, tente novamente.' }));
  }


  //#endregion

}

//#region Imports

import { Component, OnInit } from '@angular/core';

import { CommentProxy } from '../../../models/proxies/comment.proxy';
import { CommentService } from '../../../services/comment/comment.service';

//#endregion

/**
 * A classe que representa a página que lista todos os meus comentários criados
 */
@Component({
  selector: 'bird-my-comments',
  templateUrl: './my-comments.page.html',
  styleUrls: ['./my-comments.page.scss'],
})
export class MyCommentsPage implements OnInit {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    private readonly comment: CommentService,
  ) { }

  //#endregion

  //#region Public Properties

  /**
   * A lista de comentários feitos por mim
   */
  public listComments: CommentProxy[] = [];

  //#endregion

  //#region LifeCycle Events

  /**
  * Método executado ao iniciar o componente
  */
  public async ngOnInit(): Promise<void> {
    this.listComments = await this.comment.getMyComments();
  }

  //#endregion

  //#region Public Methods

  /**
   * Método que retorna a identificação do item da lista para ser usado
   * para verificar se o item já existe na lista, caso exista, não
   * deve fazer alterações no HTML.
   *
   * @param index O indice desse item na lista
   * @param value As informações do item
   */
  public trackById(index: number, value: CommentProxy): number {
    return value.id;
  }

  //#endregion

}

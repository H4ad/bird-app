//#region Imports

import { Component, Input } from '@angular/core';

import { CommentProxy } from '../../models/proxies/comment.proxy';

//#endregion

/**
 * A classe que o componente que exibe as informações de um comentário
 */
@Component({
  selector: 'bird-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss'],
})
export class CommentItemComponent {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor() { }

  //#endregion

  //#region Inputs

  /**
   * O conteúdo desse componente
   */
  @Input()
  public content: CommentProxy;

  //#endregion

}

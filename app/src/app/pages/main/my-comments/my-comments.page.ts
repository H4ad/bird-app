//#region Imports

import { Component, OnInit } from '@angular/core';
import { TrackablePage } from '../../../common/trackable.page';

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
export class MyCommentsPage extends TrackablePage implements OnInit {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    private readonly comment: CommentService,
  ) {
    super();
  }

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

}

//#region Imports

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';
import { TrackablePage } from '../../../common/trackable.page';

import { CommentProxy } from '../../../models/proxies/comment.proxy';
import { PaginatedCommentProxy } from '../../../models/proxies/paginated-comment.proxy';
import { CommentService } from '../../../services/comment/comment.service';

//#endregion

/**
 * A classe que representa a página que exibe todos os comentários que existem na aplicação
 */
@Component({
  selector: 'bird-all-comments',
  templateUrl: './all-comments.page.html',
  styleUrls: ['./all-comments.page.scss'],
})
export class AllCommentsPage extends TrackablePage implements OnInit, OnDestroy {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    private readonly comment: CommentService,
  ) {
    super();

    this.currentScrollSubscription = this.currentScrollFrameSubject.pipe(
      throttleTime(16),
      map(currentDiv => {
        const threshold = 100;
        const position = currentDiv.scrollTop + currentDiv.offsetHeight;
        const height = currentDiv.scrollHeight;

        return position > height - threshold;
      })
    ).subscribe(isNearBottom => isNearBottom && this.nextPage())
  }

  //#endregion

  //#region Private Subscriptions

  /**
   * A inscrição para escutar os eventos lançados do container atual
   */
  private readonly currentScrollSubscription: Subscription;

  //#endregion

  //#region Private Events

  /**
   * O evento que lança o container dos itens atual
   */
  private readonly currentScrollFrameSubject: Subject<HTMLDivElement> = new Subject<HTMLDivElement>();

  //#endregion

  //#region Public Properties

  /**
   * A lista com todos os comentários
   */
  public listAllComments: CommentProxy[] = [];

  /**
   * As informações de paginação
   */
  public paginatedComment: PaginatedCommentProxy;

  /**
   * Diz se está carregando mais comentários
   */
  public isLoadingComments: boolean;

  //#endregion

  //#region LifeCycle Events

  /**
   * Método executado ao iniciar o componente
   */
  public async ngOnInit(): Promise<void> {
    await this.nextPage();
  }

  /**
   * Método executado ao destruir o componente
   */
  public ngOnDestroy(): void {
    this.currentScrollSubscription.unsubscribe();
  }

  //#endregion

  //#region Public Methods

  /**
   * Método que carrega a próxima página de comentários
   */
  public async nextPage(): Promise<void> {
    if (this.paginatedComment?.currentPage >= this.paginatedComment?.pageCount)
      return;

    if (this.isLoadingComments)
      return;

    this.isLoadingComments = true;

    const currentPage = this.paginatedComment?.currentPage || 0;

    this.paginatedComment = await this.comment.getAllComments(currentPage + 1, 4);
    this.listAllComments = [...this.listAllComments, ...this.paginatedComment.items];

    this.isLoadingComments = false;
  }

  /**
   * Método que é executado toda vez que ocorre um evento de scroll no container dos itens
   *
   * @param event As informações do evento de Scroll
   */
  public onScroll(event: any): void {
    this.currentScrollFrameSubject.next(event.currentTarget);
  }

  //#endregion

}

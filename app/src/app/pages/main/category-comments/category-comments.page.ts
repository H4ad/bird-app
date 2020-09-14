//#region Imports

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';

import { TrackablePage } from '../../../common/trackable.page';
import { CommentProxy } from '../../../models/proxies/comment.proxy';
import { PaginatedCommentProxy } from '../../../models/proxies/paginated-comment.proxy';
import { CommentService } from '../../../services/comment/comment.service';

//#endregion

/**
 * A classe que representa o componente que exibe os comentários de uma categoria
 */
@Component({
  selector: 'bird-category-comments',
  templateUrl: './category-comments.page.html',
  styleUrls: ['./category-comments.page.scss'],
})
export class CategoryCommentsPage extends TrackablePage implements OnInit, OnDestroy {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly comment: CommentService,
  ) {
    super();

    this.categoryId = Number(this.route.snapshot.paramMap.get('categoryId')) || 0;

    if (this.categoryId === 0)
      return void this.router.navigateByUrl('/main/categories');

    this.currentScrollSubscription = this.currentScrollFrameSubject.pipe(
      throttleTime(16),
      map(currentDiv => {
        const threshold = 100;
        const position = currentDiv.scrollTop + currentDiv.offsetHeight;
        const height = currentDiv.scrollHeight;

        return position > height - threshold;
      }),
    ).subscribe(isNearBottom => isNearBottom && this.nextPage());
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
   * A lista com os comentários de uma certa categoria
   */
  public listComments: CommentProxy[] = [];

  /**
   * As informações de paginação
   */
  public paginatedComment: PaginatedCommentProxy;

  /**
   * Diz se está carregando mais itens
   */
  public isLoadingData: boolean;

  /**
   * A identificação da categoria
   */
  public readonly categoryId: number;

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
   * Método que carrega a próxima página de categorias
   */
  public async nextPage(): Promise<void> {
    if (this.paginatedComment?.currentPage >= this.paginatedComment?.pageCount)
      return;

    if (this.isLoadingData)
      return;

    this.isLoadingData = true;

    const currentPage = this.paginatedComment?.currentPage || 0;

    this.paginatedComment = await this.comment.getCommentsByCategoryId(this.categoryId, currentPage + 1, 5);
    this.listComments = [...this.listComments, ...this.paginatedComment.items];

    this.isLoadingData = false;
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


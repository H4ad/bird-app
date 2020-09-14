//#region Imports

import { ApiProperty } from '@nestjs/swagger';

import { BasePaginatedProxy } from '../../../common/base-paginated.proxy';
import { CommentEntity } from '../../../typeorm/entities/comment.entity';
import { CommentProxy } from './comment.proxy';

//#endregion

/**
 * A classe que representa os resultados paginados dos comentários
 */
export class PaginatedCommentProxy extends BasePaginatedProxy {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    entities: CommentEntity[],
    currentPage: number,
    pageCount: number,
    maxItens: number,
  ) {
    super(currentPage, pageCount, maxItens);

    this.items = Array.isArray(entities) && entities.map(category => new CommentProxy(category));
  }

  //#endregion

  /**
   * Os itens dessa paginação
   */
  @ApiProperty({ type: () => CommentProxy, isArray: true })
  public items: CommentProxy[];

}

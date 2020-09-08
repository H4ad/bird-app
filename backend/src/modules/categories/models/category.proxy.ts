//#region Imports

import { ApiProperty } from '@nestjs/swagger';

import { BaseCrudProxy } from '../../../common/base-crud.proxy';
import { CategoryEntity } from '../../../typeorm/entities/category.entity';
import { CommentProxy } from '../../comments/models/comment.proxy';

//#endregion

/**
 * A classe que representa as informações que são enviadas pela API sobre uma categoria
 */
export class CategoryProxy extends BaseCrudProxy {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    entity: CategoryEntity,
  ) {
    super(entity);

    this.name = entity.name;
    this.color = entity.color;
    this.comments = Array.isArray(entity.comments) && entity.comments.map(comment => new CommentProxy(comment)) || [];
  }

  //#endregion

  //#region Public Properties

  /**
   * O nome dessa categoria
   */
  @ApiProperty()
  name: string;

  /**
   * A cor dessa categoria
   */
  @ApiProperty()
  color: string;

  /**
   * A lista de comentários dessa categoria
   */
  @ApiProperty({ type: () => CommentProxy, isArray: true })
  comments: CommentProxy[];

  //#endregion

}


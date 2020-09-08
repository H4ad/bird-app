//#region Imports

import { ApiProperty } from '@nestjs/swagger';

import { BaseCrudProxy } from '../../../common/base-crud.proxy';
import { CommentEntity } from '../../../typeorm/entities/comment.entity';
import { CategoryProxy } from '../../categories/models/category.proxy';

//#endregion

/**
 * A interface que representa as informações de um comentário vindos da API
 */
export class CommentProxy extends BaseCrudProxy {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    entity: CommentEntity,
  ) {
    super(entity);

    this.message = entity.message;
    this.personName = entity.personName;
    this.personEmoji = entity.personEmoji;
    this.personColor = entity.personColor;
    this.categoryId = entity.categoryId;
    this.category = entity.category;
  }

  //#endregion

  /**
   * A mensagem desse comentário
   */
  @ApiProperty()
  public message: string;

  /**
   * O nome do autor desse comentário
   */
  @ApiProperty()
  public personName: string;

  /**
   * O emoji que representa esse autor
   */
  @ApiProperty()
  public personEmoji: string;

  /**
   * A cor de fundo da foto dessa pessoa
   */
  @ApiProperty()
  public personColor: string;

  /**
   * A identificação da categoria
   */
  @ApiProperty()
  public categoryId: number;

  /**
   * As informações sobre a categoria
   */
  @ApiProperty()
  public category?: CategoryProxy;

}

//#region Imports

import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany } from 'typeorm';

import { BaseEntity } from '../../common/base-entity';
import { CommentEntity } from './comment.entity';

//#endregion

/**
 * A class que representa a entidade que lida com as informações de uma categoria
 */
@Entity('categories')
export class CategoryEntity extends BaseEntity {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    partial: Partial<CategoryEntity> | CategoryEntity,
  ) {
    super();

    Object.assign(this, { ...partial });
  }

  //#endregion

  //#region Public Properties

  /**
   * O nome dessa categoria
   */
  @ApiProperty()
  @Column({ length: 64, nullable: false })
  name: string;

  /**
   * A cor dessa categoria
   */
  @ApiProperty()
  @Column({ length: 7, nullable: false })
  color: string;

  /**
   * A lista de comentários dessa categoria
   */
  @ApiProperty({ type: () => CommentEntity, isArray: true })
  @OneToMany(() => CommentEntity, comment => comment.categoryId)
  comments?: CommentEntity[];

  //#endregion

}

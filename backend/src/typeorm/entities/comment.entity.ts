//#region Imports

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Column, Entity, ManyToOne } from 'typeorm';

import { BaseEntity } from '../../common/base-entity';
import { CategoryEntity } from './category.entity';

//#endregion

/**
 * A class que representa a entidade que lida com as informações dos comentários
 */
@Entity('comments')
export class CommentEntity extends BaseEntity {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    partial: Partial<CommentEntity> | CommentEntity,
  ) {
    super();

    Object.assign(this, { ...partial });
  }

  //#endregion

  //#region Public Properties

  /**
   * A mensagem desse comentário
   */
  @ApiProperty()
  @Column({ length: 1024, nullable: false })
  message: string;

  /**
   * O nome do autor desse comentário
   */
  @ApiProperty()
  @Column({ length: 64, nullable: false })
  personName: string;

  /**
   * O emoji que representa esse autor
   */
  @ApiProperty()
  @Column({ length: 124, nullable: false })
  personEmoji: string;

  /**
   * A cor de fundo da foto dessa pessoa
   */
  @ApiProperty()
  @Column({ length: 7, nullable: false })
  personColor: string;

  /**
   * A identificação da categoria
   */
  @ApiProperty()
  @Column({ nullable: false })
  categoryId: number;

  /**
   * As informações da categoria desse comentário
   */
  @ApiPropertyOptional({ type: () => CategoryEntity })
  @ManyToOne(() => CategoryEntity, category => category.comments)
  category?: CategoryEntity;

  //#endregion

}

//#region Imports

import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from './base-entity';

//#endregion

/**
 * A classe base para todo proxy
 */
export class BaseCrudProxy {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    entity: BaseEntity,
  ) {
    this.id = entity.id;
    this.createdAt = entity.createdAt;
    this.updatedAt = entity.updatedAt;
  }

  //#endregion

  //#region Public Properties

  /**
   * A identificação da entidade
   */
  @ApiProperty()
  id: number;

  /**
   * A data de quando foi criada essa entidade
   */
  @ApiProperty()
  createdAt: Date;

  /**
   * A data de quando foi atualizado pela ultima vez
   */
  @ApiProperty()
  updatedAt: Date;

  //#endregion

}

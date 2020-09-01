//#region Imports

import { ApiProperty } from '@nestjs/swagger';

import { BaseCrudProxy } from '../../../common/base-crud.proxy';
import { CategoryEntity } from '../../../typeorm/entities/category.entity';

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

  //#endregion

}


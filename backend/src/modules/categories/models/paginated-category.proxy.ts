//#region Imports

import { ApiProperty } from '@nestjs/swagger';

import { BasePaginatedProxy } from '../../../common/base-paginated.proxy';
import { CategoryEntity } from '../../../typeorm/entities/category.entity';
import { CategoryProxy } from './category.proxy';

//#endregion

/**
 * A classe que representa os resultados paginados das categorias
 */
export class PaginatedCategoryProxy extends BasePaginatedProxy {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    entities: CategoryEntity[],
    currentPage: number,
    pageCount: number,
    maxItens: number,
  ) {
    super(currentPage, pageCount, maxItens);

    this.items = Array.isArray(entities) && entities.map(category => new CategoryProxy(category));
  }

  //#endregion

  /**
   * Os itens dessa paginação
   */
  @ApiProperty({ type: () => CategoryProxy, isArray: true })
  public items: CategoryProxy[];

}

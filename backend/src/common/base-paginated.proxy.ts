//#region Imports

import { ApiProperty } from '@nestjs/swagger';

//#endregion

/**
 * A classe base que representa os resultados paginados
 */
export class BasePaginatedProxy {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    currentPage: number,
    pageCount: number,
    maxItens: number,
  ) {
    this.currentPage = currentPage;
    this.pageCount = pageCount;
    this.maxItens = maxItens;
  }

  //#endregion

  /**
   * O indices atual da paginação
   */
  @ApiProperty()
  public currentPage: number;

  /**
   * O total de paginas dessa paginação
   */
  @ApiProperty()
  public pageCount: number;

  /**
   * O total de itens por página
   */
  @ApiProperty()
  public maxItens: number;

}

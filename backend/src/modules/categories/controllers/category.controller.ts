//#region Imports

import { Body, ClassSerializerInterceptor, Controller, Get, NotFoundException, Param, Post, Query, UseInterceptors } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

import { CategoryProxy } from '../models/category.proxy';
import { CreateCategoryPayload } from '../models/create-category.payload';
import { PaginatedCategoryProxy } from '../models/paginated-category.proxy';
import { CategoryService } from '../services/category.service';

//#endregion

/**
 * A classe que representa o controller que lida com o controller das categorias
 */
@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('categories')
@Controller('categories')
export class CategoryController {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    private readonly service: CategoryService,
  ) { }

  //#endregion

  //#region Public Methods

  /**
   * Método que retorna várias informações da entidade
   *
   * @param page A página atual
   * @param maxItens A quantidade máxima de itens
   * @param search O termo para pesquisa de uma categoria
   */
  @Get()
  @ApiOperation({ summary: 'Método que retorna uma lista de categorias.' })
  @ApiOkResponse({ type: PaginatedCategoryProxy })
  @ApiQuery({ name: 'page', required: false, example: 1, allowEmptyValue: false, description: 'A página atual da paginação. Default: 1' })
  @ApiQuery({ name: 'maxItens', required: false, example: 15, allowEmptyValue: false, description: 'A quantidade itens a ser retornado por página. Default: 15 - Min: 5 - Max: 100.' })
  @ApiQuery({ name: 'search', required: false, example: 'TypeScript', allowEmptyValue: false, description: 'A quantidade itens a ser retornado por página. Min: 5 - Max: 100.' })
  public async getMany(@Query('page') page?: number, @Query('maxItens') maxItens?: number, @Query('search') search?: string): Promise<PaginatedCategoryProxy> {
    page = Number(page) || 1;
    maxItens = Number(maxItens) || 15;

    return await this.service.listMany(page, maxItens, search);
  }

  /**
   * Método que retorna as informações de uma entidade
   *
   * @param categoryId A identificação da entidade
   */
  @Get('/:categoryId')
  @ApiOperation({ summary: 'Método que retorna uma categoria baseada na sua identificação.' })
  @ApiOkResponse({ type: CategoryProxy })
  @ApiNotFoundResponse({ type: NotFoundException, description: 'A categoria que você não existe.' })
  public async getOne(@Param('categoryId') categoryId: number): Promise<CategoryProxy> {
    return await this.service.get(categoryId).then(response => new CategoryProxy(response));
  }

  /**
   * Método que cria uma nova entidade
   *
   * @param payload As informações para a criação da entidade
   */
  @Post()
  @ApiOperation({ summary: 'Método que cria uma nova categoria.' })
  @ApiOkResponse({ type: CategoryProxy })
  public createOne(@Body() payload: CreateCategoryPayload): Promise<CategoryProxy> {
    return this.service.create(payload).then(response => new CategoryProxy(response));
  }

  //#endregion

}

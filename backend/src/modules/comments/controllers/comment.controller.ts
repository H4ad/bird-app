//#region Imports

import { Body, ClassSerializerInterceptor, Controller, Get, NotFoundException, Param, Post, Query, UseInterceptors } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

import { CommentProxy } from '../models/comment.proxy';
import { CreateCommentPayload } from '../models/create-comment.payload';
import { PaginatedCommentProxy } from '../models/paginated-comment.proxy';
import { CommentService } from '../services/comment.service';


//#endregion

/**
 * A classe que representa o controller que lida com o controller dos comentários
 */
@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('comments')
@Controller('comments')
export class CommentController {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    private readonly service: CommentService,
  ) { }

  //#endregion

  //#region Public Methods

  /**
   * Método que retorna várias informações da entidade
   *
   * @param page A página atual
   * @param maxItens A quantidade máxima de itens
   * @param search O termo para pesquisa
   * @param categoryId A identificação da categoria para filtrar os comentários
   * @param includeCategory Diz se deve incluir a categoria do comentário
   */
  @Get()
  @ApiOperation({ summary: 'Método que retorna uma lista de comentários.' })
  @ApiOkResponse({ type: PaginatedCommentProxy })
  @ApiQuery({ name: 'page', required: false, example: 1, allowEmptyValue: false, description: 'A página atual da paginação. Default: 1' })
  @ApiQuery({ name: 'maxItens', required: false, example: 15, allowEmptyValue: false, description: 'A quantidade itens a ser retornado por página. Default: 15 - Min: 5 - Max: 100.' })
  @ApiQuery({ name: 'search', required: false, example: 'TypeScript', allowEmptyValue: false, description: 'A quantidade itens a ser retornado por página. Min: 5 - Max: 100.' })
  @ApiQuery({ name: 'categoryId', required: false, example: 1, allowEmptyValue: false, description: 'Filtrar comentários feitos apenas dessa categoria.' })
  @ApiQuery({ name: 'includeCategory', required: false, example: true, allowEmptyValue: false, description: 'Diz se deve incluir as informações da categoria do comentário.' })
  public async getMany(
    @Query('page') page?: number,
    @Query('maxItens') maxItens?: number,
    @Query('search') search?: string,
    @Query('categoryId') categoryId?: number,
    @Query('includeCategory') includeCategory?: boolean,
  ): Promise<PaginatedCommentProxy> {
    page = Number(page) || 1;
    maxItens = Number(maxItens) || 15;
    categoryId = Number(categoryId) || void 0;
    includeCategory = Boolean(includeCategory) || false;

    return await this.service.listMany(page, maxItens, search, categoryId, includeCategory);
  }

  /**
   * Método que retorna as informações de uma entidade
   *
   * @param commentId A identificação da entidade
   */
  @Get('/:commentId')
  @ApiOperation({ summary: 'Método que retorna um comentário baseado na sua identificação.' })
  @ApiOkResponse({ type: CommentProxy })
  @ApiNotFoundResponse({ type: NotFoundException, description: 'A categoria que você não existe.' })
  public async getOne(@Param('commentId') commentId: number): Promise<CommentProxy> {
    return await this.service.get(commentId).then(response => new CommentProxy(response));
  }

  /**
   * Método que cria uma nova entidade
   *
   * @param payload As informações para a criação da entidade
   */
  @Post()
  @ApiOperation({ summary: 'Método que cria um novo comentário.' })
  @ApiOkResponse({ type: CommentProxy })
  public createOne(@Body() payload: CreateCommentPayload): Promise<CommentProxy> {
    return this.service.create(payload).then(response => new CommentProxy(response));
  }

  //#endregion

}

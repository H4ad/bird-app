//#region Imports

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { CommentEntity } from '../../../typeorm/entities/comment.entity';
import { isValid } from '../../../utils/functions';
import { CreateCommentPayload } from '../models/create-comment.payload';
import { PaginatedCommentProxy } from '../models/paginated-comment.proxy';

//#endregion

/**
 * A classe que representa o serviço que lida com os comentários
 */
@Injectable()
export class CommentService {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    @InjectRepository(CommentEntity)
    public readonly repository: Repository<CommentEntity>,
  ) { }

  //#endregion

  //#region Private Properties

  /**
   * A quantidade máxima de itens por página na paginação
   * @private
   */
  private readonly maxItemsPerPage: number = 100;

  /**
   * A quantidade mínima de itens por página na paginação
   * @private
   */
  private readonly minItemsPerPage: number = 5;

  //#endregion

  //#region Crud Methods

  /**
   * Método que retorna uma lista com as entidades
   *
   * @param currentPage A página atual
   * @param maxItens A quantidade máxima de itens
   * @param search O termo para pesquisa
   * @param categoryId A identificação da categoria para filtrar os comentários
   * @param includeCategory Diz se deve incluir a categoria do comentário
   */
  public async listMany(currentPage: number, maxItens: number, search?: string, categoryId?: number, includeCategory?: boolean): Promise<PaginatedCommentProxy> {
    currentPage = Math.max(1, currentPage);
    maxItens = Math.max(this.minItemsPerPage, Math.min(this.maxItemsPerPage, maxItens));

    let query = this.repository.createQueryBuilder('comment');

    if (search)
      query = query.where('LOWER(comment.message) LIKE :search', { search: `%${search.toLowerCase()}%` });

    if (categoryId)
      query = query.andWhere('comment.categoryId = :categoryId', { categoryId });

    if (includeCategory)
      query = query.leftJoinAndSelect('comment.category', 'category');

    const [entities, total] = await query
      .take(maxItens)
      .skip((currentPage - 1) * maxItens)
      .orderBy('comment.createdAt', 'DESC')
      .getManyAndCount();

    const pageCount = Math.ceil(total / maxItens);

    return new PaginatedCommentProxy(
      entities,
      currentPage,
      pageCount,
      maxItens,
    );
  }

  /**
   * Método que retorna as informações de uma entidade
   *
   * @param entityId A identificação da entidade que está sendo procurada
   */
  public async get(entityId: number): Promise<CommentEntity> {
    const entity = await this.repository.findOne({
      where: {
        id: Number(entityId) || 0,
      },
    });

    if (!entity)
      throw new NotFoundException('O comentário que você procura não existe ou foi removido.');

    return entity;
  }

  /**
   * Método que cria uma entidade
   *
   * @param payload As informações para a criação
   */
  public async create(payload: CreateCommentPayload): Promise<CommentEntity> {
    const entity = this.getEntityFromPayload(payload);

    return await this.repository.save(entity);
  }

  //#endregion

  //#region Private Methods

  /**
   * Método que retorna as informações de uma entidade a partir das informações do payload
   *
   * @param payload As informações do payload
   */
  private getEntityFromPayload(payload: CreateCommentPayload): CommentEntity {
    return new CommentEntity({
      ...isValid(payload.message) && { message: payload.message },
      ...isValid(payload.personName) && { personName: payload.personName },
      ...isValid(payload.personEmoji) && { personEmoji: payload.personEmoji },
      ...isValid(payload.personColor) && { personColor: payload.personColor },
      ...isValid(payload.categoryId) && { categoryId: payload.categoryId },
    });
  }

  //#endregion

}

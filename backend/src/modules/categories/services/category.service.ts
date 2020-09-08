//#region Imports

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { CategoryEntity } from '../../../typeorm/entities/category.entity';
import { isValid } from '../../../utils/functions';
import { CreateCategoryPayload } from '../models/create-category.payload';
import { PaginatedCategoryProxy } from '../models/paginated-category.proxy';

//#endregion

/**
 * A classe que representa o serviço que lida com as categorias
 */
@Injectable()
export class CategoryService {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    @InjectRepository(CategoryEntity)
    public readonly repository: Repository<CategoryEntity>,
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
   * @param search O termo para pesquisa de uma categoria
   */
  public async listMany(currentPage: number, maxItens: number, search?: string): Promise<PaginatedCategoryProxy> {
    currentPage = Math.max(1, currentPage);
    maxItens = Math.max(this.minItemsPerPage, Math.min(this.maxItemsPerPage, maxItens));

    let query = this.repository.createQueryBuilder('category');

    if (search)
      query = query.where('LOWER(category.name) LIKE :search', { search: `%${search.toLowerCase()}%` });

    const [entities, total] = await query
      .take(maxItens)
      .skip((currentPage - 1) * maxItens)
      .orderBy('name', 'ASC')
      .getManyAndCount();

    const pageCount = Math.ceil(total / maxItens);

    return new PaginatedCategoryProxy(
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
  public async get(entityId: number): Promise<CategoryEntity> {
    const entity = await this.repository.findOne({
      where: {
        id: Number(entityId) || 0,
      },
    });

    if (!entity)
      throw new NotFoundException('A categoria que você procura não existe ou foi removida.');

    return entity;
  }

  /**
   * Método que cria uma entidade
   *
   * @param payload As informações para a criação
   */
  public async create(payload: CreateCategoryPayload): Promise<CategoryEntity> {
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
  private getEntityFromPayload(payload: CreateCategoryPayload): CategoryEntity {
    return new CategoryEntity({
      ...isValid(payload.name) && { name: payload.name },
      ...isValid(payload.color) && { color: payload.color },
    });
  }

  //#endregion

}

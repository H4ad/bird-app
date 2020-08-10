//#region Imports

import { CommentProxy } from './comment.proxy';

//#endregion

/**
 * A interface que representa as informações de uma categoria vindas da API
 */
export interface CategoryProxy {

  /**
   * A identificação dessa categoria
   */
  id: number;

  /**
   * O nome dessa categoria
   */
  name: string;

  /**
   * A cor dessa categoria
   */
  color: string;

  /**
   * A lista de comentários existentes nessa categoria
   */
  comments?: CommentProxy[];

}

/**
 * Método que retorna uns valores de uma categoria
 */
export function getFakeCategoryProxy(): CategoryProxy {
  return {
    id: 1,
    name: 'Typescript',
    color: '#FFC542',
    comments: [],
  };
}

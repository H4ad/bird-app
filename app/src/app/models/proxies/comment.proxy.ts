//#region Imports

import { CategoryProxy } from './category.proxy';

//#endregion

/**
 * A interface que representa as informações de um comentário vindos da API
 */
export interface CommentProxy {

  /**
   * A identificação desse comentário
   */
  id: number;

  /**
   * A data de quando foi criado esse comentário
   */
  createdAt: string;

  /**
   * A mensagem desse comentário
   */
  message: string;

  /**
   * O nome do autor desse comentário
   */
  personName: string;

  /**
   * O emoji que representa esse autor
   */
  personEmoji: string;

  /**
   * A cor de fundo da foto dessa pessoa
   */
  personColor: string;

  /**
   * A identificação da categoria
   */
  categoryId: number;

  /**
   * As informações sobre a categoria
   */
  category?: CategoryProxy;

}

/**
 * Método que retorna uns valores de um comentário
 */
export function getFakeCommentProxy(): CommentProxy {
  return {
    id: 1,
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non justo vitae velit accumsan laoreet eget at orci. Donec elit orci, vehicula vitae viverra ut, finibus id ex. ',
    categoryId: 2,
    createdAt: new Date().toISOString(),
    personName: 'Alice Smith',
    personEmoji: '👩',
    personColor: '#FF565E',
    category: {
      name: 'TypeScript',
      color: '#FFC542',
      comments: [],
      id: 2,
    },
  };
}

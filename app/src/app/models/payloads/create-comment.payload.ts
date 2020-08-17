/**
 * A interface que representa as informações necessárias para a criação de um comentário
 */
export interface CreateCommentPayload {

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

}

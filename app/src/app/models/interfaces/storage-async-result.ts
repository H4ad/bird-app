/**
 * A interface que representa os valores buscados do cache de forma assincrona
 */
export interface StorageAsyncResult<TProxy> {

  /**
   * Caso dê certo, aqui irá conter o valor buscado do cache
   */
  success?: TProxy | null;

  /**
   * Caso dê erro, aqui irá conter a mensagem erro
   */
  error?: string;

}

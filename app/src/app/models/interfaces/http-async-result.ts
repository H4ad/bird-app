//#region Imports

import { HttpErrorResponse } from '@angular/common/http';

//#endregion

/**
 * A interface que representa o resultado de uma requisição HTTP de forma assincrona
 */
export interface HttpAsyncResult<TProxy> {

  /**
   * Caso dê certo, aqui irá conter o valor buscado do cache
   */
  success?: TProxy;

  /**
   * Caso dê erro, aqui irá conter a mensagem erro
   */
  error?: HttpErrorResponse;

}

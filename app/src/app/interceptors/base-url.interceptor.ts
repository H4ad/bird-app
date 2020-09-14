//#region Imports

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

//#endregion

/**
 * A classe que representa o interceptor que adiciona o base url a requisição
 */
@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {

  /**
   * Método responsável chamado ao interceptar uma requisição HTTP
   *
   * @param req As informações da requisição
   * @param next A função para passar adiante a requisição
   */
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    req = req.clone({
      url: `${ environment.api.baseUrl }${ req.url }`,
    });

    return next.handle(req);
  }
}

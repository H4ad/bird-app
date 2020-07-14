//#region Imports

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

import { FooterState } from '../../models/enums/footer-state';

//#endregion

/**
 * A classe que representa o serviço que lida com os estilos e estados do footer do aplicativo
 */
@Injectable({
  providedIn: 'root',
})
export class FooterService {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    private readonly router: Router,
  ) {
    this.router.events.subscribe(() => {
      const currentUrl = this.router.url;

      if (currentUrl.startsWith('/main/categories'))
        return void this.selectedFooterSubject.next(FooterState.CATEGORIES);

      if (currentUrl.startsWith('/main/my-comments'))
        return void this.selectedFooterSubject.next(FooterState.MY_COMMENTS);

      if (currentUrl.startsWith('/main/all-comments'))
        return void this.selectedFooterSubject.next(FooterState.ALL_COMMENTS);
    });
  }

  //#endregion

  //#region Private Properties

  /**
   * O evento lançado para dizer qual é o menu do footer atualmente selecionado
   */
  private readonly selectedFooterSubject: BehaviorSubject<FooterState> = new BehaviorSubject<FooterState>(FooterState.CATEGORIES);

  //#endregion

  //#region Public Methods

  /**
   * Método que retorna a referência do Observable do evento que diz qual é o menu atualmente selecionado
   */
  public getCurrentSelectedFooter$(): Observable<FooterState> {
    return this.selectedFooterSubject.asObservable();
  }

  //#endregion

}

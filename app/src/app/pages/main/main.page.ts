//#region Imports

import { Component } from '@angular/core';

import { FooterState } from '../../models/enums/footer-state';
import { FooterService } from '../../services/footer/footer.service';

//#endregion

/**
 * A classe que representa a página inicia da aplicação
 */
@Component({
  selector: 'bird-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    private readonly footerService: FooterService,
  ) {
    this.footerService.getCurrentSelectedFooter$().subscribe(footerState => {
      this.currentSelectedFooter = footerState;
    });
  }

  //#endregion

  //#region Public Properties

  /**
   * O menu do footer que está atualmente selecionado
   */
  public currentSelectedFooter: FooterState = FooterState.CATEGORIES;

  /**
   * Os estados possíveis para o menu do footer
   */
  public footerState: typeof FooterState = FooterState;

  //#endregion

}

//#region Imports

import { Component } from '@angular/core';
import { TrackablePage } from '../../../common/trackable.page';

import { CategoryProxy, getFakeCategoryProxy } from '../../../models/proxies/category.proxy';

//#endregion

/**
 * A classe que representa a página que lista as categorias da aplicação
 */
@Component({
  selector: 'bird-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage extends TrackablePage {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor() {
    super();
  }

  //#endregion

  //#region Public Properties

  /**
   * A lista de categorias
   */
  public listCategories: CategoryProxy[] = [
    getFakeCategoryProxy(),
    getFakeCategoryProxy(),
    getFakeCategoryProxy(),
    getFakeCategoryProxy(),
  ];

  //#endregion

}

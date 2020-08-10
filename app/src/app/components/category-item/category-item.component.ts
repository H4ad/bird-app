//#region Imports

import { Component, Input } from '@angular/core';

import { CategoryProxy } from '../../models/proxies/category.proxy';

//#endregion

/**
 * A classe que representa o componente que exibe as informações de uma categoria
 */
@Component({
  selector: 'bird-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
})
export class CategoryItemComponent {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor() { }

  //#endregion

  //#region Inputs

  /**
   * As informações de conteúdo desse componente
   */
  @Input()
  public content: CategoryProxy;

  //#endregion

}


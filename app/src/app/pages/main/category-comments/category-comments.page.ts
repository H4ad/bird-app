//#region Imports

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//#endregion

/**
 * A classe que representa o componente que exibe os comentários de uma categoria
 */
@Component({
  selector: 'bird-category-comments',
  templateUrl: './category-comments.page.html',
  styleUrls: ['./category-comments.page.scss'],
})
export class CategoryCommentsPage {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
    this.categoryId = Number(this.route.snapshot.paramMap.get('categoryId')) || 0;

    if (this.categoryId === 0)
      return void this.router.navigateByUrl('/main/categories');

    console.log(this.categoryId);
  }

  //#endregion

  //#region Private Properties

  /**
   * A identificação da categoria
   */
  private readonly categoryId: number;

  //#endregion

}


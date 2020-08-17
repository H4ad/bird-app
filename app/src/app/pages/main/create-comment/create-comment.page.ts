//#region Imports

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//#endregion

/**
 * A classe que representa a página que cria um novo comentário para uma categoria
 */
@Component({
  selector: 'bird-create-comment',
  templateUrl: './create-comment.page.html',
  styleUrls: ['./create-comment.page.scss'],
})
export class CreateCommentPage {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
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

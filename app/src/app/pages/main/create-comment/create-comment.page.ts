//#region Imports

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AvatarItem } from '../../../models/interfaces/avatar-item';

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

  //#region Public Properties

  /**
   * A identificação da categoria
   */
  public readonly categoryId: number;

  /**
   * A lista de avatares disponíveis para o usuário
   */
  public readonly listAvatars: AvatarItem[] = [
    {
      personEmoji: 'assets/images/avatar_1.png',
      personColor: '#FFC542',
    },
    {
      personEmoji: 'assets/images/avatar_2.png',
      personColor: '#3DD598',
    },
    {
      personEmoji: 'assets/images/avatar_3.png',
      personColor: '#FF575F',
    },
    {
      personEmoji: 'assets/images/avatar_4.png',
      personColor: '#755FE2',
    },
  ];

  //#endregion

}

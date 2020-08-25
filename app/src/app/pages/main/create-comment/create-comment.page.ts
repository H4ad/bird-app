//#region Imports

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AvatarItem } from '../../../models/interfaces/avatar-item';
import { CreateCommentPayload } from '../../../models/payloads/create-comment.payload';
import { CommentService } from '../../../services/comment/comment.service';

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
    private readonly fb: FormBuilder,
    private readonly comment: CommentService,
    private readonly toast: ToastController,
    private readonly loading: LoadingController,
  ) {
    this.categoryId = Number(this.route.snapshot.paramMap.get('categoryId')) || 0;

    if (this.categoryId === 0)
      return void this.router.navigateByUrl('/main/categories');

    this.formGroup = this.fb.group({
      personName: ['', Validators.required],
      personAvatarIndex: [0, Validators.required],
      categoryId: [this.categoryId, Validators.required],
      message: ['', Validators.required],
    });
  }

  //#endregion

  //#region Public Properties

  /**
   * A referência do formulário
   */
  public formGroup: FormGroup;

  /**
   * Diz se está enviando esse formulário
   */
  public isSendingForm: boolean;

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

  //#region Public Methods

  /**
   * Método executado quando o formulário é enviado
   */
  public async onSubmit(): Promise<void> {
    if (this.isSendingForm)
      return;

    this.isSendingForm = true;

    const { personAvatarIndex, ...otherValues } = this.formGroup.getRawValue();

    const payload: CreateCommentPayload = {
      ...otherValues,
      personEmoji: this.listAvatars[personAvatarIndex].personEmoji,
      personColor: this.listAvatars[personAvatarIndex].personColor,
    };

    const loading = await this.loading.create({
      cssClass: 'bird--loading',
    });

    await loading.present();
    const [isSuccess, result] = await this.comment.createComment(payload);
    await loading.dismiss();

    await this.showMessage(result);

    this.isSendingForm = false;

    if (!isSuccess)
      return;

    await this.router.navigateByUrl(`/main/categories/${ this.categoryId }`);
  }

  //#endregion

  //#region Private Methods

  /**
   * Método que exibe a mensagem de erro
   *
   * @param message A mensagem
   */
  private async showMessage(message: string): Promise<void> {
    const toast = await this.toast.create({
      message,
      duration: 5_000,
      position: 'top',
    });

    await toast.present();
  }

  //#endregion

}

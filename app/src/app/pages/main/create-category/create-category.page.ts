//#region Imports

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

import { ColorItem } from '../../../models/interfaces/color-item';
import { CreateCategoryPayload } from '../../../models/payloads/create-category.payload';
import { CategoryService } from '../../../services/category/category.service';

//#endregion

/**
 * A classe que representa a página que é usada para criar uma nova categoria
 */
@Component({
  selector: 'bird-create-category',
  templateUrl: './create-category.page.html',
  styleUrls: ['./create-category.page.scss'],
})
export class CreateCategoryPage {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly category: CategoryService,
    private readonly toast: ToastController,
    private readonly loading: LoadingController,
  ) {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      colorIndex: [0, Validators.required],
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
   * A lista de cores disponíveis para o usuário
   */
  public readonly listColors: ColorItem[] = [
    {
      color: '#FFC542',
    },
    {
      color: '#3DD598',
    },
    {
      color: '#FF575F',
    },
    {
      color: '#755FE2',
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

    const { colorIndex, ...otherValues } = this.formGroup.getRawValue();

    const payload: CreateCategoryPayload = {
      ...otherValues,
      color: this.listColors[colorIndex].color,
    };

    const loading = await this.loading.create({
      cssClass: 'bird--loading',
    });

    await loading.present();
    const [isSuccess, result] = await this.category.createCategory(payload);
    await loading.dismiss();

    await this.showMessage(result);

    this.isSendingForm = false;

    if (!isSuccess)
      return;

    await this.router.navigateByUrl(`/main/categories`);
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
    });

    await toast.present();
  }

  //#endregion

}

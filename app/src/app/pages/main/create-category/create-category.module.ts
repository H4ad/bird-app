import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateCategoryPageRoutingModule } from './create-category-routing.module';
import { CreateCategoryPage } from './create-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateCategoryPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CreateCategoryPage,
  ],
})
export class CreateCategoryPageModule {}

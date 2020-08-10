import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryCommentsPageRoutingModule } from './category-comments-routing.module';
import { CategoryCommentsPage } from './category-comments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryCommentsPageRoutingModule,
  ],
  declarations: [
    CategoryCommentsPage,
  ],
})
export class CategoryCommentsPageModule {}

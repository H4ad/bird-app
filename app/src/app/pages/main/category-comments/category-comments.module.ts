import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CommentItemModule } from '../../../components/comment-item/comment-item.module';

import { CategoryCommentsPageRoutingModule } from './category-comments-routing.module';
import { CategoryCommentsPage } from './category-comments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryCommentsPageRoutingModule,
    CommentItemModule,
  ],
  declarations: [
    CategoryCommentsPage,
  ],
})
export class CategoryCommentsPageModule {}

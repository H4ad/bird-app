import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CommentItemModule } from '../../../components/comment-item/comment-item.module';

import { AllCommentsPageRoutingModule } from './all-comments-routing.module';
import { AllCommentsPage } from './all-comments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllCommentsPageRoutingModule,
    CommentItemModule,
  ],
  declarations: [
    AllCommentsPage,
  ],
})
export class AllCommentsPageModule {}

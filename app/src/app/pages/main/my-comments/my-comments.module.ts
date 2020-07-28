import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommentItemModule } from '../../../components/comment-item/comment-item.module';
import { MyCommentsPageRoutingModule } from './my-comments-routing.module';
import { MyCommentsPage } from './my-comments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyCommentsPageRoutingModule,
    CommentItemModule,
  ],
  declarations: [
    MyCommentsPage,
  ],
})
export class MyCommentsPageModule {}

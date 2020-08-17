import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateCommentPageRoutingModule } from './create-comment-routing.module';
import { CreateCommentPage } from './create-comment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateCommentPageRoutingModule,
  ],
  declarations: [
    CreateCommentPage,
  ],
})
export class CreateCommentPageModule {}

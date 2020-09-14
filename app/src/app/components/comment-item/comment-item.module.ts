import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { CommentItemComponent } from './comment-item.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    CommentItemComponent,
  ],
  declarations: [
    CommentItemComponent,
  ],
})
export class CommentItemModule {}

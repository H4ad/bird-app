import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { CategoryItemComponent } from './category-item.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    CategoryItemComponent,
  ],
  declarations: [
    CategoryItemComponent,
  ],
})
export class CategoryItemModule {}

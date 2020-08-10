import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryCommentsPage } from './category-comments.page';

const routes: Routes = [
  { path: '', component: CategoryCommentsPage },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class CategoryCommentsPageRoutingModule {}

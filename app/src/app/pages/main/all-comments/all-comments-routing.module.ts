import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllCommentsPage } from './all-comments.page';

const routes: Routes = [
  { path: '', component: AllCommentsPage },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AllCommentsPageRoutingModule {}

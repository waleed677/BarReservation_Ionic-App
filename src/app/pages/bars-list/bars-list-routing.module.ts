import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarsListPage } from './bars-list.page';

const routes: Routes = [
  {
    path: '',
    component: BarsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarsListPageRoutingModule {}

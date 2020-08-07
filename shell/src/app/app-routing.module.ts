import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { ListModule } from '@marci/list';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('@marci/list').then(m => m.ListModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

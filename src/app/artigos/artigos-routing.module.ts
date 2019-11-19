import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ArtigosComponent } from './components/artigos.component';

const routes: Routes = [
  {
    path: 'artigos',
    component: ArtigosComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ArtigosRoutingModule { }

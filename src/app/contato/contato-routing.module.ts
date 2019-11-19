import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContatoComponent } from './components/contato.component';

const routes: Routes = [
  {
    path: 'contato',
    component: ContatoComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ContatoRoutingModule { }

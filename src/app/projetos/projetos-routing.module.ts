import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProjetosComponent } from './components/projetos.component';

const routes: Routes = [
  {
    path: 'projetos',
    component: ProjetosComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProjetosRoutingModule { }

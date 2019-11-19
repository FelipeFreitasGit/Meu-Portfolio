import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SobreComponent } from './components/sobre.component';

const routes: Routes = [
  {
    path: 'sobre',
    component: SobreComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SobreRoutingModule { }

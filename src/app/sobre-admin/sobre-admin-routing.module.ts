import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SobreAdminComponent } from './components/sobre-admin.component';
import { SenhaComponent } from '../senha/senha.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {
    path: 'admin',
    component: SobreAdminComponent,
    children: [
      { path: 'senha', component: SenhaComponent },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SobreAdminRoutingModule { }

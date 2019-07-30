import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SenhaComponent } from './senha/senha.component';
import { AdminComponent } from './admin/admin.component';
import { SobreAdminComponent } from './admin/sobre-admin/sobre-admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'senha', component: SenhaComponent },
  { path: 'admin', component: AdminComponent,
    children: [
      {
        path: 'sobre-admin', component: SobreAdminComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

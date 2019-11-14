import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SenhaComponent } from './senha/senha.component';
import { SobreAdminComponent } from './sobre-admin/components/sobre-admin.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'meu-portifolio',  pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: SobreAdminComponent  },
  { path: 'pagina-nao-encontrada', component: NotFoundComponent },
  //{ path: '**', redirectTo: 'pagina-nao-encontrada' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

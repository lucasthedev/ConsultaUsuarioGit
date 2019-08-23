import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarDadosUsuarioComponent } from './listar-dados-usuario/listar-dados-usuario.component';


const routes: Routes = [
  {
    path: 'dadosUsuarioGit', component: ListarDadosUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

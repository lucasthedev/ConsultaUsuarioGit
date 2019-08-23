import { Component, OnInit } from '@angular/core';
import { UsuarioGitService } from '../usuario-git.service';
import { UsuarioGit } from '../UsuarioGit';

@Component({
  selector: 'app-listar-dados-usuario',
  templateUrl: './listar-dados-usuario.component.html',
  styleUrls: ['./listar-dados-usuario.component.css']
})
export class ListarDadosUsuarioComponent implements OnInit {

  usuarioGit: UsuarioGit;
  txtLogin = '';
  foundUsuer = false;
  mostraLoading : boolean;
  constructor(private service: UsuarioGitService) { }

  ngOnInit() {
    
  }

  findUsuarioGit(){
    this.mostraLoading = true;    
    this.service.listarUsuarioGi(this.txtLogin)
      .subscribe(dados => this.usuarioGit = dados);
      if(this.usuarioGit != null){
        this.foundUsuer = true;       
        this.mostraLoading = false;
      }
  }

}

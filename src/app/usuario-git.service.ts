import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { UsuarioGit } from './UsuarioGit';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGitService {

  constructor(private http: HttpClient) { }

  url = 'https://api.github.com/users/';

  listarUsuarioGi(userName){
    return this.http.get<UsuarioGit>(this.url + userName);
  }

}

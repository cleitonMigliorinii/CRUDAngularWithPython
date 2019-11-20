import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-gestao-academico',
  templateUrl: './gestao-academico.component.html',
  styleUrls: ['./gestao-academico.component.scss']
})
export class GestaoAcademicoComponent implements OnInit {

  listaUsuario = [];
  listaTurmas = [];
  usuario:any = new Object();
  constructor(private http: HttpService) {

  }

  ngOnInit() {
    this.buscarTodosUsuarios();
  }

   buscarTodosUsuarios() {
    return this.http.doPost('buscarTodosUsuarios',null).subscribe(retorno => {
      if (retorno != null) {
        this.listaUsuario = retorno;
        return this.listaUsuario;
      }
    });
  }

  salvarAluno(){

    return this.http.doPost('salvarUsuario',this.usuario).subscribe(retorno => {

        if(retorno.code === 200){
          this.usuario = new Object();
          alert('Sucesso !')
          this.buscarTodosUsuarios();
        }
    }, err =>{
      alert('Problema ao gravar !')
    });


  }

  editar(usuario){
    this.usuario = usuario;
  }

   deletarAluno(usuario){

    return this.http.doPost('deletarAluno',usuario).subscribe(retorno => {

        if(retorno.code === 200){
          this.buscarTodosUsuarios();
        }
    }, err =>{
      alert('Problema ao gravar !')
    });


  }

}

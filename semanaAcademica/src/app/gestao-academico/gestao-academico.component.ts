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

  }

  salvarAluno(){


  }

  editar(usuario){

  }

  deletarAluno(usuario){


  }

}

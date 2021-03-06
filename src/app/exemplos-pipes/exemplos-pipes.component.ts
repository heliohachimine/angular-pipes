import { Component, OnInit } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';
import { resolve } from 'url';
import { Observable } from 'rxjs/Rx'

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning Javascript Data Structures And Algorithms 2nd Ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  };

  livros: string[] = ['Java','Angular 2'];
  filtro: string='';

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('valor assincrono'), 5000) 
  });

  valorAsync2 = Observable.interval(2000)
  .map(valor => 'Valor Assincrono 2')

  constructor() { }

  ngOnInit() {
  }

  addCurso(valor){
    this.livros.push(valor);
    console.log(valor);
    console.log(this.livros);
  }
  obterCursos(){
    if(this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === ''){
      return this.livros;
    } 
    return this.livros.filter((v)=> {
      if(v.toLowerCase().indexOf(this.filtro.toLowerCase())){
        return false;
      }
      return true;
    });
    
  }

}

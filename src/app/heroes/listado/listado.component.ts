import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes:string[] = ['Spiderman', 'Ironam', 'Beto', 'Hulk','Capitan América'];
  heroesBorrados:string[]= [];
  borrarHeroe(){
    //let heroeBorrado = '';
    var heroeBorrado = this.heroes.shift();
    if(heroeBorrado != undefined ){
      this.heroesBorrados.push(heroeBorrado!);
    }

  }
}

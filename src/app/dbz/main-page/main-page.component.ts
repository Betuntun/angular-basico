import { Component, OnInit } from '@angular/core';
import { iif } from 'rxjs';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {


  nuevo:Personaje={
    nombre:'Maestro roshi',
    poder:10
  }


  constructor(){

  }
}

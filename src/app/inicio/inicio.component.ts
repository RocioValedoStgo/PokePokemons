import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
  pokemons : any = [
    {
      id: 1,
      name: 'Charizard',
      type: 'Fuego/Volador',
      cp: '3000',
      generation: '1er',
      image: 'assets/img/charizard.png'
    },
    {
      id: 2,
      name: 'Eevee',
      type: 'Normal',
      cp: '700',
      generation: '1er',
      image: 'assets/img/eevee.png'
    },
    {
      id: 3,
      name: 'Pikachu',
      type: 'Electrico',
      cp: '3000',
      generation: '1er',
      image: 'assets/img/pikachu.jpg'
    },
    {
      id: 4,
      name: 'Ponyta',
      type: 'Fuego',
      cp: '2500',
      generation: '1er',
      image: 'assets/img/ponyta.png'
    }
  ];


  constructor() { }

  ngOnInit() {
    //consulta
    //solo quiere el listado
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxIndexedDB } from 'ngx-indexed-db';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  private db = new NgxIndexedDB('myDb',1); 

    name = new FormControl('');
    type = new FormControl('');
    cp = new FormControl('');
    generation = new FormControl('');
    //image = new FormControl('');

    pokemons: any [];

  constructor() { 
    console.log('db')
    this.db.openDatabase(1, evt =>{
      console.log(evt);
      let objetStore = evt.currentTarget.result.createObject('pokemons', {keyPath: 'id', autoIncrement: true});//se crea un evento que va a ejecutarse en el navegador, tipo almacennamiento
      objetStore.createIndex('name', 'name');
      objetStore.createIndex('type', 'type');
      objetStore.createIndex('generation', 'generation');
      objetStore.createIndex('cp', 'cp');
    });
  }

  ngOnInit() {
    this.db.openDatabase(1, evt => {
      console.log(evt);
    }).then(res => {
      this.db.getAll('pokemons').then((pokemons) => {
        console.log(pokemons); //this.pokemons = pokemons -> en inicio
      }, (error) => {
        console.log(error);
      });
    }); 
  }

  Crear() {
    
    let data = {
      name: this.name.value,
      type: this.type.value,
      cp: this.cp.value,
      generation: this.generation.value
    };

    console.log('Datos Formulario:', data);

    this.db.add('pokemons',data).then (
      (response) => {
      console.log(response);
      },
      error => {
        console.log(error);
      }
      );
  }
}

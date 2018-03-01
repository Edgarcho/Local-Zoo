import { Component } from '@angular/core';
import { Animal } from './animal-modele';

@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
    <h1>Portland Zoo</h1>
    <p>List of animal at the zoo<p>
    <animal-list></animal-list>

    <div>
      <div *ngIf='selectedAnimal'>
        <h3>{{selectedAnimal.species}}</h3>
        <h3>Edit Animal</h3>
        <h4>Name:{{selectedAnimal.name}}</h4>
        <h4>Caretakers:{{selectedAnimal.caretakers}}</h4>
        <h4>Age:{{selectedAnimal.age}}</h4>
        <h4>Sex:{{selectedAnimal.sex}}</h4>
        <label>Enter name:</label>
        <input [(ngModel)]='selectedAnimal.name'>
        <label>Enter caretakers:</label>
        <input [(ngModel)]='selectedAnimal.caretakers'>
        <label>Enter Age:</label>
        <input [(ngModel)]='selectedAnimal.age'>
        <br>
        <input type='radio' [(ngModel)]='selectedAnimal.sex' [value]="Male">Male<br>
        <input type='radio' [(ngModel)]='selectedAnimal.sex' [value]="Female">Female<br>
        <button (click)='finishedEditing()'>Done</button>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {

  selectedAnimal: null;

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }
  finishedEditing(){
    this.selectedAnimal = null;
  }
}

export class Animal {
  constructor(public species: string, public name: string, public age: number, public diet: string, public location: string, public caretakers: number, public sex: string, public likes: string, public dislikes: string){}
}

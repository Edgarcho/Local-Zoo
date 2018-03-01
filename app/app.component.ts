import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
    <h1>Portland Zoo</h1>
    <p>List of animal at the zoo<p>
    <ul>
      <li *ngFor='let currentAnimal of animals'>{{currentAnimal.species}} <button (click)='editAnimal(currentAnimal)'>Edit!</button></li>
    </ul>
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
animals: Animal[] = [
  new Animal('Arctic Fox','Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool shade', 'Loud noises'),
  new Animal('Ocelot','Prince', 4, 'Carnivore', 'Tropical Rain Forest Building' , 6, 'Male', 'Laying in the sunshine', 'Toys that are not rope-based'),
  new Animal('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Northern Trail', 2, 'Female', 'Delicate roots and leaves', 'Loud Noises')
  ];
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

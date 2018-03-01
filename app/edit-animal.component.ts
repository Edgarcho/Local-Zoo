import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal-modele';

@Component({
  selector: 'edit-animal',
  template: `
  <div>
    <div *ngIf='childSelectedAnimal'>
      <h3>{{childSelectedAnimal.species}}</h3>
      <h3>Edit Animal</h3>
      <h4>Name:{{childSelectedAnimal.name}}</h4>
      <h4>Caretakers:{{childSelectedAnimal.caretakers}}</h4>
      <h4>Age:{{childSelectedAnimal.age}}</h4>
      <h4>Sex:{{childSelectedAnimal.sex}}</h4>
      <label>Enter name:</label>
      <input [(ngModel)]='childSelectedAnimal.name'>
      <label>Enter caretakers:</label>
      <input [(ngModel)]='childSelectedAnimal.caretakers'>
      <label>Enter Age:</label>
      <input [(ngModel)]='childSelectedAnimal.age'>
      <br>
      <input type='radio' [(ngModel)]='childSelectedAnimal.sex' [value]="Male">Male<br>
      <input type='radio' [(ngModel)]='childSelectedAnimal.sex' [value]="Female">Female<br>
      <button (click)='doneButtonClick()'>Done</button>
    </div>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

}

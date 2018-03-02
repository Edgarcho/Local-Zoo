import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div id= editForm>
    <div *ngIf='childSelectedAnimal'>
      <h3>Edit Animal Record</h3>
      <label for='name'>Name:</label>
      <input [(ngModel)]='childSelectedAnimal.name'>
      <br>
      <label for='caretakers'>Caretakers:</label>
      <input [(ngModel)]='childSelectedAnimal.caretakers'>
      <br>
      <label for='age'>Age:</label>
      <input [(ngModel)]='childSelectedAnimal.age'>
      <br>
      <button class='btn btn info' (click)='doneButtonClicked()'>Done</button>
    </div>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickSender.emit();
  }
}

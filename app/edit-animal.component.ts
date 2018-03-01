import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div>
    <div *ngIf='childSelectedAnimal'>
      <form>
        <div class='form-group'>
          <label for='name'>Name</label>
          <input [(ngModel)]='childSelectedAnimal.name'>
        </div>
        <div class='form-group'>
          <label for='caretakers'>Caretakers</label>
          <input [(ngModel)]='childSelectedAnimal.caretakers'>
        </div>
        <div class='form-group'>
          <label for='age'>age</label>
          <input [(ngModel)]='childSelectedAnimal.age'>
        </div>
        <button (click)='doneButtonClicked()'>Done</button>
      </form>
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

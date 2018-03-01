import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div>
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
  `
})

export class NewAnimalComponent {

}

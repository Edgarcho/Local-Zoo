import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <div id = "newAnimalForm">
      <h3> Create A New Animal Record </h3>
      <label for='species'>Species:</label>
      <input #newSpecies>
      <label for='name'>Name:</label>
      <input #newName>
      <label for='age'>Age:</label>
      <input #newAge>
      <br>
      <label for='diet'>Diet:</label>
      <input #newDiet>
      <label for='location'>Location:</label>
      <input #newLocation>
      <label for='caretakers'>Caretakers:</label>
      <input #newCaretakers>
      <br>
      <label for='sex'>Sex</label>
      <select #newSex>
        <option [value]="Male"> Male</option>
        <option [value]="Female"> Female</option>
      </select>
      <label for='likes'>Likes:</label>
      <input #newLikes>
      <label for='dislikes'>Dislikes:</label>
      <input #newDislikes>
      <button class='btn btn-success' (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add</button>
    </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    let newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }

}

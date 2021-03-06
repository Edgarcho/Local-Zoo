import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)='onChange($event.target.value)'>
      <option value="allAnimals" selected="selected">All Animals</option>
      <option value="youngAnimals">Only young animals</option>
      <option value="matureAnimals">Only mature animals</option>
  </select>
  <table class='table table-dark'>
    <thead>
      <tr>
        <th scope='col'>Species</th>
        <th scope='col'>Name</th>
        <th scope='col'>Age</th>
        <th scope='col'>Diet</th>
        <th scope='col'>Location</th>
        <th scope='col'>Caretakers</th>
        <th scope='col'>Sex</th>
        <th scope='col'>Likes</th>
        <th scope='col'>Dislikes<th>
        <th scope='col'>Edit Animal Record<th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor='let currentAnimal of childAnimalsList | completeness:filterByCompleteness'>
        <td>{{currentAnimal.species}}</td>
        <td>{{currentAnimal.name}}</td>
        <td>{{currentAnimal.age}}</td>
        <td>{{currentAnimal.diet}}</td>
        <td>{{currentAnimal.location}}</td>
        <td>{{currentAnimal.caretakers}}</td>
        <td>{{currentAnimal.sex}}</td>
        <td>{{currentAnimal.likes}}</td>
        <td>{{currentAnimal.dislikes}}<td>
        <td><button (click)='editButtonHasBeenClicked(currentAnimal)'>Edit!</button><td>
      </tr>
    </tbody>
  </table>
  `
})

export class AnimalListComponent {
  @Input() childAnimalsList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByCompleteness: string = "allAnimals";

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
  onChange(optionFromMenu){
    this.filterByCompleteness = optionFromMenu;
  }
}

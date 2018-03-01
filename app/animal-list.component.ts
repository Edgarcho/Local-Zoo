import { Component, Input } from '@angular/core';
import { Animal } from './animal-modele';

@Component({
  selector: 'animal-list',
  template: `
  <ul>
    <li *ngFor='let currentAnimal of animals'>{{currentAnimal.species}} <button (click)='editAnimal(currentAnimal)'>Edit!</button></li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalsList: Animal[];
}

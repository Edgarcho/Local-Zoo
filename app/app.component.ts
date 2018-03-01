import { Component } from '@angular/core';
import { Animal } from './animal-modele';

@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
    <h1>Portland Zoo</h1>
    <p>List of animal at the zoo<p>
    <animal-list [childAnimalsList]="masterAnimalList" (clickSender)='editAnimal($event)'></animal-list>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickSender)='finishedEditing()'></edit-animal>
  </div>
  `
})

export class AppComponent {
  selectedAnimal: null;

  masterAnimalList: Animal[] = [
    new Animal('Arctic Fox','Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool shade', 'Loud noises'),
    new Animal('Ocelot','Prince', 4, 'Carnivore', 'Tropical Rain Forest Building' , 6, 'Male', 'Laying in the sunshine', 'Toys that are not rope-based'),
    new Animal('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Northern Trail', 2, 'Female', 'Delicate roots and leaves', 'Loud Noises')
    ];

    editAnimal(clickedAnimal) {
      this.selectedAnimal = clickedAnimal;
    }
    finishedEditing(){
      this.selectedAnimal = null;
    }
}

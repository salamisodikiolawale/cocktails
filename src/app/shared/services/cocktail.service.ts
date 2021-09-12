import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cocktail } from '../interfaces/cocktail.interface';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  public cocktails$: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
    {
      name: 'Sidecar',
      img: 'https://boiremixologie.com/cocktails/sidecar',
      description:
        "Le passé de ce cocktail est assez flou. Certaines histoires racontent que le Sidecar est originaire de Londres, d’autres insistent qu'il est né à Paris. Chose certaine, le nom est pour honorer un capitaine de la Première Guerre mondiale qui se promenait en moto du même nom.",
      ingredients: [
        { name: 'Perrier', quantity: 1 },
        { name: 'Rhum', quantity: 1 },
        { name: 'Menthe', quantity: 1 },
      ],
    },
    {
      name: 'Le Old Fashioned',
      img: 'https://maisonfoody.com/sites/default/files/styles/article_paragraph_image/public/2019-11/aquavit-fresh.jpg?itok=C17K5mqQ',
      description:
        'Pour la cinquième année classé premier, le Old fashionned se cramponne au sommet ! C’est le roi des cocktails ! Il consiste en un sucre imbibé d’amer sur lequel on verse du whisky.',
      ingredients: [
        { name: 'Cranberry', quantity: 1 },
        { name: 'Citron', quantity: 1 },
        { name: 'Vodka', quantity: 1 },
      ],
    },
    {
      name: 'la Sangria',
      img: 'https://maisonfoody.com/sites/default/files/styles/article_paragraph_image/public/2019-11/sangria.jpg?itok=LjVLCYpj',
      description:
        'Offrez à vos invités un petit détour par l’Espagne avec une Sangria rouge (il existe également des versions blanches et rose). ',
      ingredients: [
        { name: 'Rhum', quantity: 1 },
        { name: 'Triple sec', quantity: 1 },
        { name: 'Citron', quantity: 1 },
      ],
    },
  ]);

  //Retourne le detail d'un cocktail en fonction de l'index
  public getCocktail(index: number) {
    const cocktails = this.cocktails$.value;
    return cocktails[index];
  }

  constructor() {}
}

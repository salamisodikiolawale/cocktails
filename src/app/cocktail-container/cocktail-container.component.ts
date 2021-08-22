import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss'],
})
export class CocktailContainerComponent implements OnInit {
  public cocktails: Cocktail[] = [
    {
      name: 'Sidecar',
      img: 'https://boiremixologie.com/cocktails/sidecar',
      description:
        "Le passé de ce cocktail est assez flou. Certaines histoires racontent que le Sidecar est originaire de Londres, d’autres insistent qu'il est né à Paris. Chose certaine, le nom est pour honorer un capitaine de la Première Guerre mondiale qui se promenait en moto du même nom.",
    },
    {
      name: 'Le Old Fashioned',
      img: 'https://maisonfoody.com/sites/default/files/styles/article_paragraph_image/public/2019-11/aquavit-fresh.jpg?itok=C17K5mqQ',
      description:
        'Pour la cinquième année classé premier, le Old fashionned se cramponne au sommet ! C’est le roi des cocktails ! Il consiste en un sucre imbibé d’amer sur lequel on verse du whisky.',
    },
    {
      name: 'la Sangria',
      img: 'https://maisonfoody.com/sites/default/files/styles/article_paragraph_image/public/2019-11/sangria.jpg?itok=LjVLCYpj',
      description:
        'Offrez à vos invités un petit détour par l’Espagne avec une Sangria rouge (il existe également des versions blanches et rose). ',
    },
  ];

  public selectedCocktails!: Cocktail;
  constructor() {}

  public selectCocktail(index: number): void {
    this.selectedCocktails = this.cocktails[index];
  }

  ngOnInit(): void {
    this.selectedCocktails = this.cocktails[0];
  }
}

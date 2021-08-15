import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.scss'],
})
export class CocktailDetailComponent implements OnInit {
  public cocktail: Cocktail = {
    name: 'Le Old Fashioned',
    img: 'https://maisonfoody.com/sites/default/files/styles/article_paragraph_image/public/2019-11/aquavit-fresh.jpg?itok=C17K5mqQ',
    description:
      'Pour la cinquième année classé premier, le Old fashionned se cramponne au sommet ! C’est le roi des cocktails ! Il consiste en un sucre imbibé d’amer sur lequel on verse du whisky.',
  };

  constructor() {}

  ngOnInit(): void {}
}

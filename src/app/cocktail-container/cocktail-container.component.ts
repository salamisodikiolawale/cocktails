import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cocktail } from '../shared/interfaces/cocktail.interface';
import { CocktailService } from '../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss'],
})
export class CocktailContainerComponent implements OnInit, OnDestroy {
  public cocktails: Cocktail[] = [];

  public subscription: Subscription = new Subscription();

  constructor(private cocktailService: CocktailService) {}

  //ngOnInit(): est le hook de prédilection pour recupere de la data
  ngOnInit(): void {
    //Inscription a la recuperation de tout les cocktails
    this.subscription.add(
      this.cocktailService.cocktails$.subscribe(
        (cocktails: Cocktail[]) => (this.cocktails = cocktails)
      )
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

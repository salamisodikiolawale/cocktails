import { Component, OnInit, Input } from '@angular/core';
import { PanierService } from 'src/app/shared/services/panier.service';
import { Cocktail } from '../../shared/interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.scss'],
})
export class CocktailDetailComponent implements OnInit {
  @Input() public cocktail!: Cocktail;

  constructor(private panierService: PanierService) {}

  ngOnInit(): void {}

  public addToPanier(): void {
    this.panierService.addToPanier(this.cocktail.ingredients);
  }
}

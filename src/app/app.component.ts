import { Component, OnInit } from '@angular/core';
import { Meal, RootObject } from './models/recipe.model';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}

  recipeData?: Meal;
  recipeTitle?: String;
  recipeInstructions?: String;
  recipeIngredient1?: String;
  recipeIngredient2?: String;
  recipeIngredient3?: String;
  recipeIngredient4?: String;
  recipeIngredient5?: String;
  recipeIngredient6?: String;
  recipeIngredient7?: String;
  recipeIngredient8?: String;
  recipeIngredient9?: String;
  recipeIngredient10?: String;
  recipeIngredient11?: String;
  recipeIngredient12?: String;
  recipeIngredient13?: String;
  recipeIngredient14?: String;
  recipeIngredient15?: String;
  recipeIngredient16?: String;
  recipeIngredient17?: String;
  recipeIngredient18?: String;
  recipeIngredient19?: String;
  recipeIngredient20?: String;
  a?: number;
  htmlToAdd?: String;

  ngOnInit(): void {
    this.recipeService.getRecipeData().subscribe({
      next: (response) => {
        this.recipeData = response.meals[0];
        this.recipeTitle = response.meals[0].strMeal;
        this.recipeInstructions = response.meals[0].strInstructions;
        this.recipeIngredient1 = response.meals[0].strIngredient1;
        this.recipeIngredient2 = response.meals[0].strIngredient2;
        this.recipeIngredient3 = response.meals[0].strIngredient3;
        this.recipeIngredient4 = response.meals[0].strIngredient4;
        this.recipeIngredient5 = response.meals[0].strIngredient5;
        this.recipeIngredient6 = response.meals[0].strIngredient6;
        this.recipeIngredient7 = response.meals[0].strIngredient7;
        this.recipeIngredient8 = response.meals[0].strIngredient8;
        this.recipeIngredient9 = response.meals[0].strIngredient9;
        this.recipeIngredient10 = response.meals[0].strIngredient10;
        this.recipeIngredient11 = response.meals[0].strIngredient11;
        this.recipeIngredient12 = response.meals[0].strIngredient12;
        this.recipeIngredient13 = response.meals[0].strIngredient13;
        this.recipeIngredient14 = response.meals[0].strIngredient14;
        this.recipeIngredient15 = response.meals[0].strIngredient15;
        this.recipeIngredient16 = response.meals[0].strIngredient16;
        this.recipeIngredient17 = response.meals[0].strIngredient17;
        this.recipeIngredient18 = response.meals[0].strIngredient18;
        this.recipeIngredient19 = response.meals[0].strIngredient19;
        this.recipeIngredient20 = response.meals[0].strIngredient20;

        if (!this.recipeIngredient2) {
          this.htmlToAdd = `<li>${this.recipeIngredient1}</li>`;
        } else if (!this.recipeIngredient3) {
          this.htmlToAdd = `<li>${this.recipeIngredient1}</li><li>${this.recipeIngredient2}</li>`;
        } else if (!this.recipeIngredient4) {
          this.htmlToAdd = `<li>${this.recipeIngredient1}</li><li>${this.recipeIngredient2}</li><li>${this.recipeIngredient3}</li>`;
        } else if (!this.recipeIngredient5) {
          this.htmlToAdd = `<li>${this.recipeIngredient1}</li><li>${this.recipeIngredient2}</li><li>${this.recipeIngredient3}</li><li>${this.recipeIngredient4}</li>`;
        } else if (!this.recipeIngredient6) {
          this.htmlToAdd = `<li>${this.recipeIngredient1}</li><li>${this.recipeIngredient2}</li><li>${this.recipeIngredient3}</li><li>${this.recipeIngredient4}</li>
          <li>${this.recipeIngredient5}</li>`;
        } else if (!this.recipeIngredient7) {
          this.htmlToAdd = `<li>${this.recipeIngredient1}</li><li>${this.recipeIngredient2}</li><li>${this.recipeIngredient3}</li><li>${this.recipeIngredient4}</li>
           <li>${this.recipeIngredient5}</li> <li>${this.recipeIngredient6}</li>`;
        } else if (!this.recipeIngredient8) {
          this.htmlToAdd = `<li>${this.recipeIngredient1}</li><li>${this.recipeIngredient2}</li><li>${this.recipeIngredient3}</li><li>${this.recipeIngredient4}</li>
          <li>${this.recipeIngredient5}</li><li>${this.recipeIngredient6}</li><li>${this.recipeIngredient7}</li>`;
        } else if (!this.recipeIngredient9) {
          this.htmlToAdd = `<li>${this.recipeIngredient1}</li><li>${this.recipeIngredient2}</li><li>${this.recipeIngredient3}</li><li>${this.recipeIngredient4}</li>
          <li>${this.recipeIngredient5}</li><li>${this.recipeIngredient6}</li><li>${this.recipeIngredient7}</li><li>${this.recipeIngredient8}</li>`;
        } else if (!this.recipeIngredient10) {
          this.htmlToAdd = `<li>${this.recipeIngredient1}</li><li>${this.recipeIngredient2}</li><li>${this.recipeIngredient3}</li><li>${this.recipeIngredient4}</li>
          <li>${this.recipeIngredient5}</li><li>${this.recipeIngredient6}</li><li>${this.recipeIngredient7}</li><li>${this.recipeIngredient8}</li>
          <li>${this.recipeIngredient9}</li>`;
        } else if (!this.recipeIngredient11) {
          this.htmlToAdd = `<li>${this.recipeIngredient1}</li><li>${this.recipeIngredient2}</li><li>${this.recipeIngredient3}</li><li>${this.recipeIngredient4}</li>
          <li>${this.recipeIngredient5}</li><li>${this.recipeIngredient6}</li><li>${this.recipeIngredient7}</li><li>${this.recipeIngredient8}</li>
          <li>${this.recipeIngredient9}</li><li>${this.recipeIngredient10}</li>`;
        } else if (!this.recipeIngredient12) {
          this.htmlToAdd = `<li>${this.recipeIngredient1}</li><li>${this.recipeIngredient2}</li><li>${this.recipeIngredient3}</li><li>${this.recipeIngredient4}</li>
          <li>${this.recipeIngredient5}</li><li>${this.recipeIngredient6}</li><li>${this.recipeIngredient7}</li><li>${this.recipeIngredient8}</li>
          <li>${this.recipeIngredient9}</li><li>${this.recipeIngredient10}</li><li>${this.recipeIngredient11}</li>`;
        } else if (!this.recipeIngredient13) {
          this.htmlToAdd = `<li>${this.recipeIngredient1}</li><li>${this.recipeIngredient2}</li><li>${this.recipeIngredient3}</li><li>${this.recipeIngredient4}</li>
          <li>${this.recipeIngredient5}</li><li>${this.recipeIngredient6}</li><li>${this.recipeIngredient7}</li><li>${this.recipeIngredient8}</li>
          <li>${this.recipeIngredient9}</li><li>${this.recipeIngredient10}</li><li>${this.recipeIngredient11}</li><li>${this.recipeIngredient12}</li>`;
        } else if (!this.recipeIngredient14) {
          this.htmlToAdd = `<li>${this.recipeIngredient1}</li><li>${this.recipeIngredient2}</li><li>${this.recipeIngredient3}</li><li>${this.recipeIngredient4}</li>
          <li>${this.recipeIngredient5}</li><li>${this.recipeIngredient6}</li><li>${this.recipeIngredient7}</li><li>${this.recipeIngredient8}</li>
          <li>${this.recipeIngredient9}</li><li>${this.recipeIngredient10}</li><li>${this.recipeIngredient11}</li><li>${this.recipeIngredient12}</li>
          <li>${this.recipeIngredient13}</li>`;
        } else if (!this.recipeIngredient15) {
          this.htmlToAdd = `<li>${this.recipeIngredient1}</li><li>${this.recipeIngredient2}</li><li>${this.recipeIngredient3}</li><li>${this.recipeIngredient4}</li>
          <li>${this.recipeIngredient5}</li><li>${this.recipeIngredient6}</li><li>${this.recipeIngredient7}</li><li>${this.recipeIngredient8}</li>
          <li>${this.recipeIngredient9}</li><li>${this.recipeIngredient10}</li><li>${this.recipeIngredient11}</li><li>${this.recipeIngredient12}</li>
          <li>${this.recipeIngredient13}</li><li>${this.recipeIngredient14}</li>`;
        } else if (!this.recipeIngredient16) {
          this.htmlToAdd = `<li>${this.recipeIngredient1}</li><li>${this.recipeIngredient2}</li><li>${this.recipeIngredient3}</li><li>${this.recipeIngredient4}</li>
          <li>${this.recipeIngredient5}</li><li>${this.recipeIngredient6}</li><li>${this.recipeIngredient7}</li><li>${this.recipeIngredient8}</li>
          <li>${this.recipeIngredient9}</li><li>${this.recipeIngredient10}</li><li>${this.recipeIngredient11}</li><li>${this.recipeIngredient12}</li>
          <li>${this.recipeIngredient13}</li><li>${this.recipeIngredient14}</li><li>${this.recipeIngredient15}</li>`;
        } else if (!this.recipeIngredient17) {
          this.htmlToAdd = `<li>${this.recipeIngredient1}</li><li>${this.recipeIngredient2}</li><li>${this.recipeIngredient3}</li><li>${this.recipeIngredient4}</li>
          <li>${this.recipeIngredient5}</li><li>${this.recipeIngredient6}</li><li>${this.recipeIngredient7}</li><li>${this.recipeIngredient8}</li>
          <li>${this.recipeIngredient9}</li><li>${this.recipeIngredient10}</li><li>${this.recipeIngredient11}</li><li>${this.recipeIngredient12}</li>
          <li>${this.recipeIngredient13}</li><li>${this.recipeIngredient14}</li><li>${this.recipeIngredient15}</li><li>${this.recipeIngredient16}</li>`;
        } else if (!this.recipeIngredient18) {
          this.htmlToAdd = `<li>${this.recipeIngredient1}</li><li>${this.recipeIngredient2}</li><li>${this.recipeIngredient3}</li><li>${this.recipeIngredient4}</li>
          <li>${this.recipeIngredient5}</li><li>${this.recipeIngredient6}</li><li>${this.recipeIngredient7}</li><li>${this.recipeIngredient8}</li>
          <li>${this.recipeIngredient9}</li><li>${this.recipeIngredient10}</li><li>${this.recipeIngredient11}</li><li>${this.recipeIngredient12}</li>
          <li>${this.recipeIngredient13}</li><li>${this.recipeIngredient14}</li><li>${this.recipeIngredient15}</li><li>${this.recipeIngredient16}</li>
          <li>${this.recipeIngredient17}</li>`;
        } else if (!this.recipeIngredient19) {
          this.htmlToAdd = `<li>${this.recipeIngredient1}</li><li>${this.recipeIngredient2}</li><li>${this.recipeIngredient3}</li><li>${this.recipeIngredient4}</li>
          <li>${this.recipeIngredient5}</li><li>${this.recipeIngredient6}</li><li>${this.recipeIngredient7}</li><li>${this.recipeIngredient8}</li>
          <li>${this.recipeIngredient9}</li><li>${this.recipeIngredient10}</li><li>${this.recipeIngredient11}</li><li>${this.recipeIngredient12}</li>
          <li>${this.recipeIngredient13}</li><li>${this.recipeIngredient14}</li><li>${this.recipeIngredient15}</li><li>${this.recipeIngredient16}</li>
          <li>${this.recipeIngredient17}</li><li>${this.recipeIngredient18}</li>`;
        } else if (!this.recipeIngredient20) {
          this.htmlToAdd = `<li>${this.recipeIngredient1}</li><li>${this.recipeIngredient2}</li><li>${this.recipeIngredient3}</li><li>${this.recipeIngredient4}</li>
          <li>${this.recipeIngredient5}</li><li>${this.recipeIngredient6}</li><li>${this.recipeIngredient7}</li><li>${this.recipeIngredient8}</li>
          <li>${this.recipeIngredient9}</li><li>${this.recipeIngredient10}</li><li>${this.recipeIngredient11}</li><li>${this.recipeIngredient12}</li>
          <li>${this.recipeIngredient13}</li><li>${this.recipeIngredient14}</li><li>${this.recipeIngredient15}</li><li>${this.recipeIngredient16}</li>
          <li>${this.recipeIngredient17}</li><li>${this.recipeIngredient18}</li><li>${this.recipeIngredient19}</li>`;
        } else {
          this.htmlToAdd = `<li>${this.recipeIngredient1}</li><li>${this.recipeIngredient2}</li><li>${this.recipeIngredient3}</li><li>${this.recipeIngredient4}</li>
          <li>${this.recipeIngredient5}</li><li>${this.recipeIngredient6}</li><li>${this.recipeIngredient7}</li><li>${this.recipeIngredient8}</li>
          <li>${this.recipeIngredient9}</li><li>${this.recipeIngredient10}</li><li>${this.recipeIngredient11}</li><li>${this.recipeIngredient12}</li>
          <li>${this.recipeIngredient13}</li><li>${this.recipeIngredient14}</li><li>${this.recipeIngredient15}</li><li>${this.recipeIngredient16}</li>
          <li>${this.recipeIngredient17}</li><li>${this.recipeIngredient18}</li><li>${this.recipeIngredient19}</li><li>${this.recipeIngredient20}</li>`;
        }
      },
    });
  }
}

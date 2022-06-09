import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Meal, RootObject } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}
  getRecipeData(){
    return this.http.get<RootObject>(environment.recipeApiBaseUrl);
  }
}

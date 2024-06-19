import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Jobs } from '../models/jobs-model';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  favoriteKey:string="favorites";
  constructor(){}
  setFavorites(favoriteList:Jobs[]):void
  {
    localStorage.setItem(this.favoriteKey,JSON.stringify(favoriteList));
  }
  getFavorites():Jobs[]
  {
    const getFavorites:Jobs[]=JSON.parse(localStorage.getItem(this.favoriteKey) || '[]');
    return getFavorites;
  }
}

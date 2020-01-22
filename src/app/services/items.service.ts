import { Injectable } from '@angular/core';
import { ITEMS } from './items.json';
import { Items } from '../tuto/Items';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  getItems(): Observable<Items[]>{
    return of(ITEMS);
  }

}

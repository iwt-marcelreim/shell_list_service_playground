import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class SearchService {
  private searchResponse = new Subject<any>();
  currentMessage = this.searchResponse.asObservable();

  constructor() { }

  changeMessage(message: any) {
    this.searchResponse.next(message);
  }
}

import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchResponse = new BehaviorSubject<any>('service');

  constructor() { }

  changeMessage(message: any) {
    this.searchResponse.next(message);
  }

  getMessage(): Observable<any>{
    return this.searchResponse.asObservable();
  }
}

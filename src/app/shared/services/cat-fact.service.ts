import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CatFactService {
  constructor(private http: HttpClient){
}

  getCatFacts(): Observable<any> {
    const url = 'https://cat-fact.herokuapp.com/facts';
    return this.http.get(url);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../molecules/recommendations/recommendations.component.model';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private readonly http: HttpClient) { }

  url: string = 'https://backend-datacommerce.onrender.com/backend-datacommerce/api/v1/'


  getSales(): Observable<Product> {
    return this.http.get<Product>(this.url + 'sales');
  }

  getChannels(): Observable<any>  {
    return this.http.get(this.url + 'channel');
  }
}

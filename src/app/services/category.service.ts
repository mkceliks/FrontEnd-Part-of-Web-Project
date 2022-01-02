import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Brands } from '../models/brands';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = 'https://localhost:44356/api/brands/getall';


  constructor(private httpClient: HttpClient) { }
  
  getCategory():Observable<ListResponseModel<Brands>> {

    return this.httpClient.get<ListResponseModel<Brands>>(this.apiUrl);

  }
}

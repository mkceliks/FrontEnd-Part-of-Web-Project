import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/products';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { Brands } from '../models/brands';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44356/api/';

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>> {

    let newPath = this.apiUrl + "products/getall"

    return this.httpClient.get<ListResponseModel<Product>>(newPath);

  }
  
  getProductsByBrandId(brandId:number):Observable<ListResponseModel<Product>> {

    let newPath = this.apiUrl + "products/getallbybrandid?brandId="+ brandId

    return this.httpClient.get<ListResponseModel<Product>>(newPath);

  }

  add(product:Product):Observable<ResponseModel>{

    return this.httpClient.post<ResponseModel>(this.apiUrl+"products/add",product)

  }

}

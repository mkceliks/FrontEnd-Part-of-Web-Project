import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/products';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { Brands } from '../models/brands';
import { ProductImage } from '../models/productImages';
import { PairWithDetails } from '../models/details';

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

  getImages():Observable<ListResponseModel<ProductImage>>{
    
    let newPath = this.apiUrl + "productimages/getall"

    return this.httpClient.get<ListResponseModel<ProductImage>>(newPath)

  }
  
  getProductsByBrandId(brandId:number):Observable<ListResponseModel<Product>> {

    let newPath = this.apiUrl + "products/getallbybrandid?brandId="+ brandId

    return this.httpClient.get<ListResponseModel<Product>>(newPath);

  }
  
  getInfo(productId:number):Observable<ListResponseModel<PairWithDetails>> {

    let newPath = this.apiUrl + "products/getallwithdetailsbyid?productId="+ productId

    return this.httpClient.get<ListResponseModel<PairWithDetails>>(newPath);

  }

  add(product:Product):Observable<ResponseModel>{

    return this.httpClient.post<ResponseModel>(this.apiUrl+"products/add",product)

  }

}

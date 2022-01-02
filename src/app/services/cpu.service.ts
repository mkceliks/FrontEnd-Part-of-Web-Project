import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CPU } from '../models/cpu';

@Injectable({
  providedIn: 'root'
})
export class CpuService {


  apiUrl = 'https://localhost:44356/api/cpu/getall';


  constructor(private httpClient:HttpClient ) {}

  getCPU():Observable<ListResponseModel<CPU>> {

    return this.httpClient.get<ListResponseModel<CPU>>(this.apiUrl);

  }
  
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { GPU } from '../models/gpu';

@Injectable({
  providedIn: 'root'
})
export class GpuService {

  apiUrl = 'https://localhost:44356/api/gpu/getall';

  constructor(private httpClient:HttpClient) { }

  getGPU():Observable<ListResponseModel<GPU>> {

    return this.httpClient.get<ListResponseModel<GPU>>(this.apiUrl);

  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RAM } from '../models/ram';

@Injectable({
  providedIn: 'root'
})
export class RamService {

  apiUrl = 'https://localhost:44356/api/ram/getall';

  constructor(private httpClient:HttpClient) { }

  getRAM():Observable<ListResponseModel<RAM>> {

    return this.httpClient.get<ListResponseModel<RAM>>(this.apiUrl);

  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Storage } from '../models/storage';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  apiUrl = 'https://localhost:44356/api/storage/getall';

  constructor(private httpClient:HttpClient) { }

  getStorage():Observable<ListResponseModel<Storage>> {

    return this.httpClient.get<ListResponseModel<Storage>>(this.apiUrl);

  }

}

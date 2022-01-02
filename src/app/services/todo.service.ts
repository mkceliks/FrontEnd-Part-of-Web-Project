import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private httpClient: HttpClient) { }

  getTodos():Observable<Todo[]> {

    let newPath = this.apiUrl + "todos"

    return this.httpClient.get<Todo[]>(newPath);

  }
  
  getTodosByCategory(userId:number):Observable<Todo[]> {

    let newPath = this.apiUrl + "todos/category/" + userId

    return this.httpClient.get<Todo[]>(newPath);

  }
}

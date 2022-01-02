import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:Todo[] = [];

  constructor(private todoService:TodoService, 
    private activatedRoot:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoot.params.subscribe(params => {

      if(params["userId"]){
        this.getTodosByCategory(params["userId"])
      }else{
        this.getTodos()
      }

    })
    
  }

  getTodos(){
    this.todoService.getTodos().subscribe(response => {
      this.todos = response
    })
  }

  getTodosByCategory(userId:number){
    this.todoService.getTodosByCategory(userId).subscribe(response => {
      this.todos = response
    })
  }

}

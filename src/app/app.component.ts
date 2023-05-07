import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';
import { TodoService } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todoTxt: string = '';
  todos$?: Observable<Todo[]>
  
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos$ = this.todoService.getTodos$()
  }

  onSubmit() {
    console.log('todoTxt:', this.todoTxt)
    this.todoTxt = '';
  }
}

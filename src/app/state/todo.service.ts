import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { TodoStore, TodoState } from './todo.store';
import { TodoQuery } from "./todo.query";
import { Observable } from "rxjs";
import { Todo } from '../todo.model';

@Injectable({ providedIn: 'root' })
export class TodoService extends NgEntityService<TodoState> {

    constructor(store: TodoStore, private query: TodoQuery) {
        super(store);
    }

    getTodo$(id: string): Observable<Todo> {
        return this.query.getTodo(id);
    }

    getTodos$(): Observable<Todo[]> {
        return this.query.getTodos();
    }

    add$(todo: Todo) {
        this.query.addTodo(todo);
    }

    delete$(todo: Todo) {
        this.query.deleteTodo(todo);
    }

}
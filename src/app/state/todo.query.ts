import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TodoStore, TodoState } from './todo.store';
import { map, Observable, switchMap } from "rxjs";
import { Todo } from '../todo.model';

@Injectable({ providedIn: 'root' })
export class TodoQuery extends QueryEntity<TodoState> {

    constructor(store: TodoStore) {
        super(store);
    }

    getTodos(): Observable<Todo[]> {
        return this.selectAll()
    }

    addTodo(todo: Todo) {
        this.store.add(todo)
    }

    deleteTodo(todo: Todo) {
    this.store.remove(todo)
    }
    
    getTodo(id: number | string): Observable<Todo> {
        return this.getTodos().pipe(map(list => {
            return list.find(t => '' + t.id === '' + id) as Todo
        }
        ));
    }

}
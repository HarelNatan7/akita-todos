import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'akita-todos';
  todoTxt: string = '';
  todos?: Observable<any>
  
  onSubmit() {
    console.log('todoTxt:', this.todoTxt)
    this.todoTxt = '';
  }
}

import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AddTodo } from '../app.actions';
import { TodoSelectors } from '../app.selector';
import { Observable } from 'rxjs';
import { TodoModel } from '../todoModel';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css'],
})
export class GeneralComponent {
  @Select(TodoSelectors.items)
  items$!: Observable<TodoModel[]>;
 
  @Select(TodoSelectors.activeItems)
  activeItems$!: Observable<TodoModel[]>;
 
  @Select(TodoSelectors.doneItems)
  doneItems$!: Observable<TodoModel[]>;
 
  newTitle!: string;
 
  constructor(private store: Store) {}
 
  add() {
    this.store.dispatch(new AddTodo(this.newTitle));
    this.newTitle = "";
    
  }
  
  
}

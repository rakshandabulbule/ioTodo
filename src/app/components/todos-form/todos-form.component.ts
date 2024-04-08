import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Itodo } from 'src/app/models/todo';

@Component({
  selector: 'app-todos-form',
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.scss']
})
export class TodosFormComponent implements OnInit {

  @Output() todosEmmiter : EventEmitter<Itodo> = new EventEmitter<Itodo>()

  constructor() { }

  ngOnInit(): void {
  }
  ontodoAdd(todo : HTMLInputElement){
    if(todo.value.length > 0) {
      let todoObj : Itodo = {
        todoItem : todo.value
      }
      console.log(todoObj)
      todo.value = ''
      this.todosEmmiter.emit(todoObj)
    }
  }

}

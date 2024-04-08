import { Component } from '@angular/core';
import { Itodo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ioTodo';
  todoArr : Array<Itodo> = [
    {
      todoItem : "javascript"
    }
  ]

  onTodoAdd(todo : HTMLInputElement){
    let todoObj = {
      todoItem : todo.value
    }
    todo.value = ''
    this.todoArr.push(todoObj)
  }

  getTodoItem(data: any){
    console.log(data)
    this.todoArr.push(data)
  }
  
}
